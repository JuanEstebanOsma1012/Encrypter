const encryptButton = document.querySelector(".encrypt");
const decryptButton = document.querySelector(".decrypt");

const inputArea = document.querySelector(".input");
const resultArea = document.querySelector(".result");

const messageNotFound = `<img src="../resources/Muñeco.png" alt="Imagen que representa que ningun mensaje ha sido procesado"
class="messageNotFound">
<h2>Ningún mensaje fue encontrado</h2>
<p>Ingresa el texto que desees encriptar o desencriptar</p>`

const htmlButton = "<button class='btnCopy'>Copiar</button>";

const conversion = {

    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"

}

const vocales = Object.keys(conversion);

encryptButton.onclick = () => {

    let texto = inputArea.value;
    if (validarTexto(texto)) {
        resultArea.innerHTML = `<textarea class='textResult' disabled>${encriptarTexto(texto)}</textarea>${htmlButton}`;
    } else {
        resultArea.innerHTML = messageNotFound;
    }

}

decryptButton.onclick = () => {

    let texto = inputArea.value;
    if (validarTexto(texto)) {
        resultArea.innerHTML = `<textarea class='textResult' disabled>${desencriptarTexto(texto)}</textarea>${htmlButton}`;
    } else {
        resultArea.innerHTML = messageNotFound;
    }

}

function validarTexto(texto) {
    return texto !== "";
}

function encriptarTexto(texto) {

    let auxText = "";
    for (let i = 0; i < texto.length; i++) {

        let element = texto[i];
        if (Object.keys(conversion).indexOf(element) !== -1) {
            auxText += conversion[element];
        } else {
            auxText += element;
        }
    }

    return auxText;
}

function desencriptarTexto(texto) {

    let auxText = "";
    Object.values(conversion).forEach((value, index, array) => {

        auxText = texto.replace(new RegExp(value, "g"), getKeyByValue(conversion, value));
        texto = auxText;

    })

    return texto;
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}