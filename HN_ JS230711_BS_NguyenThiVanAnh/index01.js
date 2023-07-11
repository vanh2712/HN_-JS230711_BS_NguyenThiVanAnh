
let arr =  [3,5,88,99,76,8,4,5,85,63];

let arrmax = arr[0];
for(i = 1; i < arr.length; i++){
    if(arrmax < arr[i]){
        arrmax = arr[i];
    }
}

alert('Giá trị lớn nhất cua mảng la ' + arrmax);