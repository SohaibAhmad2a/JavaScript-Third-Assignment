/*Initialize an array with color names. Display the array elements in
your browser.
A. Ask the user what color he/she wants to add to the beginning &
add that color to the beginning of the array. Display the updated
array in your browser.
B. Ask the user what color he/she wants to add to the end & add
that color to the end of the array. Display the updated array in
your browser.
C. Add two more colors to the beginning of the array. Display the
updated array in your browser.
D. Delete the first color in the array. Display the updated array in
your browser.
E. Delete the last color in the array. Display the updated array in
your browser.
F. Ask the user at which index he/she wants to add a color & color
name. Then add the color to desired position/index. Display the
updated array in your browser.
G. Ask the user at which index he/she wants to delete color(s) &
how many colors he/she wants to delete. Then remove the
same number of color(s) from user-defined position/index. .
Display the updated array in your browser.*/
var colorNames=["Green", "Red", "Yellow","Blue", "Pink"];
document.write(colorNames+"<br>");
colorNames.unshift(prompt("Please enter your favourite Color"));
document.write(colorNames+"<br>");
colorNames.push(prompt("Please enter your least favourite Color"));
document.write(colorNames+"<br>");
document.write("Add two more colors to the beginning of the array."+"<br>");
colorNames.splice(0,0,prompt("Ist"),prompt("2sd"));
document.write(colorNames+"<br>");
colorNames.shift();
document.write(colorNames+"<br>");
colorNames.pop();
document.write(colorNames+"<br>");
var i=prompt("At which index you want to add the color");
if (i<5){
    colorNames.splice(i,0,prompt("Which Color do you want to add"));
    document.write(colorNames+"<br>");
}
else {
    colorNames[i]=prompt("Which Color do you want to add");
    document.write(colorNames+"<br>");
}
colorNames.splice(prompt("At which index he/she wants to delete the color"),prompt("How many colors you want to delete?"));
document.write(colorNames+"<br>");