document.addEventListener('DOMContentLoaded', function () {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));
});

function topo(){
  botao=document.getElementById('btnTopo');
  if(!botao){
      return;
  } else{
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}