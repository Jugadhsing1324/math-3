
function update(){
    player1name=document.getElementById("Player1").value;
    player2name=document.getElementById("Player2").value;
    localStorage.setItem("Player1",player1name);
    localStorage.setItem("Player2",player2name);
    window.location="game-page.html";
}