import React, { Component } from 'react';
import API from '../api/api.js';
import SelectUser from './SelectUser';
import Posts from './Posts';
import '../index.css';

class App extends Component {

    constructor() {
        super();
        this.state = { 
            selectedUser: null,
            posts: []
         }
    };

    componentDidMount() {
        this.updateUser(this.state.selectedUser);
    };

    updateUser = (userId) => {
        console.log(userId)
        this.setState(() => ({
            selectedUser: parseInt(userId),
            posts: []
        }))

        API.fetchAllPosts(userId)
            .then((data) => {
                this.setState({
                    posts: data
                })
            })
    }

    render() {
        return (
            <div>
                <SelectUser 
                    handleUserSelection={this.updateUser} 
                />
                {!this.state.posts
                    ? <p>LOADING</p>
                    : <Posts posts={this.state.posts} />}
            </div>
        )
    }

}

export default App;