function loadBoxes () {

    // BTD5
    document.getElementById("t1").innerHTML = "BTD5";
    document.getElementById("i1").src = "images/btd5.jpg";
    document.getElementById("b1").onclick = function () { btd5(); };
    document.getElementById("a1").href = "games/Bloons-Tower-Defense-5.swf";
    // 2048
    document.getElementById("nt1").innerHTML = "2048";
    document.getElementById("ni1").src = "images/2048.PNG";
    document.getElementById("nb1").onclick = function () { ttf8(); };
    document.getElementById("na1").href = "games/2048.swf";
    // Billiards
    document.getElementById("t2").innerHTML = "Billiards";
    document.getElementById("i2").src = "images/billiards.jpg";
    document.getElementById("b2").onclick = function () { billiards(); };
    document.getElementById("a2").href = "games/billiards.swf";
    // Chibi Knight
    document.getElementById("t3").innerHTML = "Chibi Knight";
    document.getElementById("i3").src = "images/chibiknight.jpg";
    document.getElementById("b3").onclick = function () { chibiknight(); };
    document.getElementById("a3").href = "games/chibiknight.swf";
    // Clicker Heroes
    document.getElementById("t4").innerHTML = "Clicker Heroes";
    document.getElementById("i4").src = "images/clickerheroes.png";
    document.getElementById("i4").style = "max-width:70%;max-height:70%";
    document.getElementById("b4").onclick = function () { clickerheroes(); };
    document.getElementById("a4").href = "games/clickerheroes.swf";
    // Dead Valley
    document.getElementById("t5").innerHTML = "Dead Valley";
    document.getElementById("i5").src = "images/deadvalley.jpg";
    document.getElementById("b5").onclick = function () { deadvalley(); };
    document.getElementById("a5").href = "downloads/dead-valley-master.zip";
    // Dream Car Racing
    document.getElementById("nt2").innerHTML = "Dream Car Racing";
    document.getElementById("ni2").src = "images/dreamcarracing.PNG";
    document.getElementById("nb2").onclick = function () { dreamcarracing(); };
    document.getElementById("na2").href = "games/dreamcarracing.swf";
    // Duck Life 2
    document.getElementById("t6").innerHTML = "Duck life 2";
    document.getElementById("i6").src = "images/ducklife2.jpg";
    document.getElementById("b6").onclick = function () { ducklife2(); };
    document.getElementById("a6").href = "games/ducklife2.swf"
    // Duck Life 3
    document.getElementById("t7").innerHTML = "Duck Life 3";
    document.getElementById("i7").src = "images/ducklife3.jpg";
    document.getElementById("b7").onclick = function () { ducklife3(); };
    document.getElementById("a7").href = "games/ducklife3.swf"
    // Duck Life 4
    document.getElementById("t8").innerHTML = "Duck Life 4";
    document.getElementById("i8").src = "images/ducklife-4.jpeg";
    document.getElementById("b8").onclick = function () { ducklife4(); };
    document.getElementById("a8").href = "games/duck-life-4.swf";
    // Flappy Bird
    document.getElementById("t9").innerHTML = "Flappy Bird";
    document.getElementById("i9").src = "images/flappybird.jpg";
    document.getElementById("b9").onclick = function () { flappybird(); };
    document.getElementById("a9").href = "games/flappy-bird.swf";
    // GBA Emulator
    document.getElementById("t10").innerHTML = "GBA Emulator";
    document.getElementById("i10").src = "images/gba.jpg";
    document.getElementById("i10").style = "max-width: 70%; max-height: 70%";
    document.getElementById("b10").onclick = function () {  gba(); };
    document.getElementById("a10").onclick = function () { alert("Selected game cannot be downloaded."); };
    // Geometry Dash
    document.getElementById("t11").innerHTML = "Geometry Dash";
    document.getElementById("i11").src = "images/geometrydash.jpg";
    document.getElementById("b11").onclick = function () { geodash(); };
    document.getElementById("a11").href = "games/geometrydash.swf";
    //Getaway Shootout
    document.getElementById("t12").innerHTML = "Getaway Shootout";
    document.getElementById("i12").src = "images/getawayshootout.PNG";
    document.getElementById("b12").onclick = function () { getawayshootout(); };
    document.getElementById("a12").onclick = function () { alert("Selected game cannot be downloaded.")};
    // Get on Top
    document.getElementById("t13").innerHTML = "Get on Top";
    document.getElementById("i13").src = "images/getontop.jpeg";
    document.getElementById("b13").onclick = function () { getontop(); };
    document.getElementById("a13").href = "games/getontop.swf";
    // Give Up 2
    document.getElementById("t14").innerHTML = "Give Up 2";
    document.getElementById("i14").src = "images/giveup2.jpeg";
    document.getElementById("b14").onclick = function () { giveup2(); };
    document.getElementById("a14").href = "games/give-up-2.swf";
    // GPemu
    document.getElementById("t15").innerHTML = "GPemu";
    document.getElementById("i15").src = "images/gpemu.png";
    document.getElementById("i15").style = "max-width:75%;max-height:75%";
    document.getElementById("b15").onclick = function () { gpemu(); };
    document.getElementById("a15").onclick = function () { alert("Selected game cannot be downloaded."); };
    // Gun Mayhem 2
    document.getElementById("t16").innerHTML = "Gun Mayhem 2";
    document.getElementById("i16").src = "images/gunmayhem2.jpg";
    document.getElementById("b16").onclick = function () { gunmayhem2(); };
    document.getElementById("a16").href = "games/gunmayhem2.swf";
    // Happy Wheels
    document.getElementById("t17").innerHTML = "Happy Wheels";
    document.getElementById("i17").src = "images/happywheels.jpeg";
    document.getElementById("b17").onclick = function () { happywheels(); };
    document.getElementById("a17").href = "games/HappyWheels.swf";
    // HS Series - Escaping the Prison
    document.getElementById("t18").innerHTML = "HS Series - Escaping the Prison"
    document.getElementById("i18").src = "images/escapingtheprison.jpg";
    document.getElementById("b18").onclick = function () { escapingtheprison(); };
    document.getElementById("a18").href = "games/escapingtheprison.swf";
    // HS Series - Stealing the Diamond
    document.getElementById("t19").innerHTML = "HS Series - Stealing the Diamond";
    document.getElementById("i19").src = "images/stealingthediamond.jpg";
    document.getElementById("b19").onclick = function () { stealingthediamond(); };
    document.getElementById("a19").href = "games/stealingthediamond.swf";
    // HS Series - Infilterating the Airship
    document.getElementById("t20").innerHTML = "HS Series - Infilterating the Airship";
    document.getElementById("i20").src = "images/infilteratingtheairship.png";
    document.getElementById("i20").style = "max-width:70%;max-height:70%";
    document.getElementById("b20").onclick = function () { infilteratingtheairship(); };
    document.getElementById("a20").href = "games/infilteratingtheairship.swf";
    // HS Series - Fleeing the Complex
    document.getElementById("t21").innerHTML = "HS Series - Fleeing the Complex";
    document.getElementById("i21").src = "images/fleeingthecomplex.png";
    document.getElementById("b21").onclick = function () { fleeingthecomplex(); };
    document.getElementById("a21").href = "games/fleeingthecomplex.swf";
    // Impossible Quiz
    document.getElementById("t22").innerHTML = "Impossible Quiz";
    document.getElementById("i22").src = "images/impossiblequiz.png";
    document.getElementById("i22").style = "max-width:90%;max-height:90%";
    document.getElementById("b22").onclick = function () { impossiblequiz(); };
    document.getElementById("a22").href = "games/impossiblequiz.swf";
    // Impossible Quiz 2
    document.getElementById("t23").innerHTML = "Impossible Quiz 2";
    document.getElementById("i23").src = "images/impossiblequiz2.PNG";
    document.getElementById("i23").style = "max-width:90%;max-height:90%";
    document.getElementById("b23").onclick = function () { impossiblequiz2(); };
    document.getElementById("a23").href = "games/impossiblequiz2.swf";
    // Jacksmith
    document.getElementById("t24").innerHTML = "Jacksmith";
    document.getElementById("i24").src = "images/jacksmith.jpeg";
    document.getElementById("b24").onclick = function () { jacksmith(); };
    document.getElementById("a24").href = "games/jacksmith.swf";
    // Learn to Fly
    document.getElementById("t25").innerHTML = "Learn to Fly";
    document.getElementById("i25").src = "images/learntofly.jpeg";
    document.getElementById("b25").onclick = function () { learntofly(); };
    document.getElementById("a25").href = "games/learntofly.swf";
    // Learn to Fly 2
    document.getElementById("t26").innerHTML = "Learn to Fly 2";
    document.getElementById("i26").src = "images/learntofly2.jpeg";
    document.getElementById("b26").onclick = function () { learntofly2(); };
    document.getElementById("a26").href = "games/learntofly2.swf";
    // Learn to Fly 3
    document.getElementById("t27").innerHTML = "Learn to Fly 3";
    document.getElementById("i27").src = "images/learntofly3.jpeg";
    document.getElementById("b27").onclick = function () { learntofly3(); };
    document.getElementById("a27").href = "games/learn-to-fly-3.swf";
    // Miragine War
    document.getElementById("t28").innerHTML = "Miragine War";
    document.getElementById("i28").src = "images/miraginewar.png";
    document.getElementById("b28").onclick = function () { miraginewar(); };
    document.getElementById("a28").href = "games/miraginewar.swf";
    // Multitask
    document.getElementById("nt3").innerHTML = "Multitask";
    document.getElementById("ni3").src = "images/multitask.PNG";
    document.getElementById("nb3").onclick = function () { multitask(); };
    document.getElementById("na3").href = "games/multitask.swf";
    // Papa's Bakeria
    document.getElementById("t29").innerHTML = "Papa's Bakeria";
    document.getElementById("i29").src = "images/papasbakeria.jpeg";
    document.getElementById("b29").onclick = function () { papasbakeria(); };
    document.getElementById("a29").href = "games/papasbakeria.swf";
    // Obey the Game
    document.getElementById("t30").innerHTML = "Obey the Game";
    document.getElementById("i30").src = "images/obeythegame.jpg";
    document.getElementById("b30").onclick = function () { obeythegame(); };
    document.getElementById("a30").href = "games/obeythegame.swf";
    // Papa's Donuteria
    document.getElementById("t31").innerHTML = "Papa's Donuteria";
    document.getElementById("i31").src = "images/papasdonuteria.jpeg";
    document.getElementById("b31").onclick = function () { papasdonuteria(); };
    document.getElementById("a31").href = "games/papasdonuteria.swf";
    // Papa's Freezeria
    document.getElementById("t32").innerHTML = "Papa's Freezeria";
    document.getElementById("i32").src = "images/papasfreezeria.jpg";
    document.getElementById("i32").style = "max-height:90%;max-width:90%";
    document.getElementById("b32").onclick = function () { papasfreezeria(); };
    document.getElementById("a32").href = "games/papasfreezeria.swf";
    // Papa's Pizzeria
    document.getElementById("t33").innerHTML = "Papa's Pizzeria";
    document.getElementById("i33").src = "images/papaspizzeria.jpg";
    document.getElementById("b33").onclick = function () { papaspizzeria(); };
    document.getElementById("a33").href = "games/papaspizzeria.swf";
    // Papa's Scooperia
    document.getElementById("t34").innerHTML = "Papa's Scooperia";
    document.getElementById("i34").src = "images/papasscooperia.jpg";
    document.getElementById("b34").onclick = function () { papasscooperia(); };
    document.getElementById("a34").href = "games/papasscooperia.swf";
    // Papa's Sushiria
    document.getElementById("t35").innerHTML = "Papa's Sushiria";
    document.getElementById("i35").src = "images/papassushiria.jpg";
    document.getElementById("b35").onclick = function () { papassushiria(); };
    document.getElementById("a35").href = "games/papassushiria.swf";
    // Pokemon Tower Defense
    document.getElementById("t36").innerHTML = "Pokemon Tower Defense";
    document.getElementById("i36").src = "images/pokemontowerdefense.jpeg";
    document.getElementById("b36").onclick = function () { pokemontowerdefense(); };
    document.getElementById("a36").href = "games/Pokemon_Tower_Defense.swf";
    // QWOP
    document.getElementById("t37").innerHTML = "QWOP";
    document.getElementById("i37").src = "images/qwop.PNG";
    document.getElementById("b37").onclick = function () { qwop(); };
    document.getElementById("a37").href = "games/qwop.swf";
    // Raze 3
    document.getElementById("t38").innerHTML = "Raze 3";
    document.getElementById("i38").src = "images/raze3.png";
    document.getElementById("b38").onclick = function () { raze3(); };
    document.getElementById("a38").href = "games/raze3.swf";
    // Rooftop Snipers
    document.getElementById("t39").innerHTML = "Rooftop Snipers";
    document.getElementById("i39").src = "images/rooftopsnipers.PNG";
    document.getElementById("b39").onclick = function () { rooftopsnipers(); };
    document.getElementById("a39").onclick = function () { alert('This game cannot be downloaded.');};
    // Run 3
    document.getElementById("t40").innerHTML = "Run 3";
    document.getElementById("i40").src = "images/run3.jpg";
    document.getElementById("b40").onclick = function () { run3(); };
    document.getElementById("a40").href = "games/run-3-unblocked-games_1531491672.swf";
    // Spelunky
    document.getElementById("t41").innerHTML = "Spelunky";
    document.getElementById("i41").src = "images/spelunky.jpg";
    document.getElementById("b41").onclick = function () { spelunky(); };
    document.getElementById("a41").href = "downloads/spelunky-master.zip";
    // Sports Heads Basketball Championship
    document.getElementById("t42").innerHTML = "Sports Heads Basketball Championship";
    document.getElementById("i42").src = "images/shbc.jpeg";
    document.getElementById("b42").onclick = function () { sportsheadsbasketball(); };
    document.getElementById("a42").href = "games/sportsheadsbasketballchampionship.swf";
    // Sports Heads Soccer
    document.getElementById("t43").innerHTML = "Sports Heads Soccer";
    document.getElementById("i43").src = "images/sportsheadssoccer.jpg";
    document.getElementById("b43").onclick = function () { sportsheadssoccer(); };
    document.getElementById("a43").href = "games/sportsheadssoccer.swf";
    // Sports Heads Tennis
    document.getElementById("t44").innerHTML = "Sports Heads Tennis";
    document.getElementById("i44").src = "images/sportsheadstennis.jpg";
    document.getElementById("b44").onclick = function () { sportsheadstennis(); };
    document.getElementById("a44").href = "games/sportsheadstennis.swf";
    // Sports Heads Volleyball
    document.getElementById("t45").innerHTML = "Sports Heads Volleyball";
    document.getElementById("i45").src = "images/sportsheadsvolleyball.jpg";
    document.getElementById("b45").onclick = function () { sportsheadsvolleyball(); };
    document.getElementById("a45").href = "games/sportsheadsvolleyball.swf";
    // Stick RPG
    document.getElementById("t46").innerHTML = "Stick RPG";
    document.getElementById("i46").src = "images/stickrpg.jpeg";
    document.getElementById("b46").onclick = function () { stickrpg(); };
    document.getElementById("a46").href = "games/stickrpg.swf";
    // Stick War
    document.getElementById("t47").innerHTML = "Stick War";
    document.getElementById("i47").src = "images/stickwar.png";
    document.getElementById("i47").style = "max-width:75%;max-height:75%";
    document.getElementById("b47").onclick = function () { stickwar(); };
    document.getElementById("a47").href = "games/stickwar.swf";
    // Stick War 2
    document.getElementById("t48").innerHTML = "Stick War 2";
    document.getElementById("i48").src = "images/stickwar2.jpg";
    document.getElementById("b48").onclick = function () { stickwar2(); };
    document.getElementById("a48").href = "games/stickwar2.swf"
    // Strike Force Heroes
    document.getElementById("t49").innerHTML = "Strike Force Heroes";
    document.getElementById("i49").src = "images/str1keforceheroes.jpeg";
    document.getElementById("b49").onclick = function () { strikeforceheroes(); };
    document.getElementById("a49").href = "games/str1ke-force-heroes.swf";
    // Strike Force Heroes 2
    document.getElementById("t50").innerHTML = "Strike Force Heroes 2";
    document.getElementById("i50").src = "images/str1keforceheroes2.jpeg";
    document.getElementById("b50").onclick = function () { strikeforceheroes2(); };
    document.getElementById("a50").href = "games/dagobah_Str1ke_Force_Heroes.swf";
    // Strike Force Heroes 3
    document.getElementById("t51").innerHTML = "Strike Force Heroes 3";
    document.getElementById("i51").src = "images/str1keforceheroes3.png";
    document.getElementById("b51").onclick = function () { strikeforceheroes3(); };
    document.getElementById("a51").href = "games/str1keforceheroes3.swf";
    // Super Fighters
    document.getElementById("t52").innerHTML = "Super Fighters";
    document.getElementById("i52").src = "images/superfighters.gif";
    document.getElementById("b52").onclick = function () { superfighters(); };
    document.getElementById("a52").href = "games/superfighters.swf";
    // Super Fighters Ultimate
    document.getElementById("t53").innerHTML = "Super Fighters Ultimate";
    document.getElementById("i53").src = "images/superfightersultimate.jpg";
    document.getElementById("b53").onclick = function () { superfightersultimate(); };
    document.getElementById("a53").href = "games/superfightersultimate.swf";
    // Super Mario Flash
    document.getElementById("t54").innerHTML = "Super Mario Flash";
    document.getElementById("i54").src = "images/supermarioflash.jpg";
    document.getElementById("b54").onclick = function () { supermarioflash(); };
    document.getElementById("a54").href = "games/supermarioflash.swf";
    // Super Mario Flash 2
    document.getElementById("t55").innerHTML = "Super Mario Flash 2";
    document.getElementById("i55").src = "images/supermarioflash2.jpg";
    document.getElementById("b55").onclick = function () { supermarioflash2(); };
    document.getElementById("a55").href = "games/supermarioflash2.swf";
    // Super Smash Flash
    document.getElementById("t56").innerHTML = "Super Smash Flash";
    document.getElementById("i56").src = "images/supersmashflash.jpeg";
    document.getElementById("b56").onclick = function () { supersmashflash(); };
    document.getElementById("a56").href = "games/Super Smash Flash.swf";
    // Swords and Sandals 2
    document.getElementById("t57").innerHTML = "Swords and Sandals 2";
    document.getElementById("i57").src = "images/swordsandsandals2.jpg";
    document.getElementById("b57").onclick = function () { swordsandsandals2(); };
    document.getElementById("a57").href = "games/Swords and Sandals 2 (Full).swf";
    // Swords and Souls
    document.getElementById("t58").innerHTML = "Swords and Souls";
    document.getElementById("i58").src = "images/swordsandsouls.jpg";
    document.getElementById("i58").style = "max-width:90%;max-height:90%";
    document.getElementById("b58").onclick = function () { swordsandsouls(); };
    document.getElementById("a58").href = "games/swordsandsouls.swf";
    // Tank Trouble
    document.getElementById("t59").innerHTML = "Tank Trouble";
    document.getElementById("i59").src = "images/tanktrouble.jpeg";
    document.getElementById("b59").onclick = function () { tanktrouble(); };
    document.getElementById("a59").href = "games/tank-trouble.swf";
    // Territory War
    document.getElementById("t60").innerHTML = "Territory War";
    document.getElementById("i60").src = "images/territorywar.jpg";
    document.getElementById("b60").onclick = function () { territorywar(); };
    document.getElementById("a60").href = "games/territorywar.swf";
    // The Last Stand Union City
    document.getElementById("t61").innerHTML = "The Last Stand Union City";
    document.getElementById("i61").src = "images/thelaststandunioncity.jpg";
    document.getElementById("b61").onclick = function () { thelaststandunioncity(); };
    document.getElementById("a61").href = "games/thelaststandunioncity.swf";
    // The Legend of Zelda
    document.getElementById("t62").innerHTML = "The Legend of Zelda";
    document.getElementById("i62").src = "images/legendofzelda.jpeg";
    document.getElementById("b62").onclick = function () { legendofzelda(); };
    document.getElementById("a62").href = "downloads/zelda-master.zip"
    // Theme Hotel
    document.getElementById("t63").innerHTML = "Theme Hotel";
    document.getElementById("i63").src = "images/themehotel.jpg";
    document.getElementById("b63").onclick = function () { themehotel(); };
    document.getElementById("a63").href = "games/themehotel.swf"
    // Unfair Mario
    document.getElementById("t64").innerHTML = "Unfair Mario";
    document.getElementById("i64").src = "images/unfairmario.png";
    document.getElementById("b64").onclick = function () { unfairmario(); };
    document.getElementById("a64").href = "games/unfairmario.swf";
    // Vex
    document.getElementById("t65").innerHTML = "Vex";
    document.getElementById("i65").src = "images/vex.PNG";
    document.getElementById("b65").onclick = function () { vex(); };
    document.getElementById("a65").href = "games/vex.swf";
    // Zombocalypse
    document.getElementById("t66").innerHTML = "Zombocalypse";
    document.getElementById("i66").src = "images/zombocalyps3.jpeg";
    document.getElementById("b66").onclick = function () { zombocalypse(); };
    document.getElementById("a66").href = "games/zombocalyps3.swf";

};
loadBoxes();
