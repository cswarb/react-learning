import React from 'react';
import { Button } from "./Button.js";
import { ThemeContext } from "./ThemeContext.js";

export class DarkButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button {...this.props}>
                <span>Dark button</span>
            </Button>
        );
    }

}