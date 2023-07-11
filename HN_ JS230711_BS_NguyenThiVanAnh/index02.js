// Viết 1 chương trình chuẩn hóa một câu: loại bỏ các khoảng trắng (space) ở đầu và cuối 
// câu, các từ cách nhau 1 khoảng trắng(space), ký tự đầu ở mỗi từ viết hoa, các ký tự khác 
// trong từ viết thường [30 điểm]
// ● Đầu vào: Câu là một chuỗi các ký tự
// ● Đầu ra: In ra chuỗi đã được chuẩn hóa.
// ● Ví dụ
// ○ Cho " this is A tEst "; In ra "This Is A Test"
// ○ Cho "heLlo riKkei academy"; In ra "Hello Rikkei Academy

let str = " heLlo riKkei academy ";
let newstr = str.toLowerCase();

let arr = newstr.split(' ');
let newarr = [];

for(i = 0; i < arr.length; i++) {
    if(arr[i] !== '') {
        newarr.push(arr[i]);
    }
}

for(i = 0; i < newarr.length; i++) {
   
   newarr[i] = newarr[i][0].toUpperCase() + newarr[i].slice(1);
   
  
   
}
alert(newarr.join(' '));






