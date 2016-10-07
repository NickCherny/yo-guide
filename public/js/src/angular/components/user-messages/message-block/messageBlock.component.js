import MessageBlockCtrl from './messageBlock.controller';
const messageBlockDefinition = {
  controller: MessageBlockCtrl,
  controllerAs: 'msBlock',
  bindings: {
    messagesInfo: '<',
    userId: '<'
  },
  template: `
  <section class="cabinet-body">
    <div class="center-b">
      <div class="row row-fix">
  
        <div class="large-4 small-12 columns coll-fix-right">
          <message-auth-list-component auth-list="msBlock.messages"></message-auth-list-component>
        </div>
  
        <div class="large-8 small-12 columns">
          <div class="box">
            
            <message-header-component></message-header-component>
            
            <message-chat-component></message-chat-component>
  
            <div class="wrapper wrapper__message-panel">
              <div>
                <div class="title title__message-panel">Написать сообщение</div>
  
                <textarea name="" cols="30" rows="10" class="textarea"></textarea>
  
                <div class="wrapper">
                  <button class="btn btn__send-message">Отправить</button>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    </div>
  </section>
  `
};
export default messageBlockDefinition;
