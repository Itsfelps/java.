const calcular = document.getElementById('calcular');

function imc{
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado').value;

if(nome !==``&& altura !==``&& peso !==``){

 const valorIMC =(peso / (altura*altura)).toFixed(1);
   let classificacao = ``;

   if(valorIMC<18.5){
    classificacao=`Abaixo do peso`;

}else if(valorIMC<25){
      classificacao = `Com peso ideal.Parabéns!!`;
   
}else if(valorIMCM < 30){
    classificacao = `Levemente acima do peso`;

}else if(valorIMCM < 35){
        classificacao =`Com obesidade grau 1`;


}else if(valorIMCM < 40){
    classificacao =`Com obesidade grau 2`;

}else{
    classificacao =`Com obesidade grau 3`.Cuidado você esta obeso;

    }
resultado.textContent = `${nome}seu IMC é ${valorIMC} e voce esta ${classificacao}`;

   }
}