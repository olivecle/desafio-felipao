let nickname = "Homem de Ferro"
let nivelXp =9050

if(nivelXp <= 1000){
    console.log("Ferro")
}
else if (nivelXp <= 2000){
    console.log("Bronze")
}
else if(nivelXp <=5000){
    console.log("Prata")
}
else if (nivelXp <=7000){
    console.log("Ouro")
}
else if(nivelXp <=8000){
    console.log("Platina")
}
else if(nivelXp <=9000){
    console.log("Ascendente")
}
else if(nivelXp <=10000){
    console.log("Imortal")
}
else if (nivelXp >=10001){
    console.log("Radiante")
}     

console.log("O herói de nome " + nickname + " está no nível de "  + nivelXp)