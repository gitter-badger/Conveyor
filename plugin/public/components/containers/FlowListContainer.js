import * as React from 'react';
import {Container} from 'flux/utils';

import {FlowListView} from '../views/FlowListView';
import {flowStore} from '../../stores/flow-store';
import {appStore} from '../../stores/app-store';

class FlowList extends React.Component {
    static getStores() {
        return [flowStore];
    }

    static calculateState() {
        return {
            flowState: flowStore.getState(),
            appState: appStore.getState()
        };
    }

    render() {
        return <div>

            <FlowListView flows={this.state.flowState.flows} basePath={this.state.appState.basePath}/>
        </div>;
    }
}

export const FlowListContainer = Container.create(FlowList);
