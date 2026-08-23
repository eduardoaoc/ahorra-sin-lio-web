<?php

namespace App\Http\Controllers;

use App\Mail\ContactRequestMail;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Throwable;

class ContactController extends Controller
{
    private const ALLOWED_FIELDS = [
        'nombre', 'apellido', 'correo', 'movil', 'mensaje', 'factura', 'privacidad', 'website',
    ];

    public function __invoke(Request $request): JsonResponse
    {
        $unexpectedFields = array_diff(array_keys($request->all()), self::ALLOWED_FIELDS);

        if ($unexpectedFields !== []) {
            throw ValidationException::withMessages([
                'formulario' => 'El formulario contiene campos no permitidos.',
            ]);
        }

        $data = $request->validate([
            'nombre' => ['required', 'string', 'max:100', 'not_regex:/[\r\n]/'],
            'apellido' => ['nullable', 'string', 'max:100', 'not_regex:/[\r\n]/'],
            'correo' => ['nullable', 'email:rfc', 'max:254', 'not_regex:/[\r\n]/'],
            'movil' => ['required', 'string', 'max:30', 'regex:/^[0-9+() .-]{6,30}$/'],
            'mensaje' => ['nullable', 'string', 'max:5000'],
            'privacidad' => ['required', 'accepted'],
            'website' => ['nullable', Rule::prohibitedIf(fn () => filled($request->input('website')))],
            'factura' => [
                'nullable',
                'file',
                'max:10240',
                'mimetypes:application/pdf,image/jpeg,image/png,image/webp',
                'extensions:pdf,jpg,jpeg,png,webp',
            ],
        ], [
            'factura.max' => 'La factura no puede superar los 10 MB.',
            'factura.mimetypes' => 'La factura debe ser PDF, JPG, PNG o WEBP.',
            'factura.extensions' => 'La extensión de la factura no está permitida.',
        ]);

        try {
            Mail::to(config('contact.recipient'))->send(
                new ContactRequestMail($data, $request->file('factura'))
            );
        } catch (Throwable $exception) {
            Log::error('No se pudo enviar la solicitud de contacto.', [
                'exception' => $exception,
            ]);

            return response()->json([
                'message' => 'No hemos podido enviar tu solicitud. Inténtalo de nuevo en unos segundos.',
            ], 503);
        }

        return response()->json([
            'message' => 'Solicitud enviada correctamente.',
        ]);
    }
}
