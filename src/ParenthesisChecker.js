'use strict';

class ParenthesisChecker {

	constructor() {
		this.stack = []
	}

	perform(input) {
		this.guardAgainstInvalidInput(input)

		this.checkForEvenParenthesis(input)

		return this.stack.length > 0 ? 'NO' : 'YES'
	}

	guardAgainstInvalidInput(input) {
		if (!input) {
			throw 'No input provided'
		}

		if (typeof input !== 'string') {
			throw 'Invalid input type'
		}
	}

	checkForEvenParenthesis(input) {
		input.split('').forEach((character) => {
			if (this.isAnOpenParenthesis(character) || this.isAnOpenSquareBracket(character) || this.isAnOpenCurlyBrace(character)) {
				this.stack.push(character)
			} else if (this.isAClosingParenthesis(character)) {
				this.isAnOpenParenthesis(this.stack[this.stack.length - 1]) ? this.stack.pop() : this.stack.push(character)
			} else if (this.isAClosingSquareBracket(character)) {
				this.isAnOpenSquareBracket(this.stack[this.stack.length - 1]) ? this.stack.pop() : this.stack.push(character)
			} else if (this.isAClosingCurlyBrace(character)) {
				this.isAnOpenCurlyBrace(this.stack[this.stack.length - 1]) ? this.stack.pop() : this.stack.push(character)
			}	
		})
	}

	isAnOpenParenthesis(character) {
		return character === '(' 
	}

	isAnOpenSquareBracket(character) {
		return character === '['
	}

	isAnOpenCurlyBrace(character) {
		return character === '{'
	}

	isAClosingParenthesis(character) {
		return character === ')'
	}

	isAClosingSquareBracket(character) {
		return character === ']'
	}

	isAClosingCurlyBrace(character) {
		return character === '}'
	}
}

module.exports = ParenthesisChecker;