let username=localStorage.getItem(`USERNAME`)
console.log(username);
head1.innerHTML=`welcome ${username} `

function logout(){
    localStorage.clear()
    window.location=`./login.html`
}

function add(){
    var Employee={
        empid:empid.value,
        empname:empname.value,
        empaddr:empaddr.value,
        empdesi:empdesi.value,
        empexp:empexp.value,
        empsal:empsal.value

    }
    console.log(Employee);
    empid.value='';
  empname.value='';
   empaddr.value='';
  empdesi.value='';
 empexp.value='';
   empsal.value='';
   localStorage.setItem('emp',JSON.stringify(Employee))
   alert("Employee Details Added Successfully")
}

function search(){
    var emp=JSON.parse(localStorage.getItem('emp'))
    console.log(emp);
    if(searchid.value==`${emp.empid}`){
        display.innerHTML=`<div class=text-center p-2">
        <h2 class="text-center">employee details</h2>
        Employeee ID: ${emp.empid}<br>
        Employeee Name: ${emp.empname}<br>
        Employeee Address: ${emp.empaddr}<br>
        Employeee Designation: ${emp.empdesi}<br>
        Employeee Experince: ${emp.empexp}<br>
        Employeee Salary: ${emp.empsal}
        </div>`
    }
    else{
        alert('employee not found');
        searchid.value='';
    }
}