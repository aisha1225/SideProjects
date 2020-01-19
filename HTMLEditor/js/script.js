
var apply = function () {

    // try {
    //     if (isNaN(x)) throw document.getElementById("appliedStyle").innerHTML = "Please enter a digit";
    // } catch (err) {
    //     document.getElementById("appliedStyle").innerHTML = err;
    // } finally {
    var heightInput = document.getElementById("heightInput").value;
    var fontHeight = document.getElementById("fontHeight").value;
    // var backgroundCol = document.getElementById("bgc").value;
    var pixel = "px";
    var pxAdd = "em";

    document.getElementById("appliedStyle").style.height = heightInput + pxAdd;
    document.getElementById("appliedStyle").style.fontSize = fontHeight + pixel;


    // document.getElementById("backgroundStyle").style.backgroundColor = 'backgroundCol';
    // }
}

var blueColor = function () {
    document.getElementById("backgroundStyle").style.backgroundColor = "skyblue";
    // document.getElementById("appliedStyle").style.color = "black";
}

var pinkColor = function () {
    document.getElementById("backgroundStyle").style.backgroundColor = "pink";
    // document.getElementById("appliedStyle").style.color = "black";
}

var blackColor = function () {
    document.getElementById("backgroundStyle").style.backgroundColor = "black";
    // document.getElementById("appliedStyle").style.color = "white";
}

var fontColorblack = function () {
    document.getElementById("appliedStyle").style.color = "black";
}

var fontColorWhite = function () {
    document.getElementById("appliedStyle").style.color = "white";
}

var fontColorRed = function () {
    document.getElementById("appliedStyle").style.color = "red";
}


var reset = function () {


    var heightInput = document.getElementById("heightInput").innerHTML;
    var widthInput = document.getElementById("widthInput");
    var fontHeight = document.getElementById("fontHeight");

    heightInput.replaceWith = "";
    widthInput.innerHTML = "";
    fontHeight.innerHTML = "";
}