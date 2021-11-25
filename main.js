const box = document.getElementById('result')
//function to validate a email address
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}

// function to validate  a phone number with the following format: 0000-0000
// the function returns true if the phone number is valid and false otherwise
// the function accepts a string as an argument
function validatePhone(phone) {
    var re = /^\d{4}-\d{4}$/
    return re.test(phone)
  
}
