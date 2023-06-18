/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.


Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
*/

function canConstruct(ransomNote: string, magazine: string): boolean {
	let magazineChars = new Map<string, number>()

	for (const char of magazine) {
		const count = magazineChars.get(char)
		if (count) magazineChars.set(char, count + 1)
		else magazineChars.set(char, 1)
	}

	for (const char of ransomNote) {
		const count = magazineChars.get(char)
		if (!count) return false
		else magazineChars.set(char, count - 1)
	}

	return true
}

console.log(canConstruct("a", "b")) // false
console.log(canConstruct("aa", "ab")) // false
console.log(canConstruct("aa", "aab")) //true
