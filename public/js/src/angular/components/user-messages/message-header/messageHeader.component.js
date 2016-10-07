import MessageHeaderCtrl from './messageHeader.controller';
const messageHeaderDefinition = {
  controller: MessageHeaderCtrl,
  controllerAs: 'msHeader',
  bindings: {
    messageAuth: '<'
  },
  template: `
  <h2 class="title title__messages">{{msHeader.messageAuth}}</h2>
  `
};
export default messageHeaderDefinition;
