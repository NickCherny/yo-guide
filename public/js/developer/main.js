import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './containers/App';

import configStore from './store/configStore';

const store = configStore();


// include EventEmitter в глобальный оъект браузера
const EventEmitter = require('last-eventemitter');
window.ee = new EventEmitter();

let news = [
  {
    author: 'Nick',
    text: 'Тут какой та текст, много текста',
    bigText: '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\
    555555555555555555555555555555555555555555555\
    5%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'
  },
  {
    author: 'Пётр',
    text: 'Тут тоже какой не какой текст',
    bigText: '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'
  }
];

let AddNews = React.createClass({
  getInitialState: function(){
    return {
      invalid: true
    }
  },
  sendNews: function(){
    let author = ReactDOM.findDOMNode(this.refs.author);
    let text = ReactDOM.findDOMNode(this.refs.text);
    let item = [{
      author: author.value,
      text: text.value,
      bigText: '...'
    }];

    // Генерируем события новая новость, и вкидываем в обработчик новость
    window.ee.emit('News.add', item);
    author.value = '';
    text.value = '';
    this.setState({
      invalid: true
    })
  },
  componentDidMount: function(){
    ReactDOM.findDOMNode(this.refs.author).focus();
  },
  checkValidForm: function(){
    if(ReactDOM.findDOMNode(this.refs.text).value !== '' && ReactDOM.findDOMNode(this.refs.author).value !== ''){
      this.setState({
        invalid: false
      })
    }
  },
  render: function(){
    return (
      <div>
        <label htmlFor="author">
          <input type="text" name="author" id="author" defaultValue="" placeholder="Имя" ref="author" onChange={this.checkValidForm}/>
        </label>
        <label htmlFor="text">
          <textarea name="text" id="text" cols="30" rows="10" ref="text" placeholder="Текст статьи" defaultValue="" onChange={this.checkValidForm}></textarea>
        </label>
        <div>
          <button type="button" onClick={this.sendNews} disabled={this.state.invalid}>Опубликовать</button>
        </div>
      </div>
    )
  }
});
let Article = React.createClass({
  getInitialState: function(){
    return {
      visible: false
    }
  },
  readMore: function(e){
    e.preventDefault();
    this.setState({visible: true}, function(){
      console.log('Вызывается после того как состояние изменилось')
    })
  },
  render: function(){
    let author = this.props.data.author;
    let text = this.props.data.text;
    let bigText = this.props.data.bigText;
    let visible = this.state.visible;
    return (
      <div className="article">
        <p className="article_item news__author">{author}</p>
        <p className="article_item news__text">{text}</p>
        <a href="#" onClick={this.readMore}>Подробнее</a>
        <div className={`article__item news__bigText ${visible ? 'show' : 'hidden'}`}>{bigText}</div>
      </div>
    )
  }
});
let News = React.createClass({
  render: function(){
    let data = this.props.data;
    let newsTemplates;
    if(data.length > 0){
      newsTemplates = data.map((item, i)=>{
        return (
          <div key={i}>
            <Article data={item}/>
          </div>
        )
      })
    }else {
      newsTemplates = <p>Новых новостей нету!</p>
    }


    return (
      <div>
        <h2 className={data.length > 0 ? '' : 'none'}>Всего новостей: {data.length}</h2>
        { newsTemplates }
      </div>
    )

  }
});

// let App = React.createClass({
//   getInitialState: function(){
//     return {
//       news: news
//     }
//   },
//   componentDidMount: function(){
//     let self = this;
//
//     // Отслеживаем событие сгенерированное при добовлении новой новости
//     window.ee.addListener('News.add', function(item){
//       let nextNews = item.concat(self.state.news);
//       self.setState({news: nextNews});
//     })
//   },
//   componentWillUnmount: function(){
//
//     // Удаляем слушателя события новая новость, после удаления компонента
//     window.ee.removeListener('News.add');
//   },
//   render: function(){
//     console.log('render');
//     return(
//       <div className="app">
//         <AddNews/>
//         <h3>Новости</h3>
//         <News data={this.state.news}/>
//       </div>
//     )
//   }
// });

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app-container')
);
