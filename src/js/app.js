// TODO: write your code here
export default class Validator {
  static validateUsername(data) {
    let validBeginAndEnd = /^[A-Za-z][A-Za-z\d-_]+[A-Za-z]$/.test(data);
    let validNumber = !/[/d{4}]/.test(data);
    let validNickname = validBeginAndEnd && validNumber;
    return validNickname;
  }
}
