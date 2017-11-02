import { uiModules } from 'ui/modules';

import { hashHistory as browserHistory } from 'react-router';

const app = uiModules.get('apps/rhythm');

app.service('$history', () => browserHistory);

