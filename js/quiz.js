function showFeedback(element, isCorrect) {
  element.parentElement.querySelectorAll('.feedback').forEach(f => f.classList.add('d-none'));

  const feedback = element.querySelector('.feedback');
  if (feedback) {
    feedback.classList.toggle('d-none');
  }

  element.parentElement.querySelectorAll('.list-group-item').forEach(item => {
    item.classList.remove('active', 'list-group-item-success', 'list-group-item-danger');
  });
  element.classList.add(isCorrect ? 'list-group-item-success' : 'list-group-item-danger');
}

function topo(){
  botao=document.getElementById('btnTopo');
  if(!botao){
      return;
  } else{
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}