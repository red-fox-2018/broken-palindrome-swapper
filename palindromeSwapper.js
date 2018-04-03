/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna => (0-1), (1-2), (2,3), (3,4)
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */

 /**
cek apabila kata asli & kombinasi nya apabila ada salah 1 yg true, maka hasilnya true 
klo tidak ada, output nya false
======= contoh 1 ===========
kata asli : racecar (true)
kombinasi 1 (tukar huruf 1 & 2) : arcecar (false)
kombinasi 2 (tukar huruf 3 & 4) : raeccar (false)
kombinasi 3 (tukar huruf 5 & 6) : raceacr (false)
kombinasi 4 (tukar huruf 2 & 3) : rcaecar (false)
kombinasi 5 (tukar huruf 4 & 5) : raccear (false)
kombinasi 6 (tukar huruf 6 & 7) : racecra (false)
kombinasi 7 (tukar huruf 7 & 1) : racecar (true)

output : true 

======= contoh 2 ===========
kata asli : recacar (false)
kombinasi 1 (tukar huruf 1 & 2) : ercacar (false)
kombinasi 2 (tukar huruf 3 & 4) : reaccar (false)
kombinasi 3 (tukar huruf 5 & 6) : recaacr (false)

output : false

  */
function palindromeSwapper(str) {
  let newStr = '';
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < str.length; j++) {
      if (i === j) {
        newStr += str[j+1];
        newStr += str[j];
        j++;
      } else {
        newStr += str[j];
      }
    }
    if (isPalindrome(newStr)) return true;
  }
  return false;
}

/**
 * @function isPalindrome
 * Cek apabila kata merupakan palindromeSwapper
 * @param {string} str - input kata yang dicek bila palindrom
 * @returns {boolean} true bila kata adalah palindrom
 */
function isPalindrome(str) {
  if (str.split('').reverse().join('') === str) return true;
}

console.log(palindromeSwapper('arcecar')); // TRUE --> racecra
/**
kombinasi 1 - (0, 1) -> racecar - racecar
kombinasi 2 - (1, 2) -> acrecar - racerca
kombinasi 3 - (2, 3) -> areccar - raccera
kombinasi 4 - (3, 4) -> arccear - raeccra
kombinasi 5 - (4, 5) -> arceacr - rcaecra
kombinasi 6 - (5, 6) -> arcecra - arcecra
kombinasi 7 - (6, 0) -> rrcecaa - rrcecaa
 */
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE
