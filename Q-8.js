/*Generate the following series in your browser. See example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k*/



var arrycounting=[];
for (var i=1;i<=15;i++){
    arrycounting.push(i);
}
document.write("Counting: "+ arrycounting+ "<br>");
arrycounting=[];
for (var j=10;j>=1;j--){
       arrycounting.push(j);
}
document.write("Reverse counting: "+ arrycounting+ "<br>"); 
arrycounting=[];
for (var k=0;k<=10;k++){
        arrycounting.push(2*k);
}
document.write("Even: "+ arrycounting + "<br>");
arrycounting=[];
for (var l=0;l<=9;l++){
        arrycounting.push(2*l+1);
}
document.write("ODD: "+ arrycounting+ "<br>");
arrycounting=[];
for (var m=1;m<=10;m++){
      arrycounting.push((2*m)+"k");
}
document.write("Series: "+ arrycounting + "<br>");  