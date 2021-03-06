import GuidesBoardCtrl from './guidesBoard.controller';
const guidesBoardDefinition = {
  controller: GuidesBoardCtrl,
  controllerAs: 'G',
  bindings: {
    guidesLocation: '<'
  },
  template: `
  <section class="wrapper wrapper__guide">
    <!--guides search filter-->
    <div class="header header__guides-board" ng-style="{'background-image':'url(' + G.guides[0].location.photo + ')'}">
      <guides-search-big-component></guides-search-big-component>
    </div>
    <div class="wrapper wrapper__guide-board">
      <!--guides-header-->
      <div ng-if="G.guides[0].length !== 0">
        <guide-board-title-component title-info="G.guides.length"></guide-board-title-component>
      </div>
      <article class="container__guides-board">
        <div class="row row-fix">
          <guide-card-component guides-info="G.guides">Loading...</guide-card-component>
        </div>
      </article>
    </div>
  </section>
  `
};
export default guidesBoardDefinition
