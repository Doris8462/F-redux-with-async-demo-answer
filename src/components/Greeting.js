import React, { Component } from 'react';
import { connect } from 'react-redux';

class Greeting extends Component {
  render() {
    return <h1 className="Greeting">Wellcome! {this.props.name}!</h1>;
  }
}

const mapStateToProps = ({ name }) => ({
  name
});

export default connect(mapStateToProps)(Greeting);
