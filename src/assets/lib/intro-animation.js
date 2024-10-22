export const blinkAndType = () => {
  const text = "I'm Wonders Victor"; // The text to be typed out
  const typedTextSpan = document.getElementById("typed-text");
  const cursorSpan = document.querySelector(".cursor");

  let charIndex = 0;
  let cursorBlinkCount = 0;
  let typingDelay = 150; // Speed of typing
  let cursorBlinkingTimes = 3; // Number of times the cursor blinks before typing
  let cursorBlinkDuration = 300; // Duration of cursor blinking in ms

  // Function to handle blinking cursor before typing starts
  function startBlinkingCursor() {
    cursorSpan.style.display = 'inline-block';
    cursorBlinkCount++;
    if (cursorBlinkCount >= cursorBlinkingTimes * 2) {
      clearInterval(cursorBlinkingInterval);
      cursorSpan.classList.add("show-cursor");
      setTimeout(typeText, 300); // Start typing after a small pause
    }
  }

  // Function to type out the text
  function typeText() {
    if (charIndex < text.length) {
      typedTextSpan.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingDelay);
    } else {
        stopCursorBlink(); // Stop the cursor blink after typing is done
        console.log('Typing done')
    }
  }

  // Function to stop the cursor blinking once typing is done
  function stopCursorBlink() {
    cursorSpan.classList.remove("show-cursor"); // Remove blinking effect
    cursorSpan.style.opacity = 1; // Keep cursor solid after typing
    cursorSpan.style.display = 'none';
  }

  // Hide cursor initially
  cursorSpan.classList.add("hide-cursor");

  // Start blinking cursor three times
  let cursorBlinkingInterval = setInterval(
    startBlinkingCursor,
    cursorBlinkDuration
  );
};
