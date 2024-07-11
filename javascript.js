document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const messageElement = document.getElementById('message');

    if (campoB > campoA) {
        messageElement.textContent = 'Formulário válido: Campo B é maior que Campo A.';
        messageElement.className = 'success';
    } else if (campoB < campoA) {
        messageElement.textContent = 'Formulário inválido: Campo B é menor que Campo A.';
        messageElement.className = 'error';
    } else {
        messageElement.textContent = 'Formulário inválido: Campo B é igual ao Campo A.';
        messageElement.className = 'error';
    }
});
