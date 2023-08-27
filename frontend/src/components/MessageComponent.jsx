import React, { Component } from 'react';
import MessageService from '../services/MessageService';

class MessageComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: [],
      messageToSave: ''
    }
    this.changeMessageHandler = this.changeMessageHandler.bind(this);
  }

  componentDidMount() {
    MessageService.getAllMessages().then((res) => {
      this.setState({message: res.data});
    });
  }

  changeMessageHandler = (event) => {
    this.setState({messageToSave: event.target.value});
  }

  saveMessage = (e) => {
    let jsonMessage = {message: this.state.messageToSave};
    MessageService.saveMessage(jsonMessage).then(res => window.location.reload())
  }

  render() {
    return (
      <div>
        <h2 className='text-center'>Messages</h2>
        <div className='flex'>
          <button className='btn btb-primary' onClick={this.saveMessage}>Save Message</button>
          <input placeholder='Message' name='message' className='form-control'
          value={this.state.messageToSave} onChange={this.changeMessageHandler}></input>
        </div>
        <div className='row'>
            <table className='table table-striped table-bordered'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Content</th>
                </tr>
              </thead>

              <tbody>
                {
                  this.state.message.map(
                    message =>
                    <tr key={message.id}>
                      <td>{message.id}</td>
                      <td>{message.message}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
        </div>

      </div>
    );
  }
}

export default MessageComponent;