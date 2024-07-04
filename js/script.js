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

function replaceName() {
    let name = prompt("Siapakah nama Anda?", "");
    document.getElementById("namauser").innerHTML = name
}

replaceName();

// let indexSlide = 1;
// showSlide(1);

// function nextSlide(n) {
//     showSlide(indexSlide += n);
//     console.log("Index slide kita tambah " + n);
//     console.log(indexSlide + " ini Nextslide");
// }

// function showSlide(n) {
//     let listImage = document.getElementsByClassName("banner-container");
//     if (n >= listImage.length) indexSlide = 0;
//     console.log(listImage.length + " ini jumlah gambarnya");
//     console.log(n + " ini N di Showslide");

//     let index = 0;
//     while (index < indexImage.length) {
//         listImage[index].style.display = "none";
//         index++;
//     }

//     console.log(indexSlide + "ini indexslide di showslide");
//     listImage[indexSlide].style.display = 'block'
// }

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var 1;
    var imgList = document.getElementsByClassName("banner-container");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; 1++) {
        
    }
}