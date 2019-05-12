import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { Creators as PlaylistsActions } from '../../store/ducks/playlists'
import { Container, NewPlaylist, Nav } from './styles'

import Loading from '../Loading'

import AddPlaylistIcon from '../../assets/images/add_playlist.svg'

class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
    }).isRequired,
  }

  componentDidMount = () => {
    const { getPlaylistsRequest } = this.props
    getPlaylistsRequest()
  }

  render() {
    const { playlists } = this.props
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
            </li>
            <li>
              <Link to="/">Rádio</Link>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>SUA BILIOTECA</span>
            </li>
            <li>
              <Link to="/">Seu Daily Mix</Link>
            </li>
            <li>
              <Link to="/">Tocados recentemente</Link>
            </li>
            <li>
              <Link to="/">Músicas</Link>
            </li>
            <li>
              <Link to="/">Álbuns</Link>
            </li>
            <li>
              <Link to="/">Artistas</Link>
            </li>
            <li>
              <Link to="/">Estações</Link>
            </li>
            <li>
              <Link to="/">Arquivos locais</Link>
            </li>
            <li>
              <Link to="/">Videos</Link>
            </li>
            <li>
              <Link to="/">Podcasts</Link>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>PLAYLISTS</span>
              {playlists.loading && <Loading />}
            </li>
            {playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`playlists/${playlist.id}`}>{playlist.title} </Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Adicionar playlist" />
          Nova playlist
        </NewPlaylist>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
})
const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar)
