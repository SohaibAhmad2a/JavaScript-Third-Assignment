/*We have the following arrays:
var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th","st","nd","rd"];
Write a JavaScript program to display in the following way :
1st choice is Karachi
2nd choice is Lahore
3rd choice is Islamabad*/



//Simplest, but ugly way to do it:
var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];//3
var o = ["th","st","nd","rd"];
document.write("<h1>Simplest, but ugly way to do it:</h1>");
document.write("1"+o[1]+" choice is "+aCities[0]+"<br>");
document.write("2"+o[2]+" choice is "+aCities[1]+"<br>");
document.write("3"+o[3]+" choice is "+aCities[2]+"<br>");

document.write("<h1>Complicated, but nicer way to do it:</h1>");
//Complicated, but nicer way to do it:
for (var i=1; i<(aCities.length)+1; i++){
    for (var j=1; j<o.length; j++ ){
        if (i===j){
        document.write(j+o[j]+" choice is "+aCities[(i-1)]+"<br>");
        }
    }
}