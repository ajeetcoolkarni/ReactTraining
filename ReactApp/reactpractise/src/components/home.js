import React, { Component } from 'react';

export class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            age : props.user.age,
            status:0,
            inputValue:'Hello',
            intervalId :0
        }
        this.state.intervalId = setInterval(() => {
            this.setState({
                status : this.state.status + 1
            })
        }, 10000);
    }

    handleOnInputChange(e){
        
        this.setState({
            inputValue: e.target.value
        })
    }

    componentWillUnmount(){
        clearInterval(this.state.intervalId);
        console.log('unmount');
    }

    handleAge(e){
        this.setState({
            age:this.state.age+1
        })
        console.log(this.state.age);
    }
    render() {
        
        return (
            <div className="row">
                <div className="col-12">
                <div>My Nationality is {this.props.user.nationality} and Age is {this.state.age}</div>
                </div>
                <div className="col-12">
                    <h3>My Hobbies</h3>
                    <ul>
                        {this.props.user.hobbies.map((hobby,i)=><li key={i}> {hobby} </li>)}
                    </ul>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" onClick={(event) => this.handleAge(event)}>
                    Increase Age
                    </button>
                    {this.props.children}
                </div>
                <div className="col-12">
                <div><input type='text' value={this.state.inputValue} onChange={(event)=>this.handleOnInputChange(event)}/></div>
                <label>{this.state.inputValue}</label>
                </div>
                <div className="col-12">
                <div>current status is {this.state.status}</div>
                </div>
                <div className="col-12">
                <button className="btn btn-danger" onClick={()=>this.props.triggerHello()}>
                    Say Hello
                </button>
                <button className="btn btn-warning" onClick={()=>this.props.sendValue("got from home")}>
                    Send Value
                </button>
                </div>
            </div>
        );
    }
}