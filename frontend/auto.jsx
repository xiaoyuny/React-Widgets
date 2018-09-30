import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }

    this.getInput = this.getInput.bind(this);
    this.listItems = this.listItems.bind(this);
    this.clickComplete = this.clickComplete.bind(this);
  }

  getInput(event) {
    if (event.key === 'Backspace' && this.state.input.length > 0) {
      this.setState({ input: this.state.input.slice(0, this.state.input.length-2) });
    } else if (event.key === 'Backspace' && this.state.input.length === 0){
      return; 
    } else {
      this.setState({ input: this.state.input + event.key });
    }
  }

  listItems() {
    const mappedList = this.props.autolist.map( el => el.toLowerCase() );
    const result = mappedList.filter( el => el.startsWith(`${ this.state.input.toLowerCase()}`));
    
    return result.length > 0 ? result : ['--No Match Found--'];
  }

  clickComplete(event) {
    this.setState({ input: event.target.innerHTML.toLowerCase() })
  }

  render() {
    const that = this;
    return (
      <div>
        <h1>AutoComplete</h1>
        
        <div className="auto-container">
          <label className="input-box">
            <input type="text" placeholder="search for..." onKeyDown={this.getInput} value={this.state.input}/>
          </label>

          <ul>
            <ReactCSSTransitionGroup
              transitionName='auto'
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
            { this.listItems().map( function(el, index) {
              return <li key={index} onClick={that.clickComplete}>{el}</li>
               }   
            )}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    )
  }
}

export default AutoComplete;