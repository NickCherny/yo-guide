import MessageChatCtrl from './messageChat.controller';
const messageChatDefinition = {
  controller: MessageChatCtrl,
  controllerAs: 'msChat',
  bindings: {
    chatContent: '<'
  },
  template: `
  <div class="wrapper wrapper__messages">
    <ul>
      <li class="list-item item-message-box" ng-repeat="test in [1,2,3]">
        <div class="item-message__media">
          <a href="#" class="link item-message__auth-media">
            <img src="###" alt="" class="images">
          </a>
        </div>
        <div class="item-message__content">
          <div class="title title__item-message">Lumina Records</div>
          <div class="text text__item-message">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquid aperiam at commodi cum cumque dolore dolores, maiores minus obcaecati omnis quaerat quidem quis rem saepe sunt unde vero?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque debitis esse eum, neque optio quae quas reiciendis sunt voluptatum? At dignissimos dolores facilis officiis porro quas tempora ullam veniam.
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
  `
};
export default messageChatDefinition;
