const SERIAL_CODE_PATTERN = /^(\w{4})-(\w{4})-(\w{4})-(\w{4})$/gm;

function autoFillInput() {
  const inputGroup = document.querySelector<HTMLDivElement>('.input-serial.js-input-group');

  if (!inputGroup) {
    return;
  }

  inputGroup.addEventListener('paste', (e) => {
    const clipboardText = e.clipboardData?.getData('text');
    if (!clipboardText) {
      return;
    }
    const match = SERIAL_CODE_PATTERN.exec(clipboardText);
    if (!match || match.length !== 5) {
      return;
    }
    match.slice(1, 5).forEach((code, index) => {
      const input = inputGroup.querySelector<HTMLInputElement>(`#serial${index + 1}`);
      if (input) {
        input.value = code;
      }
    });
  });
}

autoFillInput();
