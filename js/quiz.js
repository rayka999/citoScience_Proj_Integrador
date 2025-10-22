document.addEventListener("DOMContentLoaded", () => {
  const carrossel = document.getElementById("quizCarousel");
  const botaoAnterior = document.getElementById("btn_prev");
  const botaoProximo = document.getElementById("btn_prox");

  const botaoReiniciar = document.createElement("button");
  botaoReiniciar.id = "btn_restart";
  botaoReiniciar.className = "btn btn-danger d-none";
  botaoReiniciar.textContent = "↻ Reiniciar Quiz";
  botaoReiniciar.addEventListener("click", reiniciarQuiz);

  botaoProximo.parentNode.insertBefore(botaoReiniciar, botaoProximo.nextSibling);

  const carrosselBS = new bootstrap.Carousel(carrossel, {
    interval: false,
    ride: false
  });

  const opcoes = document.querySelectorAll(".list-group-item");
  opcoes.forEach(opcao => {
    opcao.addEventListener("click", function () {
      const grupo = this.parentElement;
      if (grupo.classList.contains("respondido")) return;
      mostrarFeedback(this);
      grupo.classList.add("respondido");
    });
  });

  window.mostrarFeedback = function (elemento) {
    const grupoLista = elemento.parentElement;
    const feedbacks = grupoLista.querySelectorAll(".feedback");
    feedbacks.forEach(f => f.classList.add("d-none"));
    const feedback = elemento.querySelector(".feedback");
    if (feedback) feedback.classList.remove("d-none");

    const itens = grupoLista.querySelectorAll(".list-group-item");
    itens.forEach(i => (i.style.pointerEvents = "none"));
  };

  carrossel.addEventListener("slid.bs.carousel", () => {
    const indiceAtivo = Array.from(
      carrossel.querySelectorAll(".carousel-item")
    ).indexOf(carrossel.querySelector(".active"));

    const totalSlides = carrossel.querySelectorAll(".carousel-item").length;

    botaoAnterior.style.visibility = indiceAtivo === 0 ? "hidden" : "visible";

    if (indiceAtivo === totalSlides - 1) {
      botaoProximo.classList.add("d-none");
      botaoReiniciar.classList.remove("d-none");
    } else {
      botaoProximo.classList.remove("d-none");
      botaoReiniciar.classList.add("d-none");
    }
  });

  botaoAnterior.style.visibility = "hidden";

  function reiniciarQuiz() {
    document.querySelectorAll(".list-group").forEach(grupo => {
      grupo.classList.remove("respondido");
      grupo.querySelectorAll(".list-group-item").forEach(item => {
        item.style.pointerEvents = "auto";
      });
      grupo.querySelectorAll(".feedback").forEach(f => f.classList.add("d-none"));
    });

    carrosselBS.to(0);

    botaoProximo.classList.remove("d-none");
    botaoAnterior.style.visibility = "hidden";
    botaoReiniciar.classList.add("d-none");
  }
});

function topo(){
  botao=document.getElementById('btnTopo');
  if(!botao){
      return;
  } else{
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}