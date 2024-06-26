let textArea = document.getElementById("text");
let speakButton = document.getElementById("speak-button");


speakButton.addEventListener("click", function() {
  // Get the text from the text area
  let text = textArea.value;

  // Create a new SpeechSynthesisUtterance object
  let utterance = new SpeechSynthesisUtterance();

  // Set the text and voice of the utterance
  utterance.text = text;
  utterance.voice = window.speechSynthesis.getVoices()[0];

  // Speak the utterance
  window.speechSynthesis.speak(utterance);
});
