const transactionService = require('../services/transactionService')


module.exports.addTransaction = async (req, res) => {
  let response = {}
  try {
    const responseFromService = await transactionService.addTransaction(req.body)
    response.status = 200
    response.message = 'Successfully added transaction'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in transactionController.js')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

module.exports.getAllTransactions = async (req, res) => {
  let response = {}
  try {
    const accountId = req.params.accountId;
    const responseFromService = await transactionService.getAllTransactions(accountId)
    response.status = 200
    response.message = 'Successfully got all transactions'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in transactionController.js')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

module.exports.deleteAllTransactions = async (req, res) => {
  try {
    const responseFromService = await transactionService.deleteAllTransactions()
    console.log(responseFromService)
  } catch (error) {
    console.log('Error in transactionController.js')
  } 
}