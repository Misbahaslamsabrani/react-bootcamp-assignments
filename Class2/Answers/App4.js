import React, { Component } from 'react';
class App extends Component {
    constructor() {
        super();
        this.state = {
            totalCorrect: 0,
            totalQuestions: 0,
        }
    }
    whenClick = () => {
        this.setState({ totalCorrect: this.state.totalCorrect + 1 })
    }
    render() {
        const number1 = Math.floor(Math.random() * 100);
        const number2 = Math.floor(Math.random() * 100);
        const number3 = Math.floor(Math.random() * 100);
        const correctAnswer = number1 + number2 + number3;
        const proposedAnswer = Math.floor(Math.random() * 3) + number1 + number2 + number3;
        const numQuestions = this.state.totalQuestions;
        const numCorrect = this.state.totalCorrect;
        return (
            <div className="App">
                <div className="game">
                    <h2>ADD THE NUMBERS GAME</h2>
                    <div className="equation">
                        <p className="text">{`${number1} + ${number2} + ${number3} = ${proposedAnswer}`}</p>
                    </div>
                    <button onClick={() => {
                        if (correctAnswer === proposedAnswer) {
                            this.setState({ totalCorrect: numCorrect+1, totalQuestions: numQuestions+1})
                        }
                        else{this.setState({totalQuestions: numQuestions+1})}
                    }}>True</button>
                    <button onClick={() => {
                        if(correctAnswer !== proposedAnswer){
                            this.setState({ totalCorrect: numCorrect+1, totalQuestions: numQuestions+1})
                        }
                        else{this.setState({totalQuestions: numQuestions+1})}
                    }}>False</button>
                    <p className="text">
                        You have answered {numCorrect} question answered correctly out of total {numQuestions} questions.
          </p>
                </div>
            </div>
        );
    }
}

export default App;