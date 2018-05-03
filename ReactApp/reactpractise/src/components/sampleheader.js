import React, { Component } from 'react';

export class SampleHeader extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="/">React Site</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="/Home">Home</a></li>
      <li><a href="/Page1">Page 1</a></li>
      <li><a href="/Page2">Page 2</a></li>
      <li><a href="/Page3">Page 3</a></li>
    </ul>
  </div>
</nav>
    );
  }
}

export default SampleHeader;
