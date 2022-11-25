let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}



const addCSV = (e) => {
    e.preventDefault();
    const input = document.getElementById('fileinput');
    console.log(input.files[0]);
    var formData = new FormData()
    formData.append('file', input.files[0]);
    fetch('http://localhost:3000/ques', {
        method: 'POST',
        body: formData
    })
}
document.getElementById('upload_form').addEventListener('submit', addCSV)