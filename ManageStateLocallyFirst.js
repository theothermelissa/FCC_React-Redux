class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(i){
    this.setState({
      input: i.target.value
    });
  }
  submitMessage(){ 
    console.log("submitted");
    const firstMessage = this.state.messages;
    const entireMessage = firstMessage.concat(this.state.input);
    console.log(JSON.stringify(this.state.messages));
    this.setState({
      messages: entireMessage,
      input: "",
    });
  }
  // add handleChange() and submitMessage() methods here

  render() {
    const items = this.state.messages.map(message => <li>{message}</li>);
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
      <input 
      onChange={this.handleChange}
      value={this.state.input}
      placeholder="Say something, dammit" /><br />
      <button onClick={this.submitMessage}>submit this bitch</button>
      <ul>
       {items}
        { this.state.input &&
           <li>{this.state.input}</li>
        }
      </ul>
        { /* change code above this line */ }
      </div>
    );
  }
};