let profile = document.querySelector('.profile');
let editButton = profile.querySelector('.profile__info_edit-btn');
let popup = document.querySelector('.popup');
let closeIcon = document.querySelector('.popup__close-icon');


function popupEnabled() {
    popup.classList.add('popup_opened');
}

editButton.addEventListener('click', popupEnabled);

function popupDisabled() {
    popup.classList.remove('popup_opened');
}

closeIcon.addEventListener('click', popupDisabled);

// Mari kita cari formulirnya di DOM
let formElement = document.querySelector('.popup__popup-form'); // Gunakanlah metode querySelector()

// Selanjutnya adalah *handler* pengiriman formulir, meskipun
// *handler* ini tidak akan mengirimkan ke mana pun untuk saat ini

// Perhatikan bahwa nama fungsi dimulai dengan kata kerja
// dan menjelaskan dengan tepat apa fungsinya
function handleProfileFormSubmit(evt) {
    // Baris ini menghentikan browser untuk
    // mengirimkan formulir secara bawaan.
    evt.preventDefault();
    // Setelah melakukannya, kita dapat menentukan cara kita sendiri untuk mengirimkan formulir.
    // Kami akan menjelaskannya lebih terperinci nanti.

    // Mari kita temukan kolom formulir di DOM
    let nameInput = document.querySelector('.popup__field_name'); // Use querySelector()
    let jobInput = document.querySelector('.popup__field_job'); // Use querySelector()

    // Dapatkan nilai setiap kolom dari properti nilai yang sesuai
    nameInput.getAttribute('value');
    jobInput.getAttribute('value')
    // Pilih elemen tempat nilai setiap bagian akan dimasukkan
    let jobText = document.querySelector('.profile__info_job');
    let nameText = document.querySelector('.profile__info_name');
    // Tambahkan nilai baru menggunakan textContent
    // properti dari metode querySelector()
    nameText.textContent = nameInput.value
    jobText.textContent = jobInput.value

    popup.classList.remove('popup_opened');
}

// Hubungkan *handler* dengan formulir:
// ini akan mengamati *event* pengiriman
formElement.addEventListener('submit', handleProfileFormSubmit);