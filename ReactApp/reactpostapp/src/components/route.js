import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export class Rout extends Component{

    render(){
        return (
    <Router>
        <div className="Rout">
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/users'>Users</Link>
                </li>
            </ul>
        </div>
        <hr/>
        <Route exact path='/' component={Home}/>
        <Route path='/users' component={Users}/>
        </div>
        </Router>
)}
};

const Home = ()=>(
    <div> This is Home </div>    
);

const Users = ({match}) => (
    <div>
            <ul>
                <li>
                    <Link to={`${match.url}/user1`}>User1</Link>
                </li>
                <li>
                <Link to={`${match.url}/user2`}>User2</Link>
                </li>
                <li>
                <Link to={`${match.url}/user3`}>User3</Link>
                </li>
                <li>
                <Link to={`${match.url}/user4`}>User3</Link>
                </li>
                <li>
                <Link to={`${match.url}/user5`}>User3</Link>
                </li>
            </ul>
            <hr/>
            <Route path={`${match.url}/:userId`} component={User}/>
            <Route exact path={`${match.url}`} render={()=><h1>Please select a user</h1>}/>
        </div>
);

const User = ({match}) => (
    <h2> You have slected {match.params.userId} </h2>
)