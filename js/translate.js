const translateBtn = document.getElementById('translate-btn');
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const selectLanguage = document.getElementById('select-language');

translateBtn.addEventListener('click', () => {
    const text = inputText.value;
    const language = selectLanguage.value;

    translate(text, language)
        .then((translatedText) => {
            outputText.value = translatedText;
        })
        .catch((error) => {
            console.error(error);
            outputText.value = 'Error translating text';
        });
});

function translate(text, language) {
    return new Promise((resolve, reject) => {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${language}&dt=t&q=${encodeURI(text)}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const translatedText = data[0][0][0];
                resolve(translatedText);
            })
            .catch((error) => {
                reject(error);
            });
    });
}