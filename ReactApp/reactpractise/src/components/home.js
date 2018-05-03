import React, { Component } from 'react';

export class Home extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                <div>My Nationality is {this.props.user.nationality}</div>
                </div>
                <div className="col-12">
                    <h3>My Hobbies</h3>
                    <ul>
                        {this.props.user.hobbies.map((hobby,i)=><li key={i}> {hobby} </li>)}
                    </ul>
                </div>
            </div>
        );
    }
}