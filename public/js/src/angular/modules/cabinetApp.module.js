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
import guidesSearchBigDefinition from '../components/guides-components/guides-search/guidesSearchBig.definition'

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


export default cabinetApp
