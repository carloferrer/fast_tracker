import lineItem from '../model';
import now from '../utils/now';

function createLine(req, res) {
  const item = new lineItem();
  const input = req.body;
  const present = now();

  item.date = input.date || present.date;
  item.time = input.time || present.time;
  item.task = input.task;
  item.detail = input.detail;

  item.save(err => {
    res.json({
      message: 'New line item created!',
      data: item
    });
  });
}

export default createLine;