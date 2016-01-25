// function areCredsValid(userName, password) {
function userNameValid (userName) {
  return (userName.length>=6) && !userName.includes("!") && !userName.includes("#") && !userName.includes("$");


  function isPasswordValid (password) {
    return (password.includes("!") || password.includes("#") || (password.includes("$"))) && (password.length >=6) && (password!=="password") && (userName!=password) && lowerCase(password) && upperCase(password);
}
}

function areCredsValid () {
  var userName=prompt ("enter your user id");
  var password=prompt ("enter your password");
  alert("your creds are valid: " + userNameValid(userName) + " " + isPasswordValid(password));
}

function lowerCase (password) { password!==password.toLowerCase()}
function upperCase (password) { password!==password.toUppercase()}
