import { all, takeLatest } from 'redux-saga/effects'
import { Types as PlaylistsTypes } from '../ducks/playlists'
import { getPlaylists } from './playlists'

export default function* rootSaga() {
  const playlistsGet = takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists)
  yield all([playlistsGet])
}
