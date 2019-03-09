import lineItem from '../model';

function deleteLine(req, res) {
  const input = req.params;

  lineItem.remove({
    _id: input.id,
  }, (err, contact) => {
    if (err) res.send(err);

    res.json({
      status: 'success',
      message: 'line item deleted',
    });
  });
}

export default deleteLine;