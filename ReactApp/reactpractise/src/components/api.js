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
        .then((response)=>{
            if(response.status === 200){
                return Promise.resolve(response);
            }
            else{
                return Promise.reject(new Error(response.statusText));
            }
        })
        .then((data)=>data.json())
        .then((response) =>{
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
                <h5>Type : {this.state.type}</h5>
            </div>
        )
    }
}