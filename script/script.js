let profile = document.querySelector('.profile');
let editButton = profile.querySelector('.profile__info_edit-btn');
let popup = document.querySelector('.popup');
let closeIcon = document.querySelector('.popup__close-icon');
let formElement = document.querySelector('.popup__popup-form');
let jobText = document.querySelector('.profile__info_job');
let nameText = document.querySelector('.profile__info_name');
let nameInput = document.querySelector('.popup__field_name');
let jobInput = document.querySelector('.popup__field_job');


function popupEnabled() {
    popup.classList.add('popup_opened');
}

function popupDisabled() {
    popup.classList.remove('popup_opened');
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    nameText.textContent = nameInput.value;
    jobText.textContent = jobInput.value;

    popupDisabled();
}

closeIcon.addEventListener('click', popupDisabled);
editButton.addEventListener('click', popupEnabled);
formElement.addEventListener('submit', handleProfileFormSubmit);