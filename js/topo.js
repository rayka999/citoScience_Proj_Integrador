function topo(){
    botao=document.getElementById('btnTopo');
    if(!botao){
        return;
    } else{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}