
let employeeDatabase = [
    {
        id: '001',
        name: 'John Doe',
        role: 'Software Engineer',
        department: 'IT'
    },
    {
        id: '002',
        name: 'Jane Smith',
        role: 'Project Manager',
        department: 'Marketing'
    }
];


function addEmployee(id, name, role, department) {
    const newEmployee = {
        id: id,
        name: name,
        role: role,
        department: department
    };
    employeeDatabase.push(newEmployee);
    console.log(`Employee ${name} added successfully!`);
}


function displayEmployees() {
    console.log("Employee List:");
    employeeDatabase.forEach(employee => {
        console.log(`ID: ${employee.id}, Name: ${employee.name}, Role: ${employee.role}, Department: ${employee.department}`);
    });
}


function findEmployeeById(employeeId) {
    const employee = employeeDatabase.find(emp => emp.id === employeeId);
    if (employee) {
        console.log(`Employee found: ID: ${employee.id}, Name: ${employee.name}, Role: ${employee.role}, Department: ${employee.department}`);
    } else {
        console.log(`Employee with ID: ${employeeId} not found.`);
    }
}


function deleteEmployeeById(employeeId) {
    const index = employeeDatabase.findIndex(emp => emp.id === employeeId);
    if (index !== -1) {
        employeeDatabase.splice(index, 1);
        console.log(`Employee with ID: ${employeeId} deleted successfully.`);
    } else {
        console.log(`Employee with ID: ${employeeId} not found.`);
    }
}


displayEmployees();


addEmployee('003', 'Alice Johnson', 'HR Specialist', 'HR');


displayEmployees();


findEmployeeById('002');

deleteEmployeeById('001');

displayEmployees();
