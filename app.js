var password = document.getElementById("password");

function genPassword() {
    var chars = "1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuioplkjhgfdsazxcvbnm@$&*!%"
    var passwordLength = 8;
    var password = " ";

    for (var i = 1; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random()* chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }

    document.getElementById("password").value = password;

}

function copyPassword() {
    var copyText = document.getElementById('password');
    copyText.select();
    document.execCommand("copy");
}