// Function to add translate buttons to tweets
function addTranslateButtons() {
    const tweets = document.querySelectorAll('article');
    tweets.forEach(tweet => {
        if (tweet.querySelector('.translate-btn')) return; // Skip if button already exists

        let btn = document.createElement('button');
        btn.innerText = "Translate";
        btn.className = "translate-btn";
        btn.style.marginLeft = "10px";
        btn.style.background = "#1d9bf0";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.padding = "5px";
        btn.style.borderRadius = "4px";
        btn.style.cursor = "pointer";

        btn.onclick = async () => {
            let text = tweet.innerText.split("\n")[0]; // Get main tweet text
            let translated = await translateText(text, "ml"); // Malayalam (change to 'hi' for Hindi etc.)
            alert(Translated: ${translated});
        };

        tweet.appendChild(btn);
    });
}

// Function to translate text using LibreTranslate
async function translateText(text, targetLang) {
    try {
        const response = await fetch("https://libretranslate.com/translate", {
            method: "POST",
            body: JSON.stringify({
                q: text,
                source: "auto",
                target: targetLang,
                format: "text"
            }),
            headers: { "Content-Type": "application/json" }
        });

        const data = await response.json();
        return data.translatedText;
    } catch (error) {
        console.error("Translation failed", error);
        return "Translation failed";
    }
}

// Keep checking for new tweets and add buttons
setInterval(addTranslateButtons, 2000);
