// Simple Click Game
const game = document.getElementById("game");
let score = 0;

game.innerHTML = `
    <div id="target" style="
        width: 50px;
        height: 50px;
        background: red;
        position: absolute;
        cursor: pointer;
    "></div>
    <p>Score: <span id="score">0</span></p>
`;

document.getElementById("target").addEventListener("click", function() {
    score++;
    document.getElementById("score").textContent = score;
    this.style.left = Math.random() * 350 + "px";
    this.style.top = Math.random() * 350 + "px";
});
