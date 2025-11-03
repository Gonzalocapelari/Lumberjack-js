**(KEYBOARD EVENT)**
EL OBJETO KEYBOARD EVENT: *Describe la interaccion del usuario con el teclado
(pudiendo ser una sola o multiples interacciones)
**tipos** de eventos: 'keydown', 'keypress', 'keyup'*

La forma de utilizarlo es:
**documento.addEventListener('tipo', (event) => {**

})
If the pressed key has a printed representation, the returned value is a non-empty Unicode character string containing the printable representation of the key. For example: if the pressed key is the Space key, the returned value is a single space (" "). If the pressed key is the B key, the returned value is the string "b". However, if the Shift key is pressed at the same time (so shiftKey is true), the returned value is the string "B".


**An object that, in addition of the properties defined in UIEvent(), can have the following properties:**

**key** Optional
A string, defaulting to "", that sets the value of KeyboardEvent.key.

**code** Optional
A string, defaulting to "", that sets the value of KeyboardEvent.code.

**location** Optional
A number, defaulting to 0, that sets the value of KeyboardEvent.location.

**repeat** Optional
A boolean value, defaulting to false, that sets the value of KeyboardEvent.repeat.

**isComposing** Optional
A boolean value, defaulting to false, that sets the value of KeyboardEvent.isComposing.

**charCode** Optional Deprecated
A number, defaulting to 0, that sets the value of the deprecated KeyboardEvent.charCode.

**keyCode** Optional Deprecated
A number, defaulting to 0, that sets the value of the deprecated KeyboardEvent.keyCode.

**which** Optional Deprecated
A number, defaulting to 0, that sets the value of the deprecated UIEvent.which.

**ctrlKey** Optional
A boolean value, defaulting to false, that sets the value of KeyboardEvent.ctrlKey.

**shiftKey** Optional
A boolean value, defaulting to false, that sets the value of KeyboardEvent.shiftKey.

**altKey** Optional
A boolean value, defaulting to false, that sets the value of KeyboardEvent.altKey.

**metaKey** Optional
A boolean value, defaulting to false, that sets the value of KeyboardEvent.metaKey.

