const imageUpload = document.getElementById('image-upload');
const explanationInput = document.getElementById('explanation-input');
const saveExplanationBtn = document.getElementById('save-explanation-btn');
const savedExplanation = document.getElementById('saved-explanation');
const explanationText = document.getElementById('explanation-text');
const backBtn = document.getElementById('back-btn');

// Salva la spiegazione
saveExplanationBtn.addEventListener('click', () => {
    const explanation = explanationInput.value.trim();
    if (explanation) {
        explanationText.textContent = explanation;
        explanationInput.value = "";
        savedExplanation.classList.remove('hidden');
    } else {
        alert("Per favore, inserisci una spiegazione prima di salvare.");
    }
});

// Torna indietro per modificare la spiegazione
backBtn.addEventListener('click', () => {
    savedExplanation.classList.add('hidden');
});
