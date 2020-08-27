export function generateAlphabetList() {
  let letterList = [];

  for (let i = 65; i < 91; i++) {
    letterList.push(String.fromCharCode(i));
  }

  return letterList;
}
