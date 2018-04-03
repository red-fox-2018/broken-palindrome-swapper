// /**
//  * @function palindromeSwapper
//  * menukar 2 huruf berurutan dari n = 0 sampai n-1
//  * contoh: makan => amkan, mkaan, maakn, makna
//  * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
//  * @returns {boolean} true bila kata yang di-swap adalah palindrom
//  */
//arcecar

// kata asli : racecar (true)
// kombinasi 1 (tukar huruf 1 & 2) : arcecar (false)
// kombinasi 2 (tukar huruf 3 & 4) : raeccar (false)
// kombinasi 3 (tukar huruf 5 & 6) : raceacr (false)
// output : true 
function palindromeSwapper(str) {
  let newStr = '';
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < str.length; j++) {
      console.log('-----', j)
      if (i===j) {
        newStr += str[j+1]
        newStr += str[j];
        j++;
      } 
      else {
        newStr += str[j];
        console.log(newStr)
      }
      console.log('------+', newStr)
      if (isPalindrome(newStr)) return true;
      else{}
    }
    // newStr=""
  }
  return false;
}

// /**
//  * @function isPalindrome
//  * Cek apabila kata merupakan palindromeSwapper
//  * @param {string} str - input kata yang dicek bila palindrom
//  * @returns {boolean} true bila kata adalah palindrom
//  */

function isPalindrome(str) {
  if (str.split('').reverse().join("") === str) return true;
  return false;
}


console.log(palindromeSwapper('arcecar'))
// console.log(palindromeSwapper('arcecar')); // TRUE
// console.log(palindromeSwapper('racecar')); // TRUE
// console.log(palindromeSwapper('recacar')); // FALSE


// kata asli : arcecar -- false 
// racecar -- true 
// areccar -- false 
// arceacr -- false

// true