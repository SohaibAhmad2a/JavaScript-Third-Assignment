var studentName=[];
var studentMarks=[];
var totalMarks=500;
for (var i=0; i<3; i++){
    studentName.push(prompt("What is your name"));
    studentMarks.push(prompt("What are your marks"));

    
}
for (var j=0; j<3;j++){
    document.write("Score of "+studentName[j]+" is "+studentMarks[j]+". Percentage: "+((100*studentMarks[j])/totalMarks)+"%<br>");
}