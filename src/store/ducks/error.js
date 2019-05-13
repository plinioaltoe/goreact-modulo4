/**
 * Types
 */

export const Types = {
  SET: 'error/SET',
  HIDE: 'error/HIDE',
}

/**
 * Reducers
 */
const INITIAL_STATE = {
  visible: false,
  message: false,
}

export default function error(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET:
      return { ...state, visible: true, message: action.payload.message }
    case Types.HIDE:
      return { ...state, visible: false }
    default:
      return state
  }
}

/**
 * Actions
 */
export const Creators = {
  hideError: () => ({
    type: Types.HIDE,
  }),

  setError: message => ({
    type: Types.SET,
    payload: { message },
  }),
}
