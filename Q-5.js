/*(I modified the original Question to make it more difficult), Write a JavaScript program to create a new array of the duplicate items of the previous
array
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : [3, ‘a’, 2]*/
var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];  
var newArray=[];                              
for (var i=0; i<arr.length; i++){
    var compareVar=arr[i];                  
    for (var j=0; j<arr.length; j++){
        if (i!==j){
            var searchVar=arr[j];           
            if (compareVar===searchVar && newArray.includes(searchVar)===false){
                newArray.push(searchVar);
            }  
        }
    }
}
console.log(newArray);

/*(Original Question) Write a JavaScript program to remove all duplicate items from an
array
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : [3, ‘a’, 2, 4, 9]*/
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
for (var k=0; k<arr1.length; k++){
    var newCompare=arr1[k];
    for (var l=0; l<arr1.length; l++){
        var newSearch=arr1[l];
        if (k!==l && newCompare===newSearch){
            arr1.splice(l,1);
        }
    }
}
console.log(arr1)