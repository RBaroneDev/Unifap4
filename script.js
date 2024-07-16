document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('senhaForm');
  const resultado = document.getElementById('resultado');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const senhaDigitada = document.getElementById('senha').value;
    const senhaCorreta = "Leslie100";

    if (senhaDigitada === senhaCorreta) {
      resultado.textContent = "ACESSO PERMITIDO";
      resultado.style.color = "green";
    } else {
      resultado.textContent = "ACESSO NEGADO";
      resultado.style.color = "red";
    }

    // Limpar campo de senha após verificar
    document.getElementById('senha').value = '';
  });
});
