/*
Given the head of a singly linked list, return true if it is a 
palindrome or false otherwise.


Example 1:

Input: head = [1,2,2,1]
Output: true
Example 2:

Input: head = [1,2]
Output: false
*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

function isPalindrome(head: ListNode | null): boolean {
	if (!head) return false

	const array = listNodeToArray(head)

	for (let i = 0, j = array.length - 1; i < array.length; i++, j--) {
		if (array[i] !== array[j]) return false
	}

	return true
}

function listNodeToArray(head: ListNode): number[] {
	let arr = [head.val]
	let next = head.next

	while (next != null) {
		arr.push(next.val)
		next = next.next
	}

	return arr
}

console.log(isPalindrome(new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1)))))) // true
console.log(isPalindrome(new ListNode(1, new ListNode(2)))) // false
