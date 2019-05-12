import { call, put } from 'redux-saga/effects'
import api from '../../services/api'
import { Creators as PlaylistsActions } from '../ducks/playlists'

export function* getPlaylists() {
  try {
    const response = yield call(api.get, '/playlists')
    yield put(PlaylistsActions.getPlaylistsSuccess(response.data))
  } catch (error) {
    console.log(error)
    console.tron.log(error)
    yield put(PlaylistsActions.addPlaylistsFailure(error))
  }
}

export function* addPlaylists(action) {
  try {
    const { payload } = action
    const { playlists, latitude, longitude } = payload
    const { data } = yield call(api.get, `/users/${playlists}`)

    const playlistsData = {
      id: data.id,
      name: data.name,
      login: data.login,
      avatar_url: data.avatar_url,
      repos_url: data.repos_url,
      latitude,
      longitude,
    }

    yield put(PlaylistsActions.addPlaylistsSuccess(playlistsData))
  } catch (error) {
    const erroMsg = 'Erro ao adicionar repositório'

    yield put(PlaylistsActions.addPlaylistsFailure(erroMsg))
  }
}
