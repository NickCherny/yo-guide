class Main{
  load(req, res, next){
    let self = this;
    if(req.session.user){
      console.log('Главная для залогиненного пользователя')
    }else {
      console.dir(req.ip);
      res.render('pages/mainPage', {title: 'Гиды, туры по всему миру'}, function(err, html){
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
