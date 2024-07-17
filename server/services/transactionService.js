const Transaction = require('../database/models/transactionModel')

module.exports.addTransaction = async (serviceData) => {
  try {
    const newTransaction = new Transaction({
      accountId: serviceData.accountId,
      amount: serviceData.amount,
      balance: serviceData.balance,
      description: serviceData.description,
      type: serviceData.type,
      date: serviceData.date,
      categorie: serviceData.categorie,
      note: serviceData.note
    })
    let result = await newTransaction.save()
    return result
  } catch (error) {
    console.error('Error in transactionService.js', error)
    throw new Error(error)
  }
}

module.exports.getAllTransactions = async (accountId) => {
  try {
    const transactions = await Transaction.find( { accountId: accountId } )
    return transactions
  } catch (error) {
    console.error('Error in transactionService.js', error)
    throw new Error(error)
  }
}

module.exports.updateTransaction = async (accountId, transactionId, serviceData) => {
  console.log(accountId, transactionId, serviceData)
  try {
    const updatedTransaction = await Transaction.findOneAndUpdate(
      { accountId: accountId, _id: transactionId },
      serviceData,
      { new: true }
    )
    return updatedTransaction
  } catch (error) {
    console.error('Error in transactionService.js', error)
    throw new Error(error)
  }
}

module.exports.deleteAllTransactions = async () => {
  try {
    const result = await Transaction.deleteMany({})
    return {
      success: true,
      message: `${result.deletedCount} transactions were deleted`
    }
  } catch (error) {
    console.error('Error in transactionService.js', error)
    throw new Error(error)
  }
}
