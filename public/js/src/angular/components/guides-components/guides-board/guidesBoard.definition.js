import GuidesBoardCtrl from './guidesBoard.controller';
const guidesBoardDefinition = {
  controller: GuidesBoardCtrl,
  controllerAs: 'G',
  template: `
  <section class="wrapper wrapper__guide">
    <!--guides search filter-->
    <div class="wrapper wrapper__guide-board">
      <!--guides-header-->
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
