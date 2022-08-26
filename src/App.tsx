import * as React from 'react';
import './styles/App.scss';
import DashboardView from './components/DashboardView';
import DashboardsList from './components/DashboardsList';

export default class App extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            token: 'fbb62bb2d4e60504e812ac86d3788def0ac492158b71998244d265989acab8cc',
            serverUrl: 'http://121.241.115.206:51980',
            dashboardID: '93bc57c0-9cc9-44c7-a3b0-dd4757411f93',
            docTitle: 'Retail Sales Analysis',
            documentType: 'dbd',
            selectedScenario: 'column-9'
        };

        this.selectedScenario = this.selectedScenario.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    selectedScenario = (scenario) => {
        this.setState({ selectedScenario: scenario, selectedStore: null });
    }

    signIn = (serverUrl, token) => {
        this.setState({ token: token, serverUrl: serverUrl });
    }

    render() {
        const { selectedScenario, dashboardID, token, serverUrl } = this.state;

        const Application = (
            <div className="App">
                <div className="boxShadow">
                    <DashboardsList selectedScenario={this.selectedScenario} />
                </div>
                <DashboardView selectedScenario={selectedScenario} dashboardId={dashboardID} token={token} serverUrl={serverUrl} />
            </div>
        );
        return Application;
    }
}
