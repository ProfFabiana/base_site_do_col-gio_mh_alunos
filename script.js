// Script simples para mostrar mensagem de sucesso ao enviar o formulário
    const form = document.getElementById('contactForm');
    const statusMessage = document.getElementById('statusMessage');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      // Aqui poderia ter envio real a um servidor ou API
      statusMessage.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
      form.reset();
    });