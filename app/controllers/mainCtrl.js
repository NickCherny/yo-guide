class Main{
  load(req, res, next){
    let self = this;
    console.log(req.session.passport.username);
    if(req.session.passport.username){
      console.log('Главная для залогиненного пользователя')
      res.redirect('/cabinet');
    }else {
      console.dir(req.ip);
      res.render('pages/mainPage', {
        title: 'Гиды, туры по всему миру',
        user: req.session.passport
      },
        function(err, html){
        if(err){
          console.error(err)
        }else {
          res.send(html);
          res.end();
        }
      })
    }
  };
}
module.exports = Main;
