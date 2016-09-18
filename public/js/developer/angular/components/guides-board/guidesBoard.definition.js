const guidesBoardDefinition = {
  template:`
    <a href="#" class="guide-board__item-link">
      <div class="wrapper wrapper__guide-board-item">
        <div class="guide-board__media">
          <img src="/images/users/01/profile/user_profile.png" alt="" class="images images__guide-board">
        </div>
        <div class="guide-board__info">
          <div class="flex-element guide-board__info-item">
            <h2 class="title title__guide-info">Пётр Петров</h2>
            <h3 class="title title__guide-location">Минск, Беларусь</h3>
          </div>
          <div class="flex-element guide-board__info-item">
            <div class="decor">
              <svg fill="#000000" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            </div>
            <div class="text text__guide">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias architecto cum debitis deleniti doloribus, est expedita facere fuga illum nobis numquam obcaecati quia quod repellat repellendus repudiandae, saepe, voluptatibus.
            </div>
            <div class="decor">
              <svg fill="#000000" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            </div>
          </div>
          <div class="flex-element guide-board__info-item">
            <div class="guide-info__reviews">
              <div class="title title_small">Гости</div>
              <div class="text_lead">5</div>
            </div>
            <div class="guide-info__chart">
              <div class="title title_small">Рейтинг</div>
              <div class="guide-info__chart-result">
                <span ng-repeat="star in [1,2,4]">
                  <svg viewBox="0 0 18 18" class="star">
                      <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
                      <path d="M0 0h18v18H0z" fill="none"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  `
};
export default guidesBoardDefinition;
