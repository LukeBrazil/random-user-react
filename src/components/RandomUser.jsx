import React, { Component } from 'react';
import "./RandomUser.css";


class RandomUser extends Component {
    render() {
        return (
            <div className='user-card'>
                <img src={this.props.userData.picture.large} alt=''></img>
                <p>{this.props.userData.name.first}  {this.props.userData.name.last}</p>
            </div>
        )
    }
}

export default RandomUser;
