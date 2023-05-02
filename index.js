const KEYBOARD_BTNS = {
  Backquote: {
    keyCode: 192,
    key: { normal: { en: '`', ru: 'ё' }, shiftOn: { en: '~', ru: 'Ё' } },
    type: 'print',
    width: '100',
  },
  Digit1: {
    keyCode: 49,
    key: { normal: { en: '1', ru: '1' }, shiftOn: { en: '!', ru: '!' } },
    type: 'print',
    width: '100',
  },
  Digit2: {
    keyCode: 50,
    key: { normal: { en: '2', ru: '2' }, shiftOn: { en: '@', ru: '"' } },
    type: 'print',
    width: '100',
  },
  Digit3: {
    keyCode: 51,
    key: { normal: { en: '3', ru: '3' }, shiftOn: { en: '#', ru: '№' } },
    type: 'print',
    width: '100',
  },
  Digit4: {
    keyCode: 52,
    key: { normal: { en: '4', ru: '4' }, shiftOn: { en: '$', ru: ';' } },
    type: 'print',
    width: '100',
  },
  Digit5: {
    keyCode: 53,
    key: { normal: { en: '5', ru: '5' }, shiftOn: { en: '%', ru: '%' } },
    type: 'print',
    width: '100',
  },
  Digit6: {
    keyCode: 54,
    key: { normal: { en: '6', ru: '6' }, shiftOn: { en: '^', ru: ':' } },
    type: 'print',
    width: '100',
  },
  Digit7: {
    keyCode: 55,
    key: { normal: { en: '7', ru: '7' }, shiftOn: { en: '&', ru: '?' } },
    type: 'print',
    width: '100',
  },
  Digit8: {
    keyCode: 56,
    key: { normal: { en: '8', ru: '8' }, shiftOn: { en: '*', ru: '*' } },
    type: 'print',
    width: '100',
  },
  Digit9: {
    keyCode: 57,
    key: { normal: { en: '9', ru: '9' }, shiftOn: { en: '(', ru: '(' } },
    type: 'print',
    width: '100',
  },
  Digit0: {
    keyCode: 48,
    key: { normal: { en: '0', ru: '0' }, shiftOn: { en: ')', ru: ')' } },
    type: 'print',
    width: '100',
  },
  Minus: {
    keyCode: 173,
    key: { normal: { en: '-', ru: '-' }, shiftOn: { en: '_', ru: '_' } },
    type: 'print',
    width: '100',
  },
  Equal: {
    keyCode: 61,
    key: { normal: { en: '=', ru: '=' }, shiftOn: { en: '+', ru: '+' } },
    type: 'print',
    width: '100',
  },
  Backspace: {
    keyCode: 8,
    key: { normal: { en: 'Backspace', ru: 'Backspace' }, shiftOn: { en: 'Backspace', ru: 'Backspace' } },
    type: 'func',
    width: '200',
  },
  Tab: {
    keyCode: 9,
    key: { normal: { en: 'Tab', ru: 'Tab' }, shiftOn: { en: 'Tab', ru: 'Tab' } },
    type: 'func',
    width: '175',
  },
  KeyQ: {
    keyCode: 81,
    key: { normal: { en: 'q', ru: 'й' }, shiftOn: { en: 'Q', ru: 'Й' } },
    type: 'print',
    width: '100',
  },
  KeyW: {
    keyCode: 87,
    key: { normal: { en: 'w', ru: 'ц' }, shiftOn: { en: 'W', ru: 'Ц' } },
    type: 'print',
    width: '100',
  },
  KeyE: {
    keyCode: 69,
    key: { normal: { en: 'e', ru: 'у' }, shiftOn: { en: 'E', ru: 'У' } },
    type: 'print',
    width: '100',
  },
  KeyR: {
    keyCode: 82,
    key: { normal: { en: 'r', ru: 'к' }, shiftOn: { en: 'R', ru: 'К' } },
    type: 'print',
    width: '100',
  },
  KeyT: {
    keyCode: 84,
    key: { normal: { en: 't', ru: 'е' }, shiftOn: { en: 'T', ru: 'Е' } },
    type: 'print',
    width: '100',
  },
  KeyY: {
    keyCode: 89,
    key: { normal: { en: 'y', ru: 'н' }, shiftOn: { en: 'Y', ru: 'Н' } },
    type: 'print',
    width: '100',
  },
  KeyU: {
    keyCode: 85,
    key: { normal: { en: 'u', ru: 'г' }, shiftOn: { en: 'U', ru: 'Г' } },
    type: 'print',
    width: '100',
  },
  KeyI: {
    keyCode: 73,
    key: { normal: { en: 'i', ru: 'ш' }, shiftOn: { en: 'I', ru: 'Ш' } },
    type: 'print',
    width: '100',
  },
  KeyO: {
    keyCode: 79,
    key: { normal: { en: 'o', ru: 'щ' }, shiftOn: { en: 'O', ru: 'Щ' } },
    type: 'print',
    width: '100',
  },
  KeyP: {
    keyCode: 80,
    key: { normal: { en: 'p', ru: 'з' }, shiftOn: { en: 'P', ru: 'З' } },
    type: 'print',
    width: '100',
  },
  BracketLeft: {
    keyCode: 219,
    key: { normal: { en: '[', ru: 'х' }, shiftOn: { en: '{', ru: 'Х' } },
    type: 'print',
    width: '100',
  },
  BracketRight: {
    keyCode: 221,
    key: { normal: { en: ']', ru: 'ъ' }, shiftOn: { en: '}', ru: 'Ъ' } },
    type: 'print',
    width: '100',
  },
  Backslash: {
    keyCode: 220,
    key: { normal: { en: '\\', ru: '\\' }, shiftOn: { en: '|', ru: '/' } },
    type: 'print',
    width: '125',
  },
  CapsLock: {
    keyCode: 20,
    key: { normal: { en: 'Capslock', ru: 'Capslock' }, shiftOn: { en: 'Capslock', ru: 'Capslock' } },
    type: 'func',
    width: '150',
  },
  KeyA: {
    keyCode: 65,
    key: { normal: { en: 'a', ru: 'ф' }, shiftOn: { en: 'A', ru: 'Ф' } },
    type: 'print',
    width: '100',
  },
  KeyS: {
    keyCode: 83,
    key: { normal: { en: 's', ru: 'ы' }, shiftOn: { en: 'S', ru: 'Ы' } },
    type: 'print',
    width: '100',
  },
  KeyD: {
    keyCode: 68,
    key: { normal: { en: 'd', ru: 'в' }, shiftOn: { en: 'D', ru: 'В' } },
    type: 'print',
    width: '100',
  },
  KeyF: {
    keyCode: 70,
    key: { normal: { en: 'f', ru: 'а' }, shiftOn: { en: 'F', ru: 'А' } },
    type: 'print',
    width: '100',
  },
  KeyG: {
    keyCode: 71,
    key: { normal: { en: 'g', ru: 'п' }, shiftOn: { en: 'G', ru: 'П' } },
    type: 'print',
    width: '100',
  },
  KeyH: {
    keyCode: 72,
    key: { normal: { en: 'h', ru: 'р' }, shiftOn: { en: 'H', ru: 'Р' } },
    type: 'print',
    width: '100',
  },
  KeyJ: {
    keyCode: 74,
    key: { normal: { en: 'j', ru: 'о' }, shiftOn: { en: 'J', ru: 'О' } },
    type: 'print',
    width: '100',
  },
  KeyK: {
    keyCode: 75,
    key: { normal: { en: 'k', ru: 'л' }, shiftOn: { en: 'K', ru: 'Л' } },
    type: 'print',
    width: '100',
  },
  KeyL: {
    keyCode: 76,
    key: { normal: { en: 'l', ru: 'д' }, shiftOn: { en: 'L', ru: 'Д' } },
    type: 'print',
    width: '100',
  },
  Semicolon: {
    keyCode: 59,
    key: { normal: { en: ';', ru: 'ж' }, shiftOn: { en: ':', ru: 'Ж' } },
    type: 'print',
    width: '100',
  },
  Quote: {
    keyCode: 222,
    key: { normal: { en: "'", ru: 'э' }, shiftOn: { en: '"', ru: 'Э' } },
    type: 'print',
    width: '100',
  },
  Enter: {
    keyCode: 13,
    key: { normal: { en: 'Enter', ru: 'Enter' }, shiftOn: { en: 'Enter', ru: 'Enter' } },
    type: 'func',
    width: '150',
  },
  ShiftLeft: {
    keyCode: 16,
    key: { normal: { en: 'Shift', ru: 'Shift' }, shiftOn: { en: 'Shift', ru: 'Shift' } },
    type: 'func',
    width: '150',
  },
  KeyZ: {
    keyCode: 90,
    key: { normal: { en: 'z', ru: 'я' }, shiftOn: { en: 'Z', ru: 'Я' } },
    type: 'print',
    width: '100',
  },
  KeyX: {
    keyCode: 88,
    key: { normal: { en: 'x', ru: 'ч' }, shiftOn: { en: 'X', ru: 'Ч' } },
    type: 'print',
    width: '100',
  },
  KeyC: {
    keyCode: 67,
    key: { normal: { en: 'c', ru: 'с' }, shiftOn: { en: 'C', ru: 'С' } },
    type: 'print',
    width: '100',
  },
  KeyV: {
    keyCode: 86,
    key: { normal: { en: 'v', ru: 'м' }, shiftOn: { en: 'V', ru: 'М' } },
    type: 'print',
    width: '100',
  },
  KeyB: {
    keyCode: 66,
    key: { normal: { en: 'b', ru: 'и' }, shiftOn: { en: 'B', ru: 'И' } },
    type: 'print',
    width: '100',
  },
  KeyN: {
    keyCode: 78,
    key: { normal: { en: 'n', ru: 'т' }, shiftOn: { en: 'N', ru: 'Т' } },
    type: 'print',
    width: '100',
  },
  KeyM: {
    keyCode: 77,
    key: { normal: { en: 'm', ru: 'ь' }, shiftOn: { en: 'M', ru: 'Ь' } },
    type: 'print',
    width: '100',
  },
  Comma: {
    keyCode: 188,
    key: { normal: { en: ',', ru: 'б' }, shiftOn: { en: '<', ru: 'Б' } },
    type: 'print',
    width: '100',
  },
  Period: {
    keyCode: 190,
    key: { normal: { en: '.', ru: 'ю' }, shiftOn: { en: '>', ru: 'Ю' } },
    type: 'print',
    width: '100',
  },
  Slash: {
    keyCode: 191,
    key: { normal: { en: '/', ru: '.' }, shiftOn: { en: '?', ru: ',' } },
    type: 'print',
    width: '100',
  },
  ShiftRight: {
    keyCode: 16,
    key: { normal: { en: 'Shift', ru: 'Shift' }, shiftOn: { en: 'Shift', ru: 'Shift' } },
    type: 'func',
    width: '125',
  },
  ArrowUp: {
    keyCode: 38,
    key: { normal: { en: '△', ru: '△' }, shiftOn: { en: '△', ru: '△' } },
    type: 'print',
    width: '100',
  },
  Delete: {
    keyCode: 46,
    key: { normal: { en: 'Del', ru: 'Del' }, shiftOn: { en: 'Del', ru: 'Del' } },
    type: 'func',
    width: '100',
  },
  ControlLeft: {
    keyCode: 17,
    key: { normal: { en: 'Ctrl', ru: 'Ctrl' }, shiftOn: { en: 'Ctrl', ru: 'Ctrl' } },
    type: 'func',
    width: '125',
  },
  OSLeft: {
    keyCode: 91,
    key: { normal: { en: 'Win', ru: 'Win' }, shiftOn: { en: 'Win', ru: 'Win' } },
    type: 'func',
    width: '100',
  },
  AltLeft: {
    keyCode: 18,
    key: { normal: { en: 'Alt', ru: 'Alt' }, shiftOn: { en: 'Alt', ru: 'Alt' } },
    type: 'func',
    width: '100',
  },
  Space: {
    keyCode: 32,
    key: { normal: { en: ' ', ru: ' ' }, shiftOn: { en: ' ', ru: ' ' } },
    type: 'print',
    width: '700',
  },
  AltRight: {
    keyCode: 18,
    key: { normal: { en: 'Alt', ru: 'Alt' }, shiftOn: { en: 'Alt', ru: 'Alt' } },
    type: 'func',
    width: '100',
  },
  ControlRight: {
    keyCode: 17,
    key: { normal: { en: 'Ctrl', ru: 'Ctrl' }, shiftOn: { en: 'Ctrl', ru: 'Ctrl' } },
    type: 'func',
    width: '125',
  },
  ArrowLeft: {
    keyCode: 37,
    key: { normal: { en: '◁', ru: '◁' }, shiftOn: { en: '◁', ru: '◁' } },
    type: 'print',
    width: '100',
  },
  ArrowDown: {
    keyCode: 40,
    key: { normal: { en: '▽', ru: '▽' }, shiftOn: { en: '▽', ru: '▽' } },
    type: 'print',
    width: '100',
  },
  ArrowRight: {
    keyCode: 39,
    key: { normal: { en: '▷', ru: '▷' }, shiftOn: { en: '▷', ru: '▷' } },
    type: 'print',
    width: '100',
  },
};
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
const KEYBOARD = new Keyboard();
KEYBOARD.init();