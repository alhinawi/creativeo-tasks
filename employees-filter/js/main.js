// Get DOM elements
const tbody = document.getElementById('tbody');
const filterBtn = document.getElementById('filterBtn');

// Flat array of employee objects 
const employees = [
    { name: "Mohamed Alhinawi", position: "Software Engineer", department: "Development", salary: 9000 },
    { name: "Mohamed Elalfy", position: "Project Manager", department: "Management", salary: 8000 },
    { name: "Mohamed Zahran", position: "UX Designer", department: "Design", salary: 5000 },
    { name: "Mostafa Ayman", position: "Data Analyst", department: "Analytics", salary: 7000 },
    { name: "Abdullah Omar", position: "System Administrator", department: "IT Support", salary: 2000 },
    { name: "Abdelrahman Sameh", position: "Marketing Specialist", department: "Marketing", salary: 3000 }
];

// Function to insert a single employee row into the table
const insertData = (employee) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${employee.name}</td>
        <td>${employee.position}</td>
        <td>${employee.department}</td>
        <td>${employee.salary}</td>
    `;
    tbody.appendChild(tr);
};

// Function to display a list of employees in the table
const displayEmployees = (data) => {
    tbody.innerHTML = ''; // Clear table before inserting
    data.forEach(insertData); // Insert each employee row
};

// Display all employees when the page loads
displayEmployees(employees);

// Filter and display employees with salary > 5000 on button click
filterBtn.onclick = () => {
    const filtered = employees.filter(emp => emp.salary > 5000);
    displayEmployees(filtered);
};
