var itemAtivo = '';
var qtdItens  = 0;
var ativo     = 0;
var intervalo;
//inicia o slide seta as variaveis e defini um tempo para que para a troca
function slide(inicial, itens){
    qtdItens = itens;
    ativo = inicial;
    intervalo = setInterval(() => {
        trocar()
    }, 3000);
    
}
//faz a troca da exbição do slide
function trocar(){
    document.getElementById(`slide${ativo}`).style.display  = "none";
    document.getElementById(`slideItem${ativo}`).style.background  = "#bbbbbb";
    if(ativo+1 <= qtdItens){
        document.getElementById(`slide${ativo+1}`).style.display  = "flex";
        document.getElementById(`slideItem${ativo+1}`).style.background  = "#fa004d";
        ativo += 1;    
    }else{
        document.getElementById(`slide1`).style.display  = "flex";
        document.getElementById(`slideItem1`).style.background  = "#fa004d";
        ativo = 1;
    }
}
//troca o slide de acordo com a escolha do usuario e reseta o tempo do intervalo de troca
function escolha(item){
    document.getElementById(`slide${ativo}`).style.display  = "none";
    document.getElementById(`slideItem${ativo}`).style.background  = "#bbbbbb";
    ativo = item;
    document.getElementById(`slide${item}`).style.display  = "flex"; 
    document.getElementById(`slideItem${item}`).style.background  = "#fa004d";
    clearInterval(intervalo);
    intervalo = setInterval(() => {
        trocar()
    }, 3000);
}
//inicia o slide
slide(1,3);
