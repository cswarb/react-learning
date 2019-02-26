import React from 'react';
import { ThemeContext } from "./ThemeContext";

export class Button extends React.Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props);
        console.log(this);
    }

    render() {
        return (
            <React.Fragment>
                <button className={"btn btn-primary"} style={{ backgroundColor: this.context.bgColor}}>{this.props.children}</button>
                
                <ThemeContext.Consumer>
                    {({ theme, updateTheme }) => (
                        <button onClick={updateTheme}>{theme.bgColor} - Change theme</button>
                    )}
                </ThemeContext.Consumer>
            </React.Fragment>
        );
    }

}