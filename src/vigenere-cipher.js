const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(machine) {
    this.machine = machine === false ? "reverse" : "direct";
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }


  encrypt(message, key) {
    let encryptedMessage = "";

    let i = 0;

    for (let char of message.toUpperCase()) {
      if (!this.alphabet.includes(char)) {
        encryptedMessage += char
        continue
      }
      encryptedMessage += this.alphabet[
        (this.alphabet.indexOf(char)
          + this.alphabet.indexOf(key.toUpperCase()[i]))
        % this.alphabet.length
      ]
      i++;
      if (i == key.length) {
        i = 0;
      }
    }

    return this.machine == "direct" ? encryptedMessage : [...encryptedMessage].reverse().join("")
  }

  decrypt(encryptedMessage, key) {
    let message = "";

    let i = 0;

    for (let encryptedMessageChar of encryptedMessage.toUpperCase()) {
      if (!this.alphabet.includes(encryptedMessageChar)) {
        message += encryptedMessageChar
        continue
      }
      message += this.alphabet[
        (this.alphabet.indexOf(encryptedMessageChar)
          + this.alphabet.length
          - this.alphabet.indexOf(key.toUpperCase()[i]))
        % this.alphabet.length
      ]
      i++;
      if (i == key.length) {
        i = 0;
      }
    }
    return this.machine == "direct" ? message : [...message].reverse().join("")
  }
}

module.exports = VigenereCipheringMachine;
