class User{
  loginUser(req, res, next){
    if(req.body.email && req.body.password){
      res.redirect('/cabinet');
    }
  };
  logoutUser(req, res, next){
    req.logout();
    res.redirect('/');
  };
  registrationUser(req, res, next){
    res.render('pages/registration', {title: 'Регистрация профиля'}, function(err, html){
      if(err){
        console.error(err)
      }else {
        res.send(html);
        res.end();
      }
    })
  };
}
module.exports = User;
