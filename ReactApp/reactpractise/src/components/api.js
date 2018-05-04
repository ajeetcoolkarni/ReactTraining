import React,{Component} from 'react';

export class Api extends Component {
    constructor(props){
        super(props);
        this.state={
            login:'',
            type:''
        }
    }

    componentDidMount(){
        var url='https://api.github.com/users/'+this.props.name;

        fetch(url)
        .then((status)=>{
            debugger;
            if(status.ok){
                return Promise.resolve();
            }
            else{
                return Promise.reject()
            }
        })
        //.then((data)=>{data.json()})
        .then((response) =>{
            debugger;
            this.setState({
                login:response.login,
                type:response.type
            })
        })
    }

    render(){
        return(
            <div>
                <h2> API Component </h2>
                <h5>Name : {this.state.login}</h5>
                <h5>Location : {this.state.type}</h5>
            </div>
        )
    }
}