function myFunction() {
    var rand = Math.floor(Math.random() * 8);
    // if(rand === 0){
    //     document.getElementById("demo").innerHTML = "You suck";
    // } else if(rand === 1){
    //     document.getElementById("demo").innerHTML = "World";
    // } else if(rand === 2){
    //     document.getElementById("demo").innerHTML = "asdasd";
    // }
    // console.log(rand);


    switch (rand) {
        case 0:
            document.getElementById("demo").innerHTML = "Rainy Season";
            document.body.style.backgroundImage = "url('images/mamamoo/hqdefault.jpg')";
            break;
        case 1:
            document.getElementById("demo").innerHTML = "Starry night";
            document.body.style.backgroundImage = "url('images/mamamoo/starrynight.jpg')";
            break;
        case 2:
            document.getElementById("demo").innerHTML = "Taller than you";
            document.body.style.backgroundImage = "url('images/mamamoo/tallerthanu.jpg')";
            break;
        case 3:
            document.getElementById("demo").innerHTML = "No more";
            break;
        case 4:
            document.getElementById("demo").innerHTML = "Sleep in the car";
            document.body.style.backgroundImage = "url('images/mamamoo/sleepinthecar.jpg')";
            break;
        case 5:
            document.getElementById("demo").innerHTML = "Uhm Oh Ah Yeah";
            document.body.style.backgroundImage = "url('images/mamamoo/uhmoh.jpg')";
            break;
        case 6:
            document.getElementById("demo").innerHTML = "Gleam";
            break;
        case 7:
            document.getElementById("demo").innerHTML = "LOSER!";
            break;
        default:
            document.getElementById("demo").innerHTML = "You suck";
            break;
    }

}
