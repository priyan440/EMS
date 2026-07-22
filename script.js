// Employee Management System

let employees = [];

// Add Employee
function addEmployee() {
    const name = document.getElementById("name").value;
    const id = document.getElementById("empId").value;
    const department = document.getElementById("department").value;
    const salary = document.getElementById("salary").value;

    if (name === "" || id === "" || department === "" || salary === "") {
        alert("Please fill all fields.");
        return;
    }

    employees.push({
        name: name,
        id: id,
        department: department,
        salary: salary
    });

    displayEmployees();

    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("department").value = "";
    document.getElementById("salary").value = "";
}

// Display Employees
function displayEmployees() {
    const table = document.getElementById("employeeTable");
    table.innerHTML = "";

    employees.forEach((employee, index) => {
        table.innerHTML += `
        <tr>
            <td>${employee.name}</td>
            <td>${employee.id}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>
                <button onclick="deleteEmployee(${index})">Delete</button>
            </td>
        </tr>`;
    });
}

// Delete Employee
function deleteEmployee(index) {
    employees.splice(index, 1);
    displayEmployees();
}