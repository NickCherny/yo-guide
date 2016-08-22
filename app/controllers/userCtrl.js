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
    if(req.body.email && req.body.password){
      console.log(req.body.firstName, req.body.lastName, req.body.email, req.body.password)
      res.redirect('/');
    }else {
      res.render('pages/registration', {title: 'Регистрация профиля'}, function(err, html){
        if(err){
          console.error(err)
        }else {
          res.send(html);
          res.end();
        }
      })
    }
  };
  getUserProfile(req, res, next){
    console.log(req.params.id);
    res.redirect('/cabinet');
  }
}
module.exports = User;
