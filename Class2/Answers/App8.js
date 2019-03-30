import React, { Component } from 'react';
class App8 extends Component {
    constructor() {
        super()
        this.state = {
            user1Name: "Misbah",
            user2Name: "Sir Aamir",
            user1Message: "",
            user2Message: "",
            messages: []
        }
    }
    whenEmpty1 = () => {
        return this.state.user1Message === '';
    }
    whenEmpty2 = () => {
        return this.state.user2Message === '';
    }
    whenChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    whenSubmit1 = (event) => {
        event.preventDefault();
        let temObj = {username: this.state.user1Name , message: this.state.user1Message}
        let temArr = [...this.state.messages, temObj]
        this.setState({user1Message: "", messages: temArr})
    }
    whenSubmit2 = (event) => {
        event.preventDefault();
        let temObj = {username: this.state.user2Name , message: this.state.user2Message}
        let temArr = [...this.state.messages, temObj]
        this.setState({user2Message: "", messages: temArr})
    }
    render() {
        return (
            <div>
                <div>
                    <h2>GhupShap Chat App</h2>
                    <div><i>{this.state.user1Name}</i></div>
                    {this.state.messages.length > 0 ? (<ul>{this.state.messages.map((v,i) => <li key={i}>{`${v.username} : ${v.message}`}</li>)}</ul>) : ("No messages")}
                    <form onSubmit={this.whenSubmit1}>
                        <input type="text"
                            name="user1Message" 
                            value={this.state.user1Message}
                            onChange={this.whenChange}/>
                        <button disabled={this.whenEmpty1()}>SEND</button>
                    </form>
                    

                </div>
                <div>
                    <h2>GhupShap Chat App</h2>
                    <div><i>{this.state.user2Name}</i></div>
                    {this.state.messages.length > 0 ? (<ul>{this.state.messages.map((v,i) => <li key={i}>{`${v.username} : ${v.message}`}</li>)}</ul>) : ("No messages")}
                    <form onSubmit={this.whenSubmit2}>
                        <input type="text"
                            name="user2Message" 
                            value={this.state.user2Message}
                            onChange={this.whenChange}/>
                        <button disabled={this.whenEmpty2()}>SEND</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default App8;