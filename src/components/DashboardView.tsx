import * as React from "react";
import "../styles/DashboardView.scss";
import { WynIntegration } from '@grapecity/wyn-integration';

export default class DashboardView extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {         
            docTitle: 'Retail Sales Analysis'
        };
    }

    viewerIns: any;

    public render() {
        const { serverUrl, selectedScenario, dashboardId, token } = this.props;
       
        if (this.viewerIns != null) {
            this.viewerIns.destroy();
        }
      
        let selectedScenarioStr = "";        
        WynIntegration.createDashboardViewer({
            baseUrl: serverUrl,
            dashboardId: dashboardId,
            //theme: 'red',
            token: token,
            scenario: selectedScenario
            // for v5.0, v5.1 ignore
            //version: '5.0.21782.0',
        }, '#viewer').then(ins => {            
            this.viewerIns = ins;
        });

        return (
            <div className="dashboardView">
                <div className="itemBar">
                    {this.state.docTitle}
                </div>
                <div className="dashView">
                    <div className="selection">                      
                        <div className="selected">
                            <div className="selectedScenario">
                                {selectedScenarioStr}
                            </div>                          
                        </div>                       
                    </div>                    
                    <div id="viewer" className="viewer1">                       
                    </div>
                </div>
            </div>
        );
    }
}