function loadBoxes () {
    // BTD5
    document.getElementById("t1").innerHTML = "BTD5";
    document.getElementById("i1").src = "images/btd5.jpg";
    document.getElementById("b1").onclick = function () { btd5(); };
    // Chibi Knight
    document.getElementById("t2").innerHTML = "Chibi Knight";
    document.getElementById("i2").src = "images/chibiknight.jpg";
    document.getElementById("b2").onclick = function () { chibiknight(); };
    // Duck Life 4
    document.getElementById("t3").innerHTML = "Duck Life 4";
    document.getElementById("i3").src = "images/ducklife-4.jpeg";
    document.getElementById("b3").onclick = function () { ducklife4(); };
    // Flappy Bird
    document.getElementById("t4").innerHTML = "Flappy Bird";
    document.getElementById("i4").src = "images/flappybird.jpg";
    document.getElementById("b4").onclick = function () { flappybird(); };
    // Geometry Dash
    document.getElementById("t5").innerHTML = "Geometry Dash";
    document.getElementById("i5").src = "images/geometrydash.jpg";
    document.getElementById("b5").onclick = function () { geodash(); };
    // Get on Top
    document.getElementById("nt1").innerHTML = "Get on Top";
    document.getElementById("ni1").src = "images/getontop.jpeg";
    document.getElementById("nb1").onclick = function () { getontop(); };
    // Give Up 2
    document.getElementById("t6").innerHTML = "Give Up 2";
    document.getElementById("i6").src = "images/giveup2.jpeg";
    document.getElementById("b6").onclick = function () { giveup2(); };
    // Happy Wheels
    document.getElementById("t7").innerHTML = "Happy Wheels";
    document.getElementById("i7").src = "images/happywheels.jpeg";
    document.getElementById("b7").onclick = function () { happywheels(); };
    // Impossible Quiz
    document.getElementById("t8").innerHTML = "Impossible Quiz";
    document.getElementById("i8").src = "images/impossiblequiz.png";
    document.getElementById("i8").style = "max-width:90%;max-height:90%";
    document.getElementById("b8").onclick = function () { impossiblequiz(); };
    // Jacksmith
    document.getElementById("t9").innerHTML = "Jacksmith";
    document.getElementById("i9").src = "images/jacksmith.jpeg";
    document.getElementById("b9").onclick = function () { jacksmith(); };
    // Learn to Fly 3
    document.getElementById("t10").innerHTML = "Learn to Fly 3";
    document.getElementById("i10").src = "images/learntofly3.jpeg";
    document.getElementById("b10").onclick = function () { learntofly3(); };
    // Papa's Bakeria
    document.getElementById("t11").innerHTML = "Papa's Bakeria";
    document.getElementById("i11").src = "images/papasbakeria.jpeg";
    document.getElementById("b11").onclick = function () { papasbakeria(); };
    // Papa's Donuteria
    document.getElementById("t12").innerHTML = "Papa's Donuteria";
    document.getElementById("i12").src = "images/papasdonuteria.jpeg";
    document.getElementById("b12").onclick = function () { papasdonuteria(); };
    // Papa's Scooperia
    document.getElementById("t13").innerHTML = "Papa's Scooperia";
    document.getElementById("i13").src = "images/papasscooperia.jpg";
    document.getElementById("b13").onclick = function () { papasscooperia(); };
    // Pokemon Tower Defense
    document.getElementById("t14").innerHTML = "Pokemon Tower Defense";
    document.getElementById("i14").src = "images/pokemontowerdefense.jpeg";
    document.getElementById("b14").onclick = function () { pokemontowerdefense(); };
    // Raze 3
    document.getElementById("nt2").innerHTML = "Raze 3";
    document.getElementById("ni2").src = "images/raze3.png";
    document.getElementById("nb2").onclick = function () { raze3(); };
    // Run 3
    document.getElementById("nt3").innerHTML = "Run 3";
    document.getElementById("ni3").src = "images/run3.jpg";
    document.getElementById("nb3").onclick = function () { run3(); };
    // Strike Force Heroes
    document.getElementById("t15").innerHTML = "Strike Force Heroes";
    document.getElementById("i15").src = "images/strikeforceheroes.jpeg";
    document.getElementById("b15").onclick = function () { strikeforceheroes(); };
    // Strike Force Heroes 2
    document.getElementById("t16").innerHTML = "Strike Force Heroes 2";
    document.getElementById("i16").src = "images/strikeforceheroes2.jpeg";
    document.getElementById("b16").onclick = function () { strikeforceheroes2(); };
    // Strike Force Heroes 3
    document.getElementById("t17").innerHTML = "Strike Force Heroes 3";
    document.getElementById("i17").src = "images/strikeforceheroes3.png";
    document.getElementById("b17").onclick = function () { strikeforceheroes3(); };
    // Sports Heads Basketball Championship
    document.getElementById("t18").innerHTML = "Sports Heads Basketball Championship";
    document.getElementById("i18").src = "images/shbc.jpeg";
    document.getElementById("b18").onclick = function () { sportsheadsbasketball(); };
    // Super Fighters
    document.getElementById("t19").innerHTML = "Super Fighters";
    document.getElementById("i19").src = "images/superfighters.gif";
    document.getElementById("b19").onclick = function () { superfighters(); };
    // Super Smash Flash
    document.getElementById("t20").innerHTML = "Super Smash Flash";
    document.getElementById("i20").src = "images/supersmashflash.jpeg";
    document.getElementById("b20").onclick = function () { supersmashflash(); };
    // Swords and Sandals 2
    document.getElementById("t21").innerHTML = "Swords and Sandals 2";
    document.getElementById("i21").src = "images/swordsandsandals2.jpg";
    document.getElementById("b21").onclick = function () { swordsandsandals2(); };
    // Tank Trouble
    document.getElementById("t22").innerHTML = "Tank Trouble";
    document.getElementById("i22").src = "images/tanktrouble.jpeg";
    document.getElementById("b22").onclick = function () { tanktrouble(); };
    // Legend of Zelda
    document.getElementById("t23").innerHTML = "The Legend of Zelda";
    document.getElementById("i23").src = "images/legendofzelda.jpeg";
    document.getElementById("b23").action = "https://neonk.github.io/zelda/www/index.html";
    // Zombocalypse
    document.getElementById("t24").innerHTML = "Zombocalypse";
    document.getElementById("i24").src = "images/zombo.jpeg";
    document.getElementById("b24").onclick = function () { zombocalypse(); };
}
window.onload = loadBoxes;
