import {module} from 'angular'
import 'angular-ui-router'
import cabinetRouter from '../router/cabinet.router'
import setClassNameFocus from '../directives/setClassNameFocus'

// Components
import cabinetNavigationDefintion from '../components/cabinet-components/cabinet-naviagation/cabinetnav.component'
import topmenuAuthDefinition from '../components/top-menu-auth/topmenuAuth.component'
import userMediaDefinition from '../components/user-media/userMedia.component.js'
import userGuestDefinition from '../components/user-guest/userGuest.component'
import userTraveSmallDefinition from '../components/user-travel/userTravelSmall.component'
import footerDefinition from '../components/footer-main/footer.definition'
import profileDefinition from '../components/user-profile/profile.component'
import userProfileInfoDefinition from '../components/user-profile-info/userProfileInfo.component'
import cabinetHomeComponent from '../components/cabinet-components/cabinet-home/cabinetHome.component'
import uploadPhotoComponent from '../components/upload-photo/uploadPhoto.component'
import searchGuideLightComponent from '../components/guides-components/guides-search-light/guidesSearchLight.component'
import guideCardDefinition from '../components/guides-components/guide-card/guideCard.component';
import guideBoardTitleDefinition from '../components/guides-components/guides-board-title/guidesBoardTitle.component';
import guidesSearchBigDefinition from '../components/guides-components/guides-search/guidesSearchBig.definition';
import topMenuAuthExternalDefinition from '../components/top-menu-auth-external/topMenuAuthExternal.component';
import messageHeaderDefinition from '../components/user-messages/message-header/messageHeader.component';
import messageChatComponent from '../components/user-messages/message-chat/messageChat.component';
import messageBlockComponent from '../components/user-messages/message-block/messageBlock.component';
import messageAuthListComponent from '../components/user-messages/message-auth-list/messageAuthList.component';
import guidesFilterDefinition from '../components/guides-components/guides-filter/guidesFilter.component';
import planTravelDefinition from '../components/cabinet-components/plan-travel/planTravel.component';
import planTravelFormDefinition from '../components/cabinet-components/plan-travel-form/planTravelForm.component';

// Services
import ServerRequests from '../factorys/server.requests'

// controllers
import cabinetSettingsCtrl from '../controllers/cabinetSettings.controller'

const cabinetApp = module('cabinetApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', cabinetRouter]);

module('cabinetApp')
  .controller('cabinetSettingsCtrl', cabinetSettingsCtrl);

module('cabinetApp')
  .factory('ServerRequests', ServerRequests);

module('cabinetApp')
  .directive('setClassNameFocus', setClassNameFocus)

module('cabinetApp')
  .component('cabinetNavigation', cabinetNavigationDefintion)
  .component('topMenuAuth', topmenuAuthDefinition)
  .component('userGuestComponent', userGuestDefinition)
  .component('userTravelSmallComponent', userTraveSmallDefinition)
  .component('footerComponent', footerDefinition)
  .component('profileComponent', profileDefinition)
  .component('userMediaComponent', userMediaDefinition)
  .component('userProfileInfoComponents', userProfileInfoDefinition)
  .component('cabinetHomeComponent', cabinetHomeComponent)
  .component('uploadPhotoComponent', uploadPhotoComponent)
  .component('searchGuideComponent', searchGuideLightComponent)
  .component('guideCardComponent', guideCardDefinition)
  .component('guideBoardTitleComponent', guideBoardTitleDefinition)
  .component('guidesSearchBigComponent', guidesSearchBigDefinition)
  .component('topMenuAuthExternalComponent', topMenuAuthExternalDefinition)
  .component('messageHeaderComponent', messageHeaderDefinition)
  .component('messageChatComponent', messageChatComponent)
  .component('messageBlockComponent', messageBlockComponent)
  .component('messageAuthListComponent', messageAuthListComponent)
  .component('guidesFilterComponent', guidesFilterDefinition)
  .component('planTravelComponent', planTravelDefinition)
  .component('planTravelFormComponent', planTravelFormDefinition)

export default cabinetApp
