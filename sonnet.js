
// Paste the code below into your HTML file.
// Take the contents of the sonnet div and place it in a variable
var theSonnet = document.getElementById("sonnet").innerHTML;
console.log(theSonnet);
// Find and output the starting position of the word "orphans"
var orphansPosition = theSonnet.indexOf("orphans");
console.log("orphansPosition" , orphansPosition)
// Output the number of characters in the sonnet
var sonnetLength = theSonnet.length;
console.log("Number of Char" , sonnetLength);
// Replace the first occurance of the string "winter" with "yuletide"
var replaceSonnet = theSonnet.replace("winter" , "yuletide");
console.log(replaceSonnet);
// Replace all occurances of the string "the" with "a large"
var replaceAnother = replaceSonnet.replace(/the/g , "a large");
console.log(replaceAnother);
// Set the content of the sonnet div with the new string
var whatever = document.getElementById("sonnet")
whatever.innerHTML = replaceAnother;







