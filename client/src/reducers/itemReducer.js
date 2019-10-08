import uuid from 'uuid'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types'

const initialState = {
  items: [
    { id: uuid(), name: 'Stuff' },
    { id: uuid(), name: 'Things' },
    { id: uuid(), name: 'Some thing' },
    { id: uuid(), name: 'Chungus' }
  ]
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      }
    default:
      return state
  }
}
