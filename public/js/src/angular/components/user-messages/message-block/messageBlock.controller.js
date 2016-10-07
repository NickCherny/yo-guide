class MessageBlockCtrl {
  constructor () {
    this.userId
    this.messages = [{
      auth: {
        id: '1',
        fullName: 'Коля Чёрный',
        photo: '/images/users/photoProfileDefault.png'
      },
      lastMessage: {
        text: 'fffffffffffs fffffffs sss fsfsf sss fsfsf fsfs sss',
        date: ''
      }
    },{
      auth: {
        id: '3',
        fullName: 'Миша Белов',
        photo: '/images/users/photoProfileDefault.png'
      },
      lastMessage: {
        text: 'sss fsfsf sss fsfsf fsfs sss',
        date: ''
      }
    },{
      auth: {
        id: '3',
        fullName: 'Ира Ферз',
        photo: '/images/users/photoProfileDefault.png'
      },
      lastMessage: {
        text: 'fffffffffffs fffffffs sss fsfsf sss fsfsf fsfs sss',
        date: ''
      }
    }]
  }
}
export default MessageBlockCtrl;
