/**
 * Types
 */

export const Types = {
  GET_REQUEST: 'playlistDetails/GET_REQUEST',
  GET_SUCESS: 'playlistDetails/GET_SUCESS',
}

/**
 * Reducers
 */
const INITIAL_STATE = {
  data: {},
  loading: false,
}

export default function playlistDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true }
    case Types.GET_SUCESS:
      return { ...state, loading: false, data: action.payload.data }
    default:
      return state
  }
}

/**
 * Actions
 */
export const Creators = {
  getPlaylistDetailsRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id },
  }),

  getPlaylistDetailsSuccess: data => ({
    type: Types.GET_SUCESS,
    payload: { data },
  }),
}
