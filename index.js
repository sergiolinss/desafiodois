function nivel (wins, losses){



return wins - losses 

}

var resultadoNivel = nivel (123, 31) ;
console.log("O herói tem saldo de  " + resultadoNivel) 
switch (true){
    case resultadoNivel <= 10:
    console.log(" Está no nivel ferro")
    break;
    case resultadoNivel <=20:
    console.log("Está no nivel bronze")
    break;
    case resultadoNivel <=50:
    console.log("Está no nivel prata")
    break;
    case resultadoNivel <=80:
    console.log("Está no nivel ouro")
    break;
    case resultadoNivel <=90:
    console.log("Está no nivel diamante")
    break;
    case resultadoNivel <=100:
    console.log("Está no nivel lendário")
    break;
    case resultadoNivel >=101:
    console.log("Está no nivel imortal")
    break;
    default : 
    console.log("Something went wrong")
}
