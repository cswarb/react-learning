import React from "react";
import { MyComments, MyPhotos, MyHigherOrderComponent, myDataStore } from "../higher-order/HigherOrder.js";

const MyCommentsComponent = MyHigherOrderComponent(MyComments, async (DataSource, props) => {
    console.log("MyCommentsComponent callback: ", DataSource, props);
    return await myDataStore.getComments();
});

// const MyPhotosComponent = MyHigherOrderComponent(MyPhotos, async (DataSource, props) => {
//     console.log("MyPhotosComponent callback: ", DataSource, props);
//     return await myDataStore.getPhotos();
// });

export class About extends React.Component {
    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <React.Fragment>
                <p>This is a todo list app</p>

                <MyCommentsComponent></MyCommentsComponent>

                <hr />

                {/* <MyPhotosComponent></MyPhotosComponent> */}
            </React.Fragment>
        );
    }

}