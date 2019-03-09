import lineItem from '../model';

function deleteLine(req, res) {
  const itemRef = req.params;

  lineItem.remove({
    _id: itemRef.id,
  }, (err, item) => {
    if (err) res.send(err);

    res.json({
      status: 'success',
      message: 'line item deleted',
    });
  });
}

export default deleteLine;