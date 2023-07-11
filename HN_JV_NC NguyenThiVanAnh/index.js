let addSelector = document.querySelector('.save_data');
let tbody = document.querySelector('tbody');
let nameSelector = document.querySelector('#name');
let emailSelector = document.querySelector('#email');
let phoneSelector = document.querySelector('#phone');
let addressSelector = document.querySelector('#address');
let sortButton = document.querySelector('.sort');
let btnSearch = document.querySelector('.btn_search');




let students = [
    {
        id: crypto.randomUUID(),
        name: 'rikkei',
        email: 'rikkei@gmail.com',
        phone: '092487777',
        address: 'hà nội',
        sex: 'Nam'
    },
    {
        id: crypto.randomUUID(),
        name: 'academy',
        email: 'academy@gmail.com',
        phone: '0985536798',
        address: 'HCM',
        sex: 'Nữ'  
    }

];


// show
function showListStudent() {
    let resultHtml = '';
    for(i = 0; i < students.length; i++) {
        resultHtml = resultHtml + ` <tr>
                                        <td>${i + 1}</td>
                                        <td>${students[i].name}</td>
                                        <td>${students[i].email}</td>
                                        <td>${students[i].phone}</td>
                                        <td>${students[i].address}</td>
                                        <td>${students[i].sex}</td>
                                        <td>
                                            <button type="button" data-id="${students[i].id}" class="btn btn-blue">Edit</button>
                                            <button type="button" data-id="${students[i].id}" class="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>`
    }
    tbody.innerHTML = resultHtml;
}


//add
function handleAddStudent(event) {
    let name = nameSelector.value;
    let email = emailSelector.value;
    let address = addressSelector.value;
    let phone = phoneSelector.value;
    let sex = document.querySelector('.chooseSex:checked').value;
    let vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    let mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!email.match(mailformat)){
        alert("Not a valid Email");
        return;
    }
    if(!phone.match(vnf_regex)) {
        alert("Not a valid Phone Numbers");
        return;
    }


    if(name && address) {
        if(event.target.classList.contains('update')){
            let idUpdate = event.target.getAttribute('data-id');
            
            let indexEdit;
            for (let i = 0; i < students.length; i++) {
                if (students[i].id === idUpdate) {
                    indexEdit = i;
                    break;
                }
            }
            students[indexEdit].name = name;
            students[indexEdit].email = email;
            students[indexEdit].address = address;
            students[indexEdit].phone = phone;
            students[indexEdit].sex = sex;
    
    
            showListStudent();
    
            document.querySelector('form').reset();
            addSelector.classList.remove('update');
            addSelector.removeAttribute('data-id');
            addSelector.innerText = 'Lưu Lại';
    
    
        }else {
           let obj = {
                id: crypto.randomUUID(),
                name: name,
                email: email,
                phone: phone,
                address: address,
                sex: sex
           };
           students.push(obj);
           showListStudent();
           document.querySelector('form').reset();
        }
    }
    

}

//delete 
function handleProcessStudent(event) {
    
    let idDelete = event.target.getAttribute('data-id');
    if(event.target.classList.contains('btn-danger')){
        let confirmDelete = confirm('Bạn chắc chắn muốn xóa không ?');
        if(confirmDelete){
            let indexDelete;
            for(i = 0; i < students.length; i++) {
                if(students[i].id === idDelete){
                    indexDelete = i;
                    break;
                }
            }
            students.splice(indexDelete, 1);
            showListStudent();
        }
        
    }else if (event.target.classList.contains('btn-blue')) {
        let indexEdit;
        let idEdit = event.target.getAttribute('data-id');
        for(i = 0; i < students.length; i++) {
            if(students[i].id === idEdit){
                indexEdit = i;
                break;
            }
        }
        let objEdit = students[indexEdit];
        nameSelector.value = objEdit.name;
        emailSelector.value = objEdit.email;
        phoneSelector.value = objEdit.phone;
        addressSelector.value = objEdit.address;
        document.querySelector(`input[value=${objEdit.sex}]`).checked = true;

        addSelector.classList.add('update');
        addSelector.setAttribute('data-id', idEdit);
        addSelector.innerText = 'Update';

    }
}




function handleSortStudent() {
    students.sort(
        function(a, b) {
            let nameA = a.name.toLowerCase();
            let nameB = b.name.toLowerCase();
            if(nameA < nameB) {
                return -1;
            }
            if(nameA > nameB) {
                return 1;
            }
            return 0;
        }
    )
    showListStudent();
}

function handleSearch() {
    let valueSearch = document.querySelector('.search input').value.toLowerCase();
    
    let studentFilter = students.filter(
        function(studentItem) {
            return studentItem.name.toLowerCase().includes(valueSearch);
        }
    );
  
    let resultHtml = '';
    for (let i = 0; i < studentFilter.length; i++) {
        let student = studentFilter[i];
        resultHtml = resultHtml + ` <tr>
                <td>${i + 1}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.phone}</td>
                <td>${student.address}</td>
                <td>${student.sex}</td>
                <td>
                    <button type="button" data-id="${student.id}" class="btn btn-blue">Edit</button>
                    <button type="button" data-id="${student.id}" class="btn btn-danger">Delete</button>
                </td>
            </tr>`
    }
    
    tbody.innerHTML = resultHtml;
    document.querySelector('.search input').value = '';
}









showListStudent();
addSelector.addEventListener('click', handleAddStudent);
tbody.addEventListener('click', handleProcessStudent);
sortButton.addEventListener('click', handleSortStudent);
btnSearch.addEventListener('click', handleSearch);




















