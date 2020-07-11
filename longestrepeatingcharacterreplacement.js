//Objective is to find the longest substring of all of the same characters given
//that you can change up to k characters in that substring

let str = aabccbb, k = 2


//O(n) solution that uses a sliding window approach

let map = {}
let left = 0
let right = 0
let maxFrequency = 0
let max = 0

while (right < str.length) {
    let char = str[right]
    
    if (map[char] == undefined) {
        map[char] = 1
    } else {
        map[char]++
    }

    maxFrequency = Math.max(maxFrequency, map[char])

    //If the remaining characters are greater than k,
    //then we don't have enough unique characters to replace
    if (right - left + 1 - maxFrequency > k) {
        let removeChar = str[left++]
        map[removeChar]--
    }

    max = Math.max(max, right - left + 1)

    right++
}

return max