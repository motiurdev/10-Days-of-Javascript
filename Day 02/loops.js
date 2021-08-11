/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vow = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < s.length; i++) {
        if (vow.indexOf(s[i]) > -1) {
            console.log(s[i])
        }
    }

    for (var i = 0; i < s.length; i++) {
        if (vow.indexOf(s[i]) < 0) {
            console.log(s[i])
        }
    }

}