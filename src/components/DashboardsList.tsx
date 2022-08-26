import * as React from "react";
import "../styles/DashboardsList.scss";

export default class DashboardsList extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            scenariosList: [{ name: "column-1" }, { name: "column-3" }, { name: "column-5" }, { name: "column-6" }, { name: "column-9" }, , { name: "column-10" }],
            selectedScenario: "column-9"
        };
    }

    onScenarioClick = (sceName: string,) => {
        this.setState({ selectedScenario: sceName });
        this.props.selectedScenario(sceName);
    }

    public render() {
        const { scenariosList } = this.state;

        return (
            <div className="dashboardsList">
                <div className="topBar">
                    <img className="logoImg" src="/images/Sales_Store_Logo.png" alt="logo" />
                </div>
                <div className="scenariosList">
                    <h3>Scenarios</h3>
                    <ul className="list-group list-group-flush">
                        {scenariosList.map((scenario, index) => (
                            <li key={index} className="list-group-item" onClick={() => this.onScenarioClick(scenario.name)}>
                                <h3 title={scenario.name}>{scenario.name}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
