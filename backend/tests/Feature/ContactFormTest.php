<?php

namespace Tests\Feature;

use App\Mail\ContactRequestMail;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class ContactFormTest extends TestCase
{
    public function test_it_sends_a_request_without_optional_email_or_invoice(): void
    {
        Mail::fake();

        $this->postJson('/api/contact', [
            'nombre' => 'Carlos',
            'movil' => '+34 612 345 678',
            'privacidad' => '1',
        ])->assertOk();

        Mail::assertSent(ContactRequestMail::class, fn ($mail) => $mail->hasTo('Ahorrasinlios@gmail.com') && $mail->attachments() === []
        );
    }

    public function test_it_attaches_a_valid_pdf(): void
    {
        Mail::fake();

        $this->post('/api/contact', [
            'nombre' => 'Carlos',
            'movil' => '+34 612 345 678',
            'privacidad' => '1',
            'factura' => UploadedFile::fake()->create('factura.pdf', 100, 'application/pdf'),
        ])->assertOk();

        Mail::assertSent(ContactRequestMail::class, fn ($mail) => count($mail->attachments()) === 1);
    }

    public function test_it_rejects_invalid_or_oversized_files(): void
    {
        Mail::fake();

        $base = ['nombre' => 'Carlos', 'movil' => '612345678', 'privacidad' => '1'];

        $this->post('/api/contact', $base + [
            'factura' => UploadedFile::fake()->create('malware.exe', 10, 'application/octet-stream'),
        ])->assertSessionHasErrors('factura');

        $this->post('/api/contact', $base + [
            'factura' => UploadedFile::fake()->create('factura.pdf', 10241, 'application/pdf'),
        ])->assertSessionHasErrors('factura');

        Mail::assertNothingSent();
    }

    public function test_required_fields_email_and_honeypot_are_validated(): void
    {
        Mail::fake();

        $this->postJson('/api/contact', [])->assertUnprocessable()
            ->assertJsonValidationErrors(['nombre', 'movil', 'privacidad']);

        $this->postJson('/api/contact', [
            'nombre' => 'Carlos', 'movil' => '612345678', 'privacidad' => '1', 'correo' => 'no-es-email',
        ])->assertJsonValidationErrors('correo');

        $this->postJson('/api/contact', [
            'nombre' => 'Carlos', 'movil' => '612345678', 'privacidad' => '1', 'website' => 'spam',
        ])->assertJsonValidationErrors('website');

        Mail::assertNothingSent();
    }
}
