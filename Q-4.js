var cityName=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("List of Cities <br>"+cityName+"<br>");
var initialIndex=prompt("Choose the first index of the slice to be copied");
var lastIndex=prompt("Choose the last index of the slice to be copied");
document.write("Selected Cities list <br>"+cityName.slice(initialIndex,lastIndex));
