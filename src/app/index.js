import React, { Component } from 'react';
import Navbar, { ElementsWrapper } from '../navbar/';

class App extends Component {
    render() {
        const navBarItems = [{
            label: "",
            target: ""
        }, {
            label: "",
            target: ""
        }, {
            label: "",
            target: ""
        }, ]
        return (
            <div>
                <Navbar items={navBarItems} offset={-60} duration={500} delay={0}>
                </Navbar>
                <div>
                    <ElementsWrapper>
                        
                    </ElementsWrapper>
                </div>
            </div>
        );
    }
}

export default App;