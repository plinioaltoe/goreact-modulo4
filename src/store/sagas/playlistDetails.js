import { call, put } from 'redux-saga/effects'
import api from '../../services/api'
import { Creators as PlaylistDetailsActions } from '../ducks/playlistDetails'

export function* getPlaylistDetails({ payload }) {
  try {
    const { id } = payload
    const response = yield call(api.get, `/playlists/${id}?_embed=songs`)
    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(response.data))
  } catch (error) {
    console.log(error)
    console.tron.log(error)
  }
}
