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
      Было найдено <span class="text_lead">{{ gt.titleInfo }}</span>
    </h1>
  </div>
  `
};
export default guidesBoardTitleDefinition;
