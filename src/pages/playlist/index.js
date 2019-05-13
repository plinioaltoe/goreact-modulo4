import React, { Component } from 'react'

import { connect } from 'react-redux'

import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import PlusIcon from '../../assets/images/plus.svg'
import ClockIcon from '../../assets/images/clock.svg'
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails'
import Loading from '../../components/Loading'
import { Container, Header, SongList } from './styles'

class Playlist extends Component {
  static propTypes = {
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    playlistDetails: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        thumbnail: PropTypes.string,
        songs: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            author: PropTypes.string,
            album: PropTypes.string,
          }),
        ),
      }),
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
  }

  componentDidMount = () => {
    this.loadPlaylistDetails()
  }

  componentDidUpdate = (prevProps) => {
    const prevId = prevProps.match.params.id
    const { match } = this.props
    const { id } = match.params
    if (prevId !== id) this.loadPlaylistDetails()
  }

  loadPlaylistDetails = () => {
    const { getPlaylistDetailsRequest, match } = this.props
    const { id } = match.params
    getPlaylistDetailsRequest(id)
  }

  renderDetails = () => {
    const { playlistDetails } = this.props
    const playlist = playlistDetails.data

    return (
      <Container>
        <Header>
          <img src={playlist.thumbnail} alt={playlist.title} />

          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            {!!playlist.songs && <p>{playlist.songs.length} músicas</p>}

            <button type="button"> PLAY</button>
          </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th />
              <th>Título</th>
              <th>Artista</th>
              <th>Álbum</th>
              <th>
                <img src={ClockIcon} alt="Duração" />
              </th>
            </tr>
          </thead>

          <tbody>
            {!playlist.songs ? (
              <tr>
                <td colSpan={5}>Nenhum música cadastrada</td>
              </tr>
            ) : (
              playlist.songs.map(song => (
                <tr key={song.id}>
                  <td>
                    <img src={PlusIcon} alt="Adicionar" />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>3:24</td>
                </tr>
              ))
            )}
          </tbody>
        </SongList>
      </Container>
    )
  }

  render() {
    const { playlistDetails } = this.props
    return playlistDetails.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    )
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
})
const mapDispatchToProps = dispatch => bindActionCreators(PlaylistDetailsActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist)
