document.addEventListener("DOMContentLoaded", function () {
   
    function encryptText(text) {
      const key = "password123";
      const encryptedText = CryptoJS.AES.encrypt(text, key).toString();
  
      return encryptedText;
    }
  
   
    function decryptText(encryptedText) {
      const key = "password123";
      const decryptedText = CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
  
      return decryptedText;
    }
  
   
    const inputText = document.getElementById("inputText");
    const buttonEncrypt = document.getElementById("button-encrypt");
    const buttonDecrypt = document.getElementById("button-decrypt");
    const textEncrypt = document.getElementById("text-encrypt");
  
    
    buttonEncrypt.addEventListener("click", function () {
      const plainText = inputText.value;
      const encryptedText = encryptText(plainText);
      textEncrypt.textContent = `Encrypted Text: ${encryptedText}`;
    });
  

    buttonDecrypt.addEventListener("click", function () {
      const encryptedText = textEncrypt.textContent.split(": ")[1]; 
      const decryptedText = decryptText(encryptedText);
      textEncrypt.textContent = `Decrypted Text: ${decryptedText}`;
    });

  




  //buttom
  
    const buttonCopy = document.getElementById("button-copy");
  
    buttonCopy.addEventListener("click", function () {
      // Obtener el párrafo con el texto encriptado
      const textEncryptParagraph = document.getElementById("text-encrypt");
      const encryptedText = textEncryptParagraph.textContent.split(": ")[1]; // Obtener el texto encriptado desde el párrafo
  
      const tempElement = document.createElement("textarea");
      tempElement.value = encryptedText;
  
      document.body.appendChild(tempElement);
  
      tempElement.select();
  
      try {
        document.execCommand("copy");
        buttonCopy.textContent = "Copied!";
        setTimeout(() => {
          buttonCopy.textContent = "Copy Text";
        }, 2000); // Restaurar después de 2 segundos
      } catch (err) {
        console.error("Unable to copy to clipboard. Use Ctrl+C / Cmd+C instead.");
      } finally {
        document.body.removeChild(tempElement);
      }
    });

});
  
  
  
