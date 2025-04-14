const uname = document.getElementById('uname');
const email = document.getElementById('email');
const address = document.getElementById('address');
const addBtn = document.getElementById('addRow');
let i = 1;

// Add new row to the table on button click
addBtn.addEventListener('click', function (e) {
    e.preventDefault(); // prevent form submission

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${i++}</td>
        <td>${uname.value}</td>
        <td>${email.value}</td>
        <td>${address.value}</td>
    `;

    document.querySelector('#table-body').appendChild(newRow);

    // Clear input fields after adding
    uname.value = '';
    email.value = '';
    address.value = '';
});
