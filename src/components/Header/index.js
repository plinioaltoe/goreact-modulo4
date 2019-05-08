import React from 'react'

import { Container, Search, User } from './styles'

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>
    <User>
      <img src="https://avatars0.githubusercontent.com/u/36741085?s=40&v=4" alt="avatar" />
      Plínio Altoé
    </User>
  </Container>
)

export default Header
