var i , j;
arr=[22,75,4,37,76,45,67,65];

function bubblesort(arr){
    for (i=0; i <= arr.length;i++){
        for (j=0; j<=arr.length; j++){
            if(arr[i]>arr[i+j]){
                temp = arr[i];
                arr[i] = arr[i+j];
                arr[i+j] = temp
            }            
        }
    }
    return(arr)
}

console.log(bubblesort(arr));
//bubble sorting