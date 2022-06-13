/*You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an array. After
searching, prompt the user whether the given item is found in the list
or not.*/
A = ["cake", "apple pie", "cookie", "chip", "patties"];
var inputFood=prompt("Enter which food do you like: ");
var bol=true
for (var i=0; i<A.length; i++){
    var compVar=A[i];
    if (inputFood===compVar){
        console.log(inputFood+" is available at index "+i);
        bol=false;
    }
}
if (bol===true){
    console.log("Sorry we don't have this food");
}
