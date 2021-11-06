
/**
 * @description function to check the type of account
 * @author SandeepThakare
 * 
 * @param {[Array]} accountBalanceHistory 
 * @returns type of account
 */

module.exports.accountTypeChecker = (accountBalanceHistory) => {
	let currentDiff = 0;
	let previousDiff = 0;
	let result = 'B';
	const regex = /^-?\d*\.?\d*$/;

	if (Array.isArray(accountBalanceHistory) && accountBalanceHistory.length > 2) {

		/**
		 * As per the given details I am considering the array we received is in sorted format
		 * But if array is noty sorted then we need to uncomment below line to make it sorted
		 */
		// accountBalanceHistory = accountBalanceHistory.sort((obj1, obj2) => obj2.monthNumber - obj1.monthNumber);

		for (let index = accountBalanceHistory.length - 1; index > 1; index--) {
			const { account: currentBalance } = accountBalanceHistory[index];
			const { account: previousBalance } = accountBalanceHistory[index - 1];
			const { account: previous2Balance } = accountBalanceHistory[index - 2];
			const currentAmount = currentBalance.balance?.amount;
			const previousAmount = previousBalance.balance?.amount;
			const previous2Amount = previous2Balance.balance?.amount;

			if (regex.test(currentAmount) && regex.test(previousAmount) && regex.test(previous2Amount)) {
				currentDiff = currentAmount - previousAmount;
				previousDiff = previousAmount - previous2Amount;

				result = currentDiff !== previousDiff ? 'A' : result;
			} else {
				return 'Bad data';
			}
		}

		return result;
	} else {
		console.log('Balance check --> Difference --> Can not calulate difference for initial transaction or non array data');
		return 'Not enough data';
	}
};

/**
 * @description function to check the type of account
 * @author SandeepThakare
 * 
 * @param {[Array]} accountBalanceHistory 
 * @returns type of account
 */
module.exports.accountTypeCheckerAnotherApproach = (accountBalanceHistory) => {
	let diffArray = [];
	const regex = /^-?\d*\.?\d*$/;

	if (Array.isArray(accountBalanceHistory) && accountBalanceHistory.length > 1) {

		/**
		 * As per the given details I am considering the array we received is in sorted format
		 * But if array is noty sorted then we need to uncomment below line to make it sorted
		 */
		// accountBalanceHistory = accountBalanceHistory.sort((obj1, obj2) => obj2.monthNumber - obj1.monthNumber);

		for (let index = accountBalanceHistory.length - 1; index > 0; index--) {
			const { account: currentBalance } = accountBalanceHistory[index];
			const { account: previousBalance } = accountBalanceHistory[index - 1];
			const currentAmount = currentBalance.balance?.amount;
			const previousAmount = previousBalance.balance?.amount;

			if (regex.test(currentAmount) && regex.test(previousAmount)) {
				const currentDiff = currentAmount - previousAmount;
				diffArray.push(currentDiff);
			} else {
				return 'Bad data';
			}
		}

		const uniqueElement = [...new Set(diffArray)];
		return uniqueElement.length > 1 ? 'A' : 'B';
	} else {
		console.log('Balance check --> Difference --> Can not calulate difference for initial transaction or non array data');
		return 'Not enough data';
	}
};
