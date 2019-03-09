import mongoose from 'mongoose';

/*
** Schema:
** index | date | time | task | detail
*/

const schema = mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: false,
  }
});

const lineItem = mongoose.model('line-item', schema);

lineItem.get = (cb, limit) => lineItem.find(cb).limit(limit);

export default lineItem;