


let numberArrayC2 = [3, 25, 38, 49, 12];
for(let i = 0; i < numberArrayC2.length; i++){
    let idMin = i;
    for(j = 0; j < numberArrayC2.length; j++){
        if(numberArrayC2[j] < numberArrayC2[idMin]){
            let idMin = j;
            let stt = numberArrayC2[i];
            numberArrayC2[i] = numberArrayC2[idMin];
            numberArrayC2[idMin] = stt;
        }
    }
}
console.log(numberArrayC2);




