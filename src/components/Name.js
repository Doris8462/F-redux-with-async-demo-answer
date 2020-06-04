import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setName, fetchInfo } from '../actions';

class Name extends Component {
  render() {
    const style = {
      marginLeft: '10px'
    };
    return (
      <div>
        Input your name, please!
        <input style={style} type="text" onChange={this.props.handleNameChange} />
        <button type="button" style={style} onClick={this.props.handleInfoChange}>
          Get my information
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleNameChange(event) {
    dispatch(setName(event.target.value));
  },
  // redux-thunk写法
  handleInfoChange() {
    dispatch(fetchInfo());
  }
  // redux-Promise写法
  // handleInfoChange() {
  //   dispatch(fetchInfo(dispatch));
  // }
});

// const mapDispatchToProps = {
//   handleNameChange: event => setName(event.target.value),
//   handleInfoChange: fetchInfo
// };

export default connect(null, mapDispatchToProps)(Name);
