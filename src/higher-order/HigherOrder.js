import React from 'react';
import Axios from 'axios';

export class myDataStore {
    static async getPhotos() {
        return Axios.get("https://jsonplaceholder.typicode.com/photos");
    }

    static async getComments() {
        return Axios.get("https://jsonplaceholder.typicode.com/comments");
    }
}

export class MyComments extends React.Component {
    constructor(props) {
        super(props);

        console.log(this);
    }

    render() {
        // const items = this.props.data.map((item, index) => (
        //     <p key={index}>{item.name}</p>
        // ));

        return (
            <React.Fragment>
                <p>My Comments</p>

                {/* { items } */}
            </React.Fragment>
        );
    }

}

// export class MyPhotos extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <p>My photos</p>
//             </React.Fragment>
//         );
//     }

// }

export function MyHigherOrderComponent(NewComponent, dataMethod) {
    return class extends React.Component {
        constructor(props) {
            super(props);            

            this.state = {
                data: dataMethod(myDataStore, props)
            };
        }

        componentWillMount() {
            dataMethod(myDataStore, this.props).then((res) => {
                this.setState({
                    data: res
                });
            }).catch((err) => {
                console.log("error! ", err);
            });
        }
        
        componentWillUnmount() {
            
        }

        render() {
            return <NewComponent data={this.state.data} {...this.props}></NewComponent>
        }
    }
}
