module.exports = {
  ctrlError: function(err, req, res, status, redirect){
    console.error(err);
    res.status(status);
    res.redirect(redirect);
    res.end();
  }
};
