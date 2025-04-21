const originalArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Remove duplicates from the array using Set
const uniqueArray = [...new Set(originalArray)];

document.body.innerHTML = `<h1>Original Array with Duplicate Items</h1>
<p>${originalArray.join(", ")}</p>
<h1>Array with Unique Items</h1>
<p>${uniqueArray.join(' - ')}</p>`;
