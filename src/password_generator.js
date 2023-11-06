/*
Random Password Generator in JavaScript, HTML, CSS:
  https://www.tutorialstonight.com/password-generator-in-javascript#writing-javascript-code-for-password-generator
*/

const keys = {
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lower: 'abcdefghijklmnopqrstuvwxyz',
  number: '0123456789',
  symbol: '~!@#$%^&*()-_=+\\|{}[]:;?/<>,.'
}

const getKey = [
  function upperCase () {
    return keys.upper[Math.floor(Math.random() * keys.upper.length)]
    // let ch = keys.upper[Math.floor(Math.random() * keys.upper.length)]
    // console.log('getKey[], upperCase(), ch:', ch)
    // return ch
  },
  function lowerCase () {
    return keys.lower[Math.floor(Math.random() * keys.lower.length)]
    // let ch = keys.lower[Math.floor(Math.random() * keys.lower.length)]
    // console.log('getKey[], lowerCase(), ch:', ch)
    // return ch
  },
  function number () {
    return keys.number[Math.floor(Math.random() * keys.number.length)]
    // let ch = keys.number[Math.floor(Math.random() * keys.number.length)]
    // console.log('getKey[], number(), ch:', ch)
    // return ch
  },
  function symbol () {
    return keys.symbol[Math.floor(Math.random() * keys.symbol.length)]
    // let ch = keys.symbol[Math.floor(Math.random() * keys.symbol.length)]
    // console.log('getKey[], symbol(), ch:', ch)
    // return ch
  }
]

// export function createPassword (len, [lower, upper, number, symbol]) {
export function createPassword (len, criteria) {
  let pswd = ''

  while (pswd.length < len) {
    // It produces a number b/t 0.xxx and length.xxx
    // ex. Math.random() may produce 0.7, which multiplied by
    //     array.length (3 in my case), would result in 2.1.
    //
    //Math.floor(2.1) = 2, meaning the 3rd array value would be accessed.
    let ndx = Math.floor(Math.random() * getKey.length)
    // let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)]
    // Print out func name
    // console.log('keyToAdd.name:', keyToAdd.name)

    // Get the checkbox item that is checkeda
    // console.log('criteria[', ndx, ']:', criteria[ndx])
    if (criteria[ndx].checked) {
      // pswd += getKey[ndx]()
      //
      // Same as last ln
      let keyToAdd = getKey[ndx]
      pswd += keyToAdd()
    }
  }
  return pswd
}
