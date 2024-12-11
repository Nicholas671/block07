/*
1. This program will perform arithmetic in three different variables producing the combination: 10 - 40 - 39
2. Then the program will send a page alert.
3. The alert will inform the user of combination, displaying the three variables in sequential order
4. The output will be this message: You have received this message because you have been chosen to open an important vault.Here is the secret combination: 10 - 40 - 39
*/

let varOne = 20 / 2

let varTwo = 100 - 60

let varThree = 100 * 0.39

//This is be the alert message

const inForm = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"

//This function will combine everything into one constant

const comBin = `${inForm}  ${varOne} - ${varTwo} - ${varThree}`

//This is the function that will produce the complete message

alert(comBin); 