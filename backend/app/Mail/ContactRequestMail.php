<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Http\UploadedFile;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactRequestMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public readonly array $contact,
        private readonly ?UploadedFile $invoice = null,
    ) {}

    public function envelope(): Envelope
    {
        $fullName = trim($this->contact['nombre'].' '.($this->contact['apellido'] ?? ''));

        return new Envelope(
            subject: "Nueva solicitud desde Ahorra Sin Líos — {$fullName}",
            replyTo: filled($this->contact['correo'] ?? null)
                ? [$this->contact['correo']]
                : [],
        );
    }

    public function content(): Content
    {
        return new Content(
            text: 'mail.contact-request',
            with: ['hasInvoice' => $this->invoice !== null],
        );
    }

    public function attachments(): array
    {
        if (! $this->invoice) {
            return [];
        }

        return [
            Attachment::fromPath($this->invoice->getRealPath())
                ->as(basename(str_replace('\\', '/', $this->invoice->getClientOriginalName())))
                ->withMime($this->invoice->getMimeType()),
        ];
    }
}
