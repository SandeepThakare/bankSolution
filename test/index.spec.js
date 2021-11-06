/**
 * NPM package import
 */
const chai = require('chai');
const expect = chai.expect;

/**
 * Internal package import
 */
const { accountTypeChecker } = require('../index');

/**
 * @description Test case module for Bank check function
 * @author SandeepThakare
 * 
 * @returns test cases result
 */
describe('Bank Check', () => {
	describe('Bank check function', () => {
		it('Should return B', () => {
			const accountBalanceHistory = [
				{
					monthNumber: 0, // current month
					account: {
						balance: { amount: 0 },
					},
				},
				{
					monthNumber: 1, // last month
					account: {
						balance: { amount: 100 },
					},
				},
				{
					monthNumber: 2, // two months ago
					account: {
						balance: { amount: 200 },
					},
				}
			];
			const result = accountTypeChecker(accountBalanceHistory);
			expect(result).to.be.equals('B');
		});

		it('Should return A', () => {
			const accountBalanceHistory = [
				{
					monthNumber: 0, // current month
					account: {
						balance: { amount: 100 },
					},
				},
				{
					monthNumber: 1, // last month
					account: {
						balance: { amount: 100 },
					},
				},
				{
					monthNumber: 2, // two months ago
					account: {
						balance: { amount: 200 },
					},
				}
			];
			const result = accountTypeChecker(accountBalanceHistory);
			expect(result).to.be.equals('A');
		});

		it('Should return Bad data', () => {
			const accountBalanceHistory = [
				{
					monthNumber: 0, // current month
					account: {
						balance: { amount: '100jhjkh' },
					},
				},
				{
					monthNumber: 1, // last month
					account: {
						balance: { amount: 100 },
					},
				},
				{
					monthNumber: 2, // two months ago
					account: {
						balance: { amount: 200 },
					},
				}
			];
			const result = accountTypeChecker(accountBalanceHistory);
			expect(result).to.be.equals('Bad data');
		});

		it('Should return Not enough data', () => {
			const accountBalanceHistory = [
				{
					monthNumber: 0, // last month
					account: {
						balance: { amount: 100 },
					},
				},
				{
					monthNumber: 1, // two months ago
					account: {
						balance: { amount: 200 },
					},
				}
			];
			const result = accountTypeChecker(accountBalanceHistory);
			expect(result).to.be.equals('Not enough data');
		});

		it('Should return Not enough data', () => {
			const accountBalanceHistory = 'Passing string for validation';
			const result = accountTypeChecker(accountBalanceHistory);
			expect(result).to.be.equals('Not enough data');
		});
	});

	describe('Bank check another approach', () => {
		it('Should return B', () => {
			const accountBalanceHistory = [
				{
					monthNumber: 0, // current month
					account: {
						balance: { amount: 0 },
					},
				},
				{
					monthNumber: 1, // last month
					account: {
						balance: { amount: 100 },
					},
				},
				{
					monthNumber: 2, // two months ago
					account: {
						balance: { amount: 200 },
					},
				}
			];
			const result = accountTypeChecker(accountBalanceHistory);
			expect(result).to.be.equals('B');
		});

		it('Should return A', () => {
			const accountBalanceHistory = [
				{
					monthNumber: 0, // current month
					account: {
						balance: { amount: 100 },
					},
				},
				{
					monthNumber: 1, // last month
					account: {
						balance: { amount: 100 },
					},
				},
				{
					monthNumber: 2, // two months ago
					account: {
						balance: { amount: 200 },
					},
				}
			];
			const result = accountTypeChecker(accountBalanceHistory);
			expect(result).to.be.equals('A');
		});

		it('Should return Bad data', () => {
			const accountBalanceHistory = [
				{
					monthNumber: 0, // current month
					account: {
						balance: { amount: '100jhjkh' },
					},
				},
				{
					monthNumber: 1, // last month
					account: {
						balance: { amount: 100 },
					},
				},
				{
					monthNumber: 2, // two months ago
					account: {
						balance: { amount: 200 },
					},
				}
			];
			const result = accountTypeChecker(accountBalanceHistory);
			expect(result).to.be.equals('Bad data');
		});

		it('Should return Not enough data', () => {
			const accountBalanceHistory = [
				{
					monthNumber: 0, // last month
					account: {
						balance: { amount: 100 },
					},
				},
				{
					monthNumber: 1, // two months ago
					account: {
						balance: { amount: 200 },
					},
				}
			];
			const result = accountTypeChecker(accountBalanceHistory);
			expect(result).to.be.equals('Not enough data');
		});

		it('Should return Not enough data', () => {
			const accountBalanceHistory = 'Passing string for validation';
			const result = accountTypeChecker(accountBalanceHistory);
			expect(result).to.be.equals('Not enough data');
		});
	});
});