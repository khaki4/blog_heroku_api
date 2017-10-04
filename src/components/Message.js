import React from 'react';
import { connect } from 'react-redux';

const Message = ({ message }) =>
  message
    ? <span className="message">{message}</span>
    : null

export default connect(
  (state) => {
    return ({ message: state.message })
  }
)(Message)
