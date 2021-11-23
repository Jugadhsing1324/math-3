player1_name = localStorage.getItem("Player1");
	player2_name = localStorage.getItem("Player2");

	player1_score = 0;
	player2_score = 0;

document.getElementById("Player1").innerHTML = player1_name + " : ";
document.getElementById("Player2").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_quest").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_ans").innerHTML = "Answer Turn - " + player2_name ;

function send() {

	number2 = document.getElementById("number2").value;
	number1 = document.getElementById("number1").value;
	total_answer = parseInt(number1) * parseInt(number2);
	console.log(total_answer);


    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";

    localStorage.setItem("number1");
    localStorage.setItem("number2");
}


question_turn = "player1";
answer_turn = "player2";