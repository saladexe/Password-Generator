let ran = document.getElementById("number").textContent;
ran = parseInt(ran);
let reset = document.getElementById("reset");
let gen = document.getElementById("gen");
let theme1 = document.getElementById("theme1");
let theme2 = document.getElementById("theme2");
let theme3 = document.getElementById("theme3");
let theme4 = document.getElementById("theme4");
let theme5 = document.getElementById("theme5");
let a = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
gen.addEventListener("click" , function () {
    document.getElementById("number").textContent = "";
    for (i = 0; i < 10; i++) {
        ran = a[Math.floor(Math.random() * 62)];
        document.getElementById("number").textContent += ran;
    }
});

reset.addEventListener("click", function() {
    document.getElementById("number").textContent = "0000000000";
})

theme1.addEventListener("click", function() {
    document.body.style.background = "conic-gradient(black, white)";
    document.getElementById("number").style.mixBlendMode = "difference";
    document.getElementById("head").style.mixBlendMode = "difference";
    document.getElementById("head1").style.mixBlendMode = "difference";
    document.getElementById("theme1").style.left = "100%"
    document.getElementById("theme2").style.left = "90%"
})

theme2.addEventListener("click", function() {
    document.body.style.background = "linear-gradient(45deg, blue, red)";
    document.getElementById("number").style.mixBlendMode = "normal";
    document.getElementById("head").style.mixBlendMode = "normal";
    document.getElementById("head1").style.mixBlendMode = "normal";
    document.getElementById("theme2").style.left = "100%"
    document.getElementById("theme3").style.left = "90%"
})

theme3.addEventListener("click", function() {
    document.body.style.background = "linear-gradient(45deg, red, yellow)";
    document.getElementById("number").style.mixBlendMode = "normal";
    document.getElementById("head").style.mixBlendMode = "normal";
    document.getElementById("head1").style.mixBlendMode = "normal";
    document.getElementById("theme3").style.left = "100%"
    document.getElementById("theme4").style.left = "90%"
})

theme4.addEventListener("click", function() {
    document.body.style.background = "linear-gradient(45deg, lightblue, pink)";
    document.getElementById("number").style.mixBlendMode = "normal";
    document.getElementById("head").style.mixBlendMode = "normal";
    document.getElementById("head1").style.mixBlendMode = "normal";
    document.getElementById("theme4").style.left = "100%"
    document.getElementById("theme5").style.left = "90%"
})

theme5.addEventListener("click", function() {
    document.body.style.background = "radial-gradient(#28C2FF, #4F80CF)";
    document.getElementById("number").style.mixBlendMode = "normal";
    document.getElementById("head").style.mixBlendMode = "normal";
    document.getElementById("head1").style.mixBlendMode = "normal";
    document.getElementById("theme5").style.left = "100%"
    document.getElementById("theme1").style.left = "90%"
})