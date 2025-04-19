const fileInput = document.getElementById("file-input");
const msg = document.getElementById("msg");

fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    
    if (file) {
        const validTypes = ["jpg", "jpeg", "txt", "png"];
        const fileType = file.name.split(".").pop().toLowerCase();

        if (validTypes.includes(fileType)) {
            msg.textContent = "File is valid!";
            msg.style.color = "green";
        }
        else {
            msg.textContent = "Invalid file type!";
            msg.style.color = "red";
        }
    }
});