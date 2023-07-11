

let inputMonth = +prompt('xin mời nhập tháng vào đây');
let inputYear = +prompt('xin mời nhập năm vào đây');
let outputDay;
if(inputMonth === 4 || inputMonth === 6 || inputMonth === 9 || inputMonth === 11) {
    outputDay = 30;
}else if (inputMonth === 2 ){
    if(inputYear % 4 !== 0) {
        outputDay = 28;
    }else {
        outputDay = 29;
    }
}else {
    outputDay = 31;
}

alert('Tháng này có ' + outputDay + ' ngày');


























