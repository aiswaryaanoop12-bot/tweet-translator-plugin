# Tweet Translator Plugin

A Chrome extension that adds a "Translate" button to each tweet, translating it into Malayalam (or any chosen language) using the LibreTranslate API.

## How to Install
1. Download this repo as ZIP and extract it.
2. Open Chrome → go to chrome://extensions/.
3. Enable Developer Mode.
4. Click "Load unpacked" → select the extracted folder.
5. Open Twitter/X and click "Translate" on a tweet.

## Change Language
- In content.js, change "ml" to:
  - "hi" → Hindi
  - "en" → English
  - "ta" → Tamil
  - "ml" → Malayalam

## API Used
- [LibreTranslate](https://libretranslate.com)
