const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// responses for a couple common questions
const greetings = [
    "I'm fabulous",
    "Doing good girlfran",
    "leave me alone"
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// when voice is activated, this runs
recognition.onstart = function () {
    console.log('voice is activated, you may speak into the microphone');
};

// when the user stops talking, this is executed
recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

// add the listener to the button
btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "Sorry, I didn't catch that";

    if (message.includes('how are you')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    
    window.speechSynthesis.speak(speech);
}