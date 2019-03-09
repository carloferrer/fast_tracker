import lineItem from '../model';

function updateLine(req, res) {
  const itemRef = req.params;
  const input = req.body;

  lineItem.findById(itemRef.id, (err, item) => {
    if (err) res.send(err);

    item.date = input.date || item.date;
    item.time = input.time || item.time;
    item.task = input.task || item.task;
    item.detail = input.detail || item.detail;

    item.save(err => {
      if (err) res.json(err);

      res.json({
        message: 'Line item updated!',
        data: item,
      });
    });
  });
}

export default updateLine;