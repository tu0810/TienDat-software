let fs = require('fs');
let readlineSync= require('readline-sync');

let employees = [];


function loadData(){
    let fileConten = fs.readFileSync('./data.json');
    employees = JSON.parse(fileConten);
}

function showMenu() {
    console.log('1. Show all employees');
    console.log('2. Sắp xếp nhân sự');
    console.log('3. Thêm mới nhân sự');
    console.log('4. Check in/out');
    console.log('5. Check in trong ngày');
    console.log('6. Check out trong ngày');
    console.log('7. Save');

    let option = readlineSync.question('>>>>>');
    switch (option) {
        case '1':
            showEmployees();
            showMenu();
            break;
        case '2':
            sapXepNhanVien();
            showEmployees();
            showMenu();
            break;
        case '3':
            createEmployee();
            showMenu()
            break;
        case '4':
            checkInOut();

            showMenu();
            break
        case '5':
            showCheckIn();
            showMenu()

            break
        case '6':
            showCheckOut();
            showMenu()

            break
        case '7':
            savaAndExit();
            break
        
        default:
            console.log('wrong option')
            showMenu();
            break;
    }

}


function showEmployees() {
    for(let employee of employees){
        console.log(employee);
    }
}



// function sapXepNhanVien(){
//     employees.sort((a, b) => {
//         if (a.id > b.id)
//             return -1;
//         if (a.id < b.id)
//             return 1;
//         return 0;
//     });
// }

function sapXepNhanVien(){
    employees.sort((a, b) => {
      
        return  a.id - b.id;
    });
}

function createEmployee() {
    let id = readlineSync.question('ID: ');
    let name = readlineSync.question('Name: ');
    let age = readlineSync.question('Age: ');
    let phoneNumbers = readlineSync.question('PhoneNumbers: ');
    let passWord = readlineSync.question('PassWord: ');
    let employee = {
        id: parseInt(id),
        name: name,
        age: age,
        phoneNumbers: parseInt(phoneNumbers),
        passWord: passWord,
        checkIn:[],
        checkOut:[],
    };
    employees.push(employee);
}

// thêm 2 thuộc tính check in/out
// if chọn checkin ->> lấy ngày giwof hiện tại
// // if chọn checkin ->> lấy ngày giwof hiện tại

function employeesCheckIn(id){
    
    let currentdate = new Date(); 
    let datetime = "Check In: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    // console.log(datetime)
    employees.map((nhanVien,index)=>{
        if(nhanVien.id==id){
            employees[index].checkIn.push(datetime);
        }

    })
    // checkIn.push(currentdate);
}

function employeesCheckOut(id){
    
    let currentdate = new Date(); 
    let datetime = "Check Out: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
                console.log(datetime)

      employees.map((nhanVien,index)=>{
             if(nhanVien.id==id){
                   employees[index].checkOut.push(datetime);
              }
            
       })
    // checkOut.push(currentdate);
}


function checkInOut() {

    let idUser = readlineSync.question('ID: ');

    //tìm nhân viên
    let findEmployee = employees.find(function(tim) {
        // console.log(employee);
        return idUser === tim.id;
    });

    // let showEmployee = employees.filter(function(show) {
    //     return show.name === findEmployee.id;
    // });

    let check = readlineSync.question('Check (In/ Out)');
    if(check === 'in' || check === 'In') {
        employeesCheckIn(idUser);
    } 
    else if (check === 'out' || check ==='Out') {
        employeesCheckOut(idUser);
    } 
    else {
        console.log('chỉ có thể chọn In hoặc Out!!!')
    }

    // return showEmployee;

}



function showCheckOut(){
    employees.map((employee,index)=>{
        employee.checkOut.map((time) => {
            let today = new Date();
            let stringToday = today.getDate() + "/"
            + (today.getMonth()+1)  + "/" 
            + today.getFullYear();

            if(time.includes(stringToday)){
                console.log(employee)
            }
        })
    })
}

function showCheckIn(){
    employees.map((employee,index)=>{
        employee.checkIn.map((time) => {
            let today = new Date();
            let stringToday = today.getDate() + "/"
            + (today.getMonth()+1)  + "/" 
            + today.getFullYear();

            if(time.includes(stringToday)){
                console.log(employee)
            }
        })
    })
}

function savaAndExit() {
    let content = JSON.stringify(employees);
    fs.writeFileSync('./data.json', content, { encoding: 'utf8'});
}

function main(){
    loadData();
    showMenu();
}
main();