// bagian validasi
function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
    } else {
        alert("Sukses di isi");
    }

    setSenderUI(name, birthDate, gender, messages);

    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

// bagian ubah nama
function replaceName() {
    let name = prompt("Siapakah nama Anda?", "");
    document.getElementById("namauser").innerHTML = name;
}

document.getElementById("changeName").addEventListener("click", () => replaceName());

replaceName();

// bagian navigasi
const menuIcon = document.getElementById("menu-icon")
const menuList = document.getElementById("menu-list")

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});

// bagian slidefolio
var indexValue = 0;
function slideShow(){
    setTimeout(slideShow, 4500);
    var x;
    const img = document.querySelectorAll("img");
    for(x = 0; x < img.length; x++){
        img[x].style.display = "none";
    }
    indexValue++;
    if(indexValue > img.length){indexValue = 1}
    img[indexValue -1].style.display = "block";
}
slideShow();