function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
   // Verifica que el argumento sea una cadena de texto de longitud 1
   if (typeof letra === 'string' && letra.length === 1) {
    // Convierte el argumento a minúsculas para una comparación insensible a mayúsculas
    letra = letra.toLowerCase();
    
    // Verifica si la letra es una vocal
    if ('aeiou'.includes(letra)) {
      return 'Es vocal';
    }
  }
  
  // Retorna "Dato incorrecto" si la letra no es una vocal o el argumento es inválido
  return 'Dato incorrecto';
}

module.exports = esVocal;
