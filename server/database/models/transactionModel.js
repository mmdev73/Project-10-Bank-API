const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema(
  {
    id: String,
    accountId: String,
    amount: Number,
    balance: Number,
    description: String,
    type: String,
    date: Date,
    categorie: String,
    note: String
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, options) => {
        ret.id = ret._id
        delete ret.__v
        delete ret._id
        return ret
      }
    }
  }
)

module.exports = mongoose.model('Transaction', transactionSchema)