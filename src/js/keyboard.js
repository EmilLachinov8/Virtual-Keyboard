import KEYBOARD_BTNS from './keyboard-btns.js';

const RUSSIAN = 'ru';
const ENGLISH = 'en';
const LOWERCASE = 'normal';
const UPPERCASE = 'shiftOn';
const storedLanguageItem = 'keyboardLang';

class Keyboard {
  constructor() {
    this.CAPITALISATION = LOWERCASE;
    this.LANGUAGE = localStorage.getItem(storedLanguageItem) || ENGLISH;
    this.CAPSLOCKED = false;
  }

  addButtons() {
    const fragment = document.createDocumentFragment();
    const keyCodes = Object.keys(KEYBOARD_BTNS);
    keyCodes.forEach((key) => {
      const button = document.createElement('div');
      button.textContent = KEYBOARD_BTNS[key].key[this.CAPITALISATION][this.LANGUAGE];
      button.classList.add('keyboard__button');
      button.classList.add(`keyboard__button_width_${KEYBOARD_BTNS[key].width}`);
      button.dataset.code = key;
      fragment.appendChild(button);
    });

    return fragment;
  }

  switchLanguage() {
    this.LANGUAGE = this.LANGUAGE === ENGLISH ? RUSSIAN : ENGLISH;
  }

  changeCapitalisation() {
    this.CAPITALISATION = this.CAPITALISATION === LOWERCASE ? UPPERCASE : LOWERCASE;
  }

  pushCapslock() {
    this.CAPSLOCKED = !this.CAPSLOCKED;
  }

  showButtons() {
    const keyboardButtons = document.querySelectorAll('.keyboard__button');
    for (let i = 0; i < keyboardButtons.length; i += 1) {
      keyboardButtons[i].textContent = KEYBOARD_BTNS[keyboardButtons[i].dataset.code]
        .key[this.CAPITALISATION][this.LANGUAGE];
    }
  }

  init() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    const textarea = document.createElement('textarea');
    textarea.classList.add('textarea');
    wrapper.appendChild(textarea);
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    const switchCase = document.createElement('div');
    switchCase.innerHTML = '<div class="switch__text"><p>To switch language: <span>alt</span> + <span>shift</span></p></div>';
    switchCase.classList.add('switch');
    wrapper.appendChild(keyboard);
    keyboard.appendChild(this.addButtons());
    wrapper.appendChild(switchCase);
    document.body.appendChild(wrapper);
    const shiftKeys = document.querySelectorAll('[data-code*="Shift');
    const capslockKey = document.querySelector('[data-code="CapsLock"');
    capslockKey.classList.add('keyboard__button_capslock');

    document.addEventListener('keydown', (event) => {
      if (KEYBOARD_BTNS[event.code]) {
        event.preventDefault();
        if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight')) {
          if (!Array.from(shiftKeys).some((element) => element.classList.contains('keyboard__button_active'))) {
            this.changeCapitalisation();
          }

          this.showButtons();
        }

        document.querySelector(`[data-code="${event.code}"]`).classList.add('keyboard__button_active');
        const startPoint = textarea.selectionStart;
        const indent = '\t';
        const lineBreak = '\n';

        if (KEYBOARD_BTNS[event.code].type === 'print') {
          if (startPoint === textarea.selectionEnd) {
            textarea.value = textarea.value.slice(0, startPoint)
              + KEYBOARD_BTNS[event.code].key[this.CAPITALISATION][this.LANGUAGE]
              + textarea.value.slice(textarea.selectionStart);
          } else {
            textarea.setRangeText(KEYBOARD_BTNS[event.code].key[this.CAPITALISATION][this.LANGUAGE]);
          }
          textarea.selectionStart = startPoint + 1;
          textarea.selectionEnd = textarea.selectionStart;
        } else if (KEYBOARD_BTNS[event.code].type === 'func') {
          switch (event.code) {
            case 'Backspace':
              if (startPoint === textarea.selectionEnd) {
                if (startPoint > 0) {
                  textarea.value = textarea.value.slice(0, startPoint - 1)
                    + textarea.value.slice(startPoint);
                  textarea.selectionStart = startPoint - 1;
                  textarea.selectionEnd = textarea.selectionStart;
                }
              } else {
                textarea.setRangeText('');
              }
              break;
            case 'Delete':
              if (startPoint === textarea.selectionEnd) {
                if (startPoint < textarea.value.length) {
                  textarea.value = textarea.value.slice(0, startPoint)
                    + textarea.value.slice(startPoint + 1);
                  textarea.selectionStart = startPoint;
                  textarea.selectionEnd = textarea.selectionStart;
                }
              } else {
                textarea.setRangeText('');
              }
              break;
            case 'Tab':
              if (startPoint === textarea.selectionEnd) {
                textarea.value = textarea.value.slice(0, startPoint)
                  + indent
                  + textarea.value.slice(textarea.selectionStart);
              } else {
                textarea.setRangeText(indent);
              }
              textarea.selectionStart = startPoint + 1;
              textarea.selectionEnd = textarea.selectionStart;
              break;
            case 'Enter':
              if (startPoint === textarea.selectionEnd) {
                textarea.value = textarea.value.slice(0, startPoint)
                  + lineBreak
                  + textarea.value.slice(textarea.selectionStart);
              } else {
                textarea.setRangeText(lineBreak);
              }
              textarea.selectionStart = startPoint + 1;
              textarea.selectionEnd = textarea.selectionStart;
              break;
            default:
              break;
          }
        }
      }
    });

    document.addEventListener('keyup', (event) => {
      if (KEYBOARD_BTNS[event.code]) {
        event.preventDefault();
        document.querySelector(`[data-code="${event.code}"]`).classList.remove('keyboard__button_active');

        if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
          this.changeCapitalisation();
          this.showButtons();

          if (event.altKey) {
            this.switchLanguage();
            this.showButtons();
          }
        }

        if (event.code === 'AltLeft' || event.code === 'AltRight') {
          if (event.shiftKey) {
            this.switchLanguage();
            this.showButtons();
          }
        }
        if (event.code === 'CapsLock') {
          this.changeCapitalisation();
          this.showButtons();
          this.pushCapslock();
          capslockKey.classList.toggle('keyboard__button_capslock_active');
        }
      }
    });
  }
}

export default Keyboard;