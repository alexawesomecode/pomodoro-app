import React from 'react';
import logo from './logo.svg';
import tomato from './tomato.svg'
import './App.css';

const DisplaySummary = (props) => {

    const { count } = props;
    return (

        <div>
            <h1> Total: { count }, Work: { ((count * 28) / 60).toFixed(1)} hrs, Rest: { count * 7 } min</h1>
            </div>
    )
}

const Button = (props) => {

    const {handleClick} = props;
    return (

        <button onClick={handleClick}>add pomodoro</button>
    )
}

const DisplayTomato = (props) => {

    const { count } = props;
    let result = []
    for (let i = 1; i <= count; i++) {

        result.push('<img src={tomato}/>')

    }
            
    return(

        <div className="pomo-box">
            {result.map(() => <img src={tomato}/>)}
        </div>
    )


}
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 8}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        this.setState({count: this.state.count + 1})
    }
    render() {
    return ( 
        <div className = "App">
            <h1>Work Cycle: 28 / 7 </h1>
            <Button handleClick={this.handleClick} />
            <DisplayTomato count={this.state.count} />
            <DisplaySummary count={this.state.count}/>
        </div>
    );
    }
}

export default App;