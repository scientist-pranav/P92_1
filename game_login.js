question_turn = "player1";
answer_turn = "player2";

function addUser() {
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

      localStorage.setItem("player1_name", player1_name);
      localStorage.setItem("player2_name", player2_name);

      localStorage.setItem("player1_score", 0);
      localStorage.setItem("player2_score", 0);

      window.location = "quiz_game_page.html";
}

function send() {
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;

    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}

function updateScore()
{
    socre = score + 1;
    document.getElementById("score").innerHTML = "Score: " + score;
}

function saveScore()
{
    localStorage.setItem("score", score);
}

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            var score1 = parseInt(localStorage.getItem("player1_score"));
            
            score1 = score1 + 1;
            localStorage.setItem("player1_score", score1);
            document.getElementById("player1_score").innerHTML = score1;
        }
        else
        {
            var score2 = parseInt(localStorage.getItem("player2_score"));
            score2 = score2 + 1;
            localStorage.setItem("player2_score", score2);
            document.getElementById("player2_score").innerHTML = score2;
        }
    }   
    if(question_turn == "player1")
    {
        question_turn = "player2";
        answer_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + localStorage.getItem("player2_name");
    }
    else
    {
        question_turn = "player1";
        answer_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + localStorage.getItem("player1_name");
    }

}