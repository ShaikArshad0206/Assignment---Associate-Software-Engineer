const surveyForm = document.getElementById('surveyForm');
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popup-content');

surveyForm.addEventListener('submit', function(event) {
    event.preventDefault();
    displayPopup();
});

surveyForm.addEventListener('reset', function() {
    setTimeout(() => {
        popup.style.display = 'none';
        surveyForm.reset();
    }, 100);
});

function displayPopup() {
    const formData = new FormData(surveyForm);
    let popupHTML = '<h2>Survey Form Data</h2>';
    formData.forEach((value, key) => {
        popupHTML += `<p><strong>${key}:</strong> ${value}</p>`;
    });
    popupContent.innerHTML = popupHTML;
    popup.style.display = 'flex';
}

popup.addEventListener('click', function() {
    popup.style.display = 'none';
    surveyForm.reset();
});
