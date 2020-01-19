var keylist = "abcdefghijklmnopqrstuvwxyz123456789!@#&";
var tmp = '';

var generatePass = function(plength){
    // var input = document.getElementById("genValue").value;
    // var keyList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!"
    //     ,"1","2","3","4","5","6","7","8","9"];
    //     var i;
    //     var res;
    //     for(i = 0; i <= keyList.length; i++){
    //         res = Math.floor(Math.random() * input);
    //         console.log(res);
    //         // document.getElementById("test").innerHTML = i;
    //     }

    tmp = '';
    for(var i=0; i<plength;i++){
        tmp+=keylist.charAt(Math.floor(Math.random() * keylist.length))
    }
    return tmp;
}


function populateForm(enterLength){
    document.passGen.generatedPass.value = generatePass(enterLength);
}
