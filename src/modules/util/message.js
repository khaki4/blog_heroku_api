import { POST_FETCH, POST_ADD } from '../posts';

const MESSAGE_SHOW = 'MESSAGE_SHOW'

export const showMessage = (msg) => ({ type: MESSAGE_SHOW, payload: msg})

export default (state = '', action) => {
  switch (action.type) {
    case POST_FETCH:
    case POST_ADD:
      return ''
    case MESSAGE_SHOW:
      return action.payload
    default:
      return state
  }
}