let uc = require("upper-case");

function greeter (){
    for (var i = 10; i > 0;  i--) {
        console.log(uc.upperCase("hello world"));
    }
}

greeter();
