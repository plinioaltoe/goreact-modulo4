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
      }),
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number,
      }),
    }).isRequired,
  }

  componentDidMount = () => {
    this.loadPlaylistDetails()
  }

  loadPlaylistDetails = () => {
    const { getPlaylistDetailsRequest, match } = this.props
    const { id } = match.params
    getPlaylistDetailsRequest(id)
  }

  renderDetails = () => (
    <Container>
      <Header>
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />

        <div>
          <span>PLAYLIST</span>
          <h1>Rock Forever</h1>
          <p>13 músicas</p>

          <button type="button"> PLAY</button>
        </div>
      </Header>

      <SongList cellPadding={0} cellSpacing={0}>
        <thead>
          <th />
          <th>Título</th>
          <th>Artista</th>
          <th>Álbum</th>
          <th>
            <img src={ClockIcon} alt="Duração" />
          </th>
        </thead>

        <tbody>
          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>
            <td>Papercut</td>
            <td>Linking Park</td>
            <td>Hybrid Theory</td>
            <td>3:24</td>
          </tr>
        </tbody>
      </SongList>
    </Container>
  )

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
