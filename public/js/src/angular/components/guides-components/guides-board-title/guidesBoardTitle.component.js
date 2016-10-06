import GuidesBoardTitleCtrl from './guidesBoardTitle.controller';
const guidesBoardTitleDefinition = {
  controller: GuidesBoardTitleCtrl,
  controllerAs: 'gt',
  bindings: {
    titleInfo: '<'
  },
  template: `
  <div class="wrapper">
    <h1 class="title title_big title__guide-board">
      <span class="text_lead">{{gt.guidesLen}}</span> гидов, готовы открыть для вас локацию
    </h1>
  </div>
  `
};
export default guidesBoardTitleDefinition;
