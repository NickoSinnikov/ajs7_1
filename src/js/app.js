// TODO: write your code here
export default class Validator {
  static validateUsername(data) {
    let validBeginAndEnd = /^[^-_\d][A-Za-z\d-_]+[^-_\d]$/.test(data);
    let validNumber = !/[/d{4}]/.test(data);
    let validNickname = validBeginAndEnd && validNumber;
    return validNickname;
  }
}
