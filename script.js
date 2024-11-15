let start = document.getElementById('play');
let divResult = document.getElementById("result") 


function rodar() {
  let num = Math.random() * 10;
  let pc;
    console.log("numero sorteado " + num);
  if (num < 3.4 ){
    pc = 1;
  }else if(num < 6.7 ){
    pc = 2;   
  }else{
    pc = 3;
  }
  return pc;
};


function game(Uinput){
    let resultado;
    // "Preparado?..."
    // "[ 1 ] - Pedra "
    // "[ 2 ] - Papel"
    // "[ 3 ] - Tesoura"
    console.log("sua resposta: " + Uinput);
    let pc = rodar();
    console.log("PC: " + pc);
    
    if ((Uinput == 1 && pc == 3) || (Uinput == 2 && pc == 1 ) || (Uinput == 3 && pc == 2)){
        resultado = true;
    }else if(Uinput == pc){
        return resultado;
    }else{
        resultado = false
    }
    return resultado;
}


start.addEventListener('click',() => {
    let input = document.getElementById('input');
    txtResult = document.getElementById('pResult');
    txtResult.classList.add('result');

    resultado = game(input.value)
    console.log("Resultado: " + resultado)

    if (resultado == true){
        txtResult.innerText= "vitoria";
    }else if(resultado == false){
        txtResult.innerText= "derrota";
    }else{
        txtResult.innerText= "empate";
    }

})

