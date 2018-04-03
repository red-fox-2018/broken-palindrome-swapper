/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
function palindromeSwapper(str) { //str = arcecar
  let newStr = '';
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < str.length; j++) { // --> diganti menjadi j++ dari i++
      if (i === j) {
        // debugger
        newStr += str[j+1]; // diubah dari j++ jadi j+1
        // debugger
        newStr += str[j];
        j++ //ditambahkan 1 agar j selanjutnya ke index yang ketiga
        // debugger
      } else {
        newStr += str[j];
        // debugger
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
  if (str.split('').reverse().join('') === str) {// ditambahkan '' pada method join
    return true;// console.log dihapus
  } else {
    return false;// console.log() dihapus
  }
}

// console.log(palindromeSwapper('arcecar')); // TRUE
// console.log(palindromeSwapper('racecar')); // TRUE
// console.log(palindromeSwapper('recacar')); // FALSE racecar
// cek apabila kata asli & kombinasi nya apabila ada salah 1 yg true, maka hasilnya true
// klo tidak ada, output nya false
// ======= contoh 1 ===========
// kata asli : racecar (true)
// kombinasi 1 (tukar huruf 1 & 2) : arcecar (false)
// kombinasi 2 (tukar huruf 3 & 4) : raeccar (false)
// kombinasi 3 (tukar huruf 5 & 6) : raceacr (false)
//
// output : true
//
// ======= contoh 2 ===========
// kata asli : recacar (false)
// kombinasi 1 (tukar huruf 1 & 2) : ercacar (false)
// kombinasi 2 (tukar huruf 3 & 4) : reaccar (false)
// kombinasi 3 (tukar huruf 5 & 6) : recaacr (false)
//
// output : false
//
