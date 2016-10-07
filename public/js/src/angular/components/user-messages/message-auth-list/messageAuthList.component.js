import MessageAuthListCtrl from './messageAuthList.controller';
const messageAuthListDefinition = {
  controller: MessageAuthListCtrl,
  controllerAs: 'authList',
  bindings: {
    authList: '<'
  },
  template: `
  <div class="box">
    <h2 class="title title__messages">Сообщения</h2>
    <div class="btn btn__new-message">Новое сообщение</div>
    <div class="wrapper wrapper__messages-contact">
      <ul class="ul">
        <li class="list-item messages-contact__item" ng-repeat="item in authList.authList">
          <div>
            <a href="#" class="link">
              <img ng-src="{{item.auth.photo}}" ng-alt="{{item.auth.fullName}}" class="images">
            </a>
          </div>
          <div class="wrapper">
            <h3 class="messages-contact__name">{{item.auth.fullName}}</h3>
            <div class="messages-contact__message_small">{{item.lastMessage.text}}</div>
            <div class="messages-contact__message-time">{{item.lastMessage.date}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  `
};
export default messageAuthListDefinition;
