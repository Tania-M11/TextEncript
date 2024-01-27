document.addEventListener("DOMContentLoaded", function () {
    // Función para encriptar el texto
    function encryptText(text) {
      const key = "claveSuperSegura123";
  
      // Encriptar el texto usando CryptoJS
      const encryptedText = CryptoJS.AES.encrypt(text, key).toString();
  
      return encryptedText;
    }
  
   
    function decryptText(encryptedText) {
      const key = "claveSuperSegura123";
      const decryptedText = CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
  
      return decryptedText;
    }
  
    // Obtener elementos del DOM
    const inputText = document.getElementById("inputText");
    const buttonEncrypt = document.getElementById("button-encrypt");
    const buttonDecrypt = document.getElementById("button-decrypt");
    const textEncrypt = document.getElementById("text-encrypt");
  
    // Agregar evento al botón de encriptar
    buttonEncrypt.addEventListener("click", function () {
      const plainText = inputText.value;
      const encryptedText = encryptText(plainText);
      textEncrypt.textContent = `Encrypted Text: ${encryptedText}`;
    });
  
    // Agregar evento al botón de desencriptar
    buttonDecrypt.addEventListener("click", function () {
      const encryptedText = textEncrypt.textContent.split(": ")[1]; // Obtener el texto encriptado desde el párrafo
      const decryptedText = decryptText(encryptedText);
      textEncrypt.textContent = `Decrypted Text: ${decryptedText}`;
    });
  });
  




  //BOTÓN

  document.addEventListener("DOMContentLoaded", function () {
 
  
    // Obtener elementos del DOM para el botón de copiar
    const buttonCopy = document.getElementById("button-copy");
  
    // evento al botón de copiar
    buttonCopy.addEventListener("click", function () {
      // Obtener el párrafo con el texto encriptado
      const textEncryptParagraph = document.getElementById("text-encrypt");
      const encryptedText = textEncryptParagraph.textContent.split(": ")[1]; // Obtener el texto encriptado desde el párrafo
  
      // Crear un elemento de texto temporal
      const tempElement = document.createElement("textarea");
      tempElement.value = encryptedText;
  
      // Agregar el elemento temporal al DOM
      document.body.appendChild(tempElement);
  
      // Seleccionar y copiar el contenido del elemento temporal utilizando el API de Clipboard
      tempElement.select();
  
      try {
        document.execCommand("copy");
        // Cambiar el texto del botón después de copiar
        buttonCopy.textContent = "Copied!";
        setTimeout(() => {
          // Restaurar el texto del botón después de unos segundos
          buttonCopy.textContent = "Copy Text";
        }, 2000); // Restaurar después de 2 segundos
      } catch (err) {
        console.error("Unable to copy to clipboard. Use Ctrl+C / Cmd+C instead.");
      } finally {
        // Eliminar el elemento temporal del DOM
        document.body.removeChild(tempElement);
      }
    });
  
  });
  
