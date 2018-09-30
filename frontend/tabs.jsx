import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
    this.clickTab = this.clickTab.bind(this);
  }

  tabsContent() {
    return this.props.content[this.state.index];
  }

  clickTab(event) {
    event.preventDefault();
    const tabs = ['private', 'family', 'work'];
    switch (event.currentTarget.innerHTML) {
      case 'private':
        this.setState({ index: 0 });
        break;
      case 'family':
        this.setState({ index: 1 });
        break;
      case 'work':
        this.setState({ index: 2 });
        break;
    }
  }

  render() {
    return (
      <div id="tabs">
        <h1>Tabs</h1>
        <div className="tabs-container">
          <ul className="tabs-titles">
            <li onClick={ this.clickTab }>private</li>
            <li onClick={this.clickTab}>family</li>
            <li onClick={this.clickTab}>work</li>
          </ul>

          <article className="tabs-content">{ this.tabsContent() }</article>
        </div>
      </div>
    )
  }
}
export default Tabs;