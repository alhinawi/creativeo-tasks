document.write(`<select id="select">`);
for (let i = 1970; i <= new Date().getFullYear(); i++) {
  document.write (`<option value="${i}">${i}</option>`);
}
document.write(`</select>`);


