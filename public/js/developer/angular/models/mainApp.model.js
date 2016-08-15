import angular, {module} from 'angular';
import topmenuDefinition from '../components/top-menu/topmenu.component';

const mainApp = module('mainApp', [])
  .component('topMenu', topmenuDefinition);


export default mainApp;
