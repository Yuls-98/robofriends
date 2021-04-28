import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import {CustomRobots} from '../components/CustomRobots';
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state={
            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(respone => respone.json())
            .then(users => users.concat(CustomRobots))    
            .then(users => this.setState({robots: users}))   
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render(){
        console.log(this.state)
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !robots.length ?
            <h1 className='tc f1'>Loading</h1> :
        (
            <React.Fragment>
                <div className='tc'>
                    <h1 className='f1' style={{letterSpacing: '0.5rem'}}>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            </React.Fragment>
        );
    }
}

export default App