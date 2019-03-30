import React from 'react';

class App6 extends React.Component {
  state = {
    value: '',
    itemList: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addNewItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      itemList: [...oldState.itemList, this.state.value],
      value: ""
    }));
  };

  removeLastItem = event => {
    this.setState(prevState => ({ itemList: this.state.itemList.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.itemList.length === 0;
  };

  render() {
    return (
      <div className="App">
        <h2>ToDo List</h2>
        <form onSubmit={this.addNewItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>

        <button onClick={this.removeLastItem} disabled={this.noItemsFound()}>
          Delete Last Item
        </button>

        <p className="items">Item List</p>
        <ol className="item-list">
          {this.state.itemList.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
      </div>
    );
  }
}

export default App6;