import React from 'react';
import Axios from 'axios';

export class Details extends React.Component {
    user = {};
    userId = null;

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        this.userId = this.props.match.params.id;

        Axios.get(`https://jsonplaceholder.typicode.com/users/${this.userId}`).then((res)=> {
            console.log(res);
            this.setState({
                user: res.data
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <React.Fragment>
                <p>Details for id: {this.userId}</p>
                <p>{this.state.user.name}</p>
            </React.Fragment>
        );
    }

}