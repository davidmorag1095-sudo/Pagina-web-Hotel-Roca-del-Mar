# Flujo obligatorio de Git y movimientos

**Fecha de adopción:** 27 de agosto de 2026

## Antes de cada commit

1. Verificar que la tarea esté terminada y que el proyecto no esté roto.
2. Actualizar el movimiento correspondiente con:
   - qué se hizo;
   - archivos modificados;
   - decisiones tomadas;
   - trabajo pendiente.
3. Revisar que no se incluyan archivos `.env`, credenciales, tokens, contraseñas ni otros secretos.
4. Preparar un commit pequeño, enfocado en una sola tarea y con un mensaje que describa exactamente el cambio.

## Antes de cada push

Informar al usuario:

- qué se va a subir;
- el mensaje de cada commit;
- los archivos principales modificados;
- el resultado de la verificación realizada.

No hacer push si el proyecto está roto, sin verificar o contiene información sensible. Nunca utilizar `force push`.

## Después de cada push

1. Confirmar que el push terminó correctamente.
2. Registrar en el movimiento el hash corto y el mensaje del commit de la etapa.
3. Guardar esa actualización mediante un commit documental pequeño, por ejemplo `docs: record initial structure commit`, y publicarlo después de informar nuevamente al usuario.

El commit documental registra el avance principal; no necesita crear una cadena infinita de registros sobre sí mismo.
