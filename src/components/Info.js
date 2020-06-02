import React, { Component } from 'react';
import { connect } from 'react-redux';

class Info extends Component {
  render() {
    const { isFetching, data } = this.props.info;
    return isFetching ? (
      <p>Loading...</p>
    ) : (
      <ul className="Info">
        <li>Name: {data ? data.name : ''}</li>
        <li>Age: {data ? data.age : ''}</li>
        <li>Gender: {data ? data.gender : ''}</li>
        <li>Title: {data ? data.title : ''}</li>
      </ul>
    );
  }
}

const mapStateToProps = ({ info }) => ({
  info
});

export default connect(mapStateToProps)(Info);
