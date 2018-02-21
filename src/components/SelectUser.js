import React, { Component } from 'react';
import API from '../api/api.js';

class SelectUser extends Component {

    constructor() {
        super();
        this.state = { 
            selectedUser: null,
            users: []
         }
    };

    componentDidMount() {
        API.fetchAllUsers()
            .then((users) => {
                this.setState({
                    users: users,
                    selectedUser: users[0]
                });
            });
            console.dir(this.sel)
    }

    render() {
        return (
            <select onChange={() => this.props.handleUserSelection(this.sel.value)} ref={(sel) => this.sel = sel}>
                {this.state.users.map(user => (
                    <option value={user.id}>{user.name}</option>
                ))}
            </select>
        )
    }

}

export default SelectUser;