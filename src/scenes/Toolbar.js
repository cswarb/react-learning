import React from 'react';
import { DarkButton } from "../button/DarkButton.js";
import { ThemeContext } from "../button/ThemeContext.js";

export class Toolbar extends React.Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props);
        console.log(this);
    }

    render() {
        return (
            <React.Fragment>
                {this.props.children}
                
                <DarkButton>This is a dark button</DarkButton>
            </React.Fragment>
        );
    }

}