import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Link, withRouter, Redirect} from 'react-router-dom';

export class Rout extends Component{

    render(){
        return (
    <Router>
        <div className="Rout">
        <AuthButton/>
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/about'>About</Link>
                </li>
                <li>
                <Link to='/topic'>Topic</Link>
                </li>
                <li>
                <Link to='/protected'>Protected</Link>
                </li>
            </ul>
        </div>
        <hr/>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/topic' component={Topics}/>
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/protected' component={Protected}/>
        </div>
        </Router>
)}
};
const Protected = ()=> (<h2>This is protected page</h2>)
const PrivateRoute = ({component:Component, ...rest}) => (
    <Route {...rest}
        render = {(props)=>
            fakeAuth.isAuthenticated?
            <Component {...props} /> :
            (
                <Redirect 
                    to={{
                        pathname:"/login",
                        state:{from:props.location}
                    }}>
                </Redirect>
            )}>

    </Route>
)

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:false
        }
    }
    login(){
        fakeAuth.authenticate(()=>{
            this.setState({isLoggedIn:true});
        });
    }
    render(){
        if(this.state.isLoggedIn){
            return <Redirect to={this.props.location.state.from.pathname} />
        }
        return(
            <div>
                <h5>You must login to view this page</h5>
                <button onClick={()=>{this.login()}}>Login</button>
            </div>
        )
    }
}

const AuthButton = withRouter(({history})=>(
fakeAuth.isAuthenticated ? 
(<div>You are logged in, Welcome {" "}
    <button onClick={()=>{
        fakeAuth.signout(()=>{history.push("/")})
    }}>Signout</button>
</div>) :
(<div>You are not logged in!!</div>)
)
);
const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb){
        this.isAuthenticated = true;
        setTimeout(cb,100);
    },
    signout(cb){
    this.isAuthenticated=false;
    setTimeout(cb,100);
    }
}

const Home = ()=>(
    <div>
        This is Home
    </div>
    );

const About = ()=>(
<div>
    This is About
</div>
);

const Topics = ({match})=>{
    return (
    <div>
        This is Topics
    
    <div>
        <ul>
            <li>
                <Link to={`${match.url}/render`}>Rendering</Link>
            </li>
            <li>
                <Link to={`${match.url}/lifecyclemethods`}>Life Cycle Methods</Link>
            </li>
            <li>
                <Link to={`${match.url}/propsvsstate`}>Props vs State</Link>
            </li>
        </ul>
    </div>
    <hr/>
    <Route path={`${match.url}/:paramId`} component={Topic}/>
    <Route exact path={`${match.url}`} render={()=><h1>Please select sub topic</h1>}/>
    </div>
    )};

    const Topic = ({match})=>(
        <h2> You have slected {match.params.paramId} </h2>
    );