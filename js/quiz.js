function showFeedback(element, isCorrect) {
    // Oculta feedbacks anteriores da mesma questão
    element.parentElement.querySelectorAll('.feedback').forEach(f => f.classList.add('d-none'));

    // Mostra feedback apenas da alternativa clicada
    const feedback = element.querySelector('.feedback');
    if (feedback) {
      feedback.classList.toggle('d-none');
    }

    // Destaca visualmente a alternativa escolhida
    element.parentElement.querySelectorAll('.list-group-item').forEach(item => {
      item.classList.remove('active', 'list-group-item-success', 'list-group-item-danger');
    });
    element.classList.add(isCorrect ? 'list-group-item-success' : 'list-group-item-danger');
  }