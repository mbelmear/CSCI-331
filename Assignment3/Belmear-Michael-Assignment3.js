function isStrongPassword(test_password){
    let password = test_password.toLowerCase();
    if(password.length < 8){
        console.log("No good. Password must be at least 8 characters long.");
    }
    else if(password.includes("password")){
        console.log("No good. Password cannot contain the word 'password'.");
    }
    else{
        let flag = true;
        for(let i = 0; i <= password.length; i++){ 
            if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57){
                console.log("Good Password!");
                flag = false;
                break;
            }
        }
        if(flag == true){
            console.log("No good. Password must contain at least one number.");
        }
    }
}

isStrongPassword("qwerty1"); //return false - too short
isStrongPassword("qwertypassword1"); //return false - cannot contain password
isStrongPassword("qwertyABC"); //return false - must contain a number
isStrongPassword("qwerty123"); //return true - no errors