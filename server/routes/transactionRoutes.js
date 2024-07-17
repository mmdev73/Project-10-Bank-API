const express = require('express')
const router = express.Router()
const transactionController = require('../controllers/transactionController')
const tokenValidation = require('../middleware/tokenValidation')

router.post('/add',
  transactionController.addTransaction
)

router.post('/:accountId',
  tokenValidation.validateToken, 
  transactionController.getAllTransactions
)

router.put(
  '/:accountId/:transactionId',
  tokenValidation.validateToken,
  transactionController.updateTransaction
)

//router.post('/:accountId/:transactionId',
//  tokenValidation.validateToken,
//  transactionController.getTransactionById
//)
//


module.exports = router