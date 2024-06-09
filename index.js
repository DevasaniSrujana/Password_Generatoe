const lowerCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const SpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];


//random alphabets of lowercase letters
let randomAlpha1=Math.floor(0+Math.random()*26)
//random alphabets of uppercase letters
let randomAlpha2=Math.floor(0+Math.random()*26)
//random numbers
let randomNumbers=Math.floor(0+Math.random()*10)
//random special characters
let randomSpecial=Math.floor(0+Math.random()*29)
 
//max length of password
 let passLength=12
 
 let allChars=lowerCaseLetters[randomAlpha1]+upperCaseLetters[randomAlpha2]+numbers[randomNumbers]+SpecialCharacters[randomSpecial]
 let password=document.querySelector(".pass")

 function generatePass(){
let pass=""
 while(passLength>pass.length){
    pass+=allChars[Math.floor(Math.random()*allChars.length)]
 }
 password.value=pass
}
password.value=""