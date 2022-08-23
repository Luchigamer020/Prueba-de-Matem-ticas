player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");
player1_score=0;
player2_score=0;
document.getElementById("player1").innerHTML=player1_name+" : ";
document.getElementById("player2").innerHTML=player2_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score+" : ";
document.getElementById("player2_score").innerHTML=player2_score+" : ";
document.getElementById("player_question").innerHTML="Turno para preguntar: "+player1_name;
document.getElementById("player_question").innerHTML="Turno para preguntar: "+player2_name;

function send() {
    get_number1=document.getElementById("number1").value;
    number1=get_number1.toLowerCase();
    console.log("Respuesta 1= "+number1);
    charAt1=number1.charAt(1);
    console.log(charAt1);
    lenght2=Math.floor(number1.lenght/2);
    charAt2=number1.charAt(lenght2);
    console.log(charAt2);
    lenghtMinus1=number1.lenght-1;
    charAt3=number1.charAt(lenghtMinus1);
    console.log(charAt3);
    remove_charAt1=number1.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");

    get_number2=document.getElementById("number2").value;
    number2=get_number2.toLowerCase();
    console.log("Respuesta 2= "+number2);
    charAt1=number2.charAt(1);
    console.log(charAt1);
    lenght2=Math.floor(number2.lenght/2);
    charAt2=number2.charAt(lenght2);
    console.log(charAt2);
    lenghtMinus1=number2.lenght-1;
    charAt3=number2.charAt(lenghtMinus1);
    console.log(charAt3);
    remove_charAt1=number2.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");
}

