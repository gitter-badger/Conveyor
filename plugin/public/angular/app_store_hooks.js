import { uiModules } from 'ui/modules';

import { changeLocation } from './change_location';
import { AppActions } from '../actions/app-actions';
import { appStore } from '../stores/app-store';

const app = uiModules.get('apps/rhythm');
app.service('$appStoreHooks', ($location, $rootScope, kbnVersion, basePath) => {
  appStore.changeLocation = (appState, action) => changeLocation(appState, action, $location, $rootScope);

  AppActions.setKbnVersion(kbnVersion);
  AppActions.setBasePath(basePath);
});
