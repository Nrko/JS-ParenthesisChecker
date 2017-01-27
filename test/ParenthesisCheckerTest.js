import chai from 'chai'
import ParenthesisChecker from '../src/ParenthesisChecker'

describe('Parenthesis Checker Test Suite', () => {
	it('should throw an exception if input is empty', () => {
		chai.expect(() => (new ParenthesisChecker).perform('')).to.throw('No input provided')
	})

	it('should throw an exception if input is not a string', () => {
		chai.expect(() => (new ParenthesisChecker).perform({})).to.throw('Invalid input type')
	})

	describe('Balanced Parethensis Tests', () => {
		it('should return YES for input = "()"', () => {
			chai.expect((new ParenthesisChecker).perform('()')).to.equal('YES')
		})

		it('should return YES for input = "() [] () ([]()[])"', () => {
			chai.expect((new ParenthesisChecker).perform('() [] () ([]()[])')).to.equal('YES')
		})

		it('should return YES for input = "{}[]()"', () => {
			chai.expect((new ParenthesisChecker).perform('{}[]()')).to.equal('YES')
		})
	})

	describe('Unbalanced Parenthesis Tests', () => {
		it('should return NO for input = "(("', () => {
			chai.expect((new ParenthesisChecker).perform('((')).to.equal('NO')
		})

		it('should return NO for input = "( (] ([)]"', () => {
			chai.expect((new ParenthesisChecker).perform('( (] ([)]')).to.equal('NO')
		})

		it('should return NO for input = "{{}]}"', () => {
			chai.expect((new ParenthesisChecker).perform('{{}]}')).to.equal('NO')
		})

		it('should return NO for input = "{{}"', () => {
			chai.expect((new ParenthesisChecker).perform('{{}')).to.equal('NO')
		})

		it('should return NO for input = "[}]"', () => {
			chai.expect((new ParenthesisChecker).perform('[}]')).to.equal('NO')
		})
	})
})