document.addEventListener("DOMContentLoaded", function(){
    const anoAtual = new Date().getFullYear();
    const spanAno = document.querySelector(".ano");

    if (spanAno){
        spanAno.textContent = anoAtual;
    }
});