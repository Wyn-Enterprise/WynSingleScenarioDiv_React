import * as React from 'react';
import './styles/App.scss';
import DashboardView from './components/DashboardView';
import DashboardsList from './components/DashboardsList';

export default class App extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            token: 'dea83533c9bd2a7f941c0483afeb1962293cb00c895afb05bfb43cde977e0757',
            serverUrl: 'https://wyn-demo.grapecity.com/',
            dashboardID: 'bf8eb401-4a29-4ccf-8b8b-e4d6213ef779',
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
