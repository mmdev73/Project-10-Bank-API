const axios = require('axios')
const addTransactionApi = 'http://localhost:3001/api/v1/transactions/add'
const transactionController = require('../controllers/transactionController')
const Transaction = require('../database/models/transactionModel')

const mongoose = require('mongoose');
const testConnectionAndDeletion = async () => {
  const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'
  try {
    await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected');
    
    // Test de suppression
    const result = await Transaction.deleteMany();
    console.log(`${result.deletedCount} transactions were deleted`);
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    mongoose.connection.close();
  }
};
// Uncomment for delete all transactions.
//testConnectionAndDeletion();

/////-------------------------------------------------------/////

  const dateObj            = '2024-07-13'
  const dateObjMinus5Days  = '2024-07-8'
  const dateObjMinus8Days  = '2024-07-5'
  const dateObjMinus9Days  = '2024-07-4'
  const dateObjMinus10Days = '2024-07-3'
  const dateObjMinus15Days = '2024-06-28'
  const dateObjMinus20Days = '2024-06-23'

  // Créez 15 nouvelles transactions
  const transactions = [
    {
      id: '1',
      accountId: '8349',
      amount: 100.00,
      balance: 1000.00,
      description: 'Transaction 1',
      type: 'Electronic',
      date: dateObjMinus20Days,
      categorie: 'Payment',
      note: 'Note 1',
    },
    {
      id: '2',
      accountId: '8349',
      amount: 45.25,
      balance: 1100.00,
      description: 'Transaction 2',
      type: 'Electronic',
      date: dateObjMinus15Days,
      categorie: 'Payment',
      note: 'Note 2',
    }, 
    {
      id: '3',
      accountId: '8349',
      amount: 50.00,
      balance: 1145.25,
      description: 'Transaction 3',
      type: 'Electronic',
      date: dateObjMinus10Days,
      categorie: 'Payment',
      note: 'Note 3',
    },
    {
      id: '4',
      accountId: '8349',
      amount: 5.75,
      balance: 1195.25,
      description: 'Transaction 4',
      type: 'Physic',
      date: dateObjMinus9Days,
      categorie: 'Payment',
      note: 'Note 4',
    },
    {
      id: '5',
      accountId: '8349',
      amount: 10.00,
      balance: 1200.00,
      description: 'Transaction 5',
      type: 'Electronic',
      date: dateObjMinus8Days,
      categorie: 'Payment',
      note: 'Note 5',
    },
    {
      id: '6',
      accountId: '8349',
      amount: 600,
      balance: 1210.00,
      description: 'Transaction 6',
      type: 'Physic',
      date: dateObjMinus5Days,
      categorie: 'Payment',
      note: 'Note 6',
    },
    {
      id: '7',
      accountId: '8349',
      amount: 700,
      balance: 1810.00,
      description: 'Transaction 7',
      type: 'Electronic',
      date: dateObj,
      categorie: 'Payment',
      note: 'Note 7',
    },
    {
      id: '8',
      accountId: '6712',
      amount: 10000.00,
      balance: 10000.00,
      description: 'Transaction 8',
      type: 'Electronic',
      date: dateObjMinus15Days,
      categorie: 'Credit', 
      note: 'Note 8',
    },
    {
      id: '9',
      accountId: '6712',
      amount: 550.50,
      balance: 10550.50,
      description: 'Transaction 9',
      type: 'Electronic',
      date: dateObjMinus10Days,
      categorie: 'Credit',
      note: 'Note 9',
    },
    {
      id: '10',
      accountId: '6712',
      amount: 49.50,
      balance: 10600.00,
      description: 'Transaction 10',
      type: 'Electronic',
      date: dateObjMinus8Days,
      categorie: 'Credit',
      note: 'Note 10',
    },
    {
      id: '11',
      accountId: '6712',
      amount: 1000.00,
      balance: 11600.00,
      description: 'Transaction 11',
      type: 'Electronic',
      date: dateObjMinus5Days,
      categorie: 'Credit',
      note: 'Note 11',
    },
    {
      id: '12',
      accountId: '5201',
      amount: 50.25,
      balance: 5000,
      description: 'Transaction 12',
      type: 'Debit',
      date: dateObjMinus8Days,
      categorie: 'Food',
      note: 'Note 12',
    },
    {
      id: '13',
      accountId: '5201',
      amount: 45.00,
      balance: 4955.00,
      description: 'Transaction 13',
      type: 'Credit',
      date: dateObjMinus5Days,
      categorie: 'Technology',
      note: 'Note 13',
    },
    {
      id: '14',
      accountId: '5201',
      amount: 125.42,
      balance: 4829.58,
      description: 'Transaction 14',
      type: 'Debit',
      date: dateObj,
      categorie: 'Food',
      note: 'Note 14',
    },
  ];

  transactions.forEach((transaction) => {
    axios.post(addTransactionApi, transaction)
      .catch(error => console.log(error))
  })
