import { call, put } from 'redux-saga/effects'
import api from '../../services/api'
import { Creators as PlaylistDetailsActions } from '../ducks/playlistDetails'
import { Creators as ErrorActions } from '../ducks/error'

export function* getPlaylistDetails({ payload }) {
  try {
    const { id } = payload
    const response = yield call(api.get, `/playlists/${id}?_embed=songs`)
    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(response.data))
  } catch (error) {
    yield put(ErrorActions.setError(`Não foi possível obter os detalhes da playlist: ${error}`))
  }
}
