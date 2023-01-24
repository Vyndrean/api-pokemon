import React from 'react'
import PokeModal from '@/components/PokeModal'
import { Container } from '@chakra-ui/layout'
import { SearchBox } from 'react-instantsearch-dom';
function index() {
  return (
    <Container>
      <PokeModal btn={"Hola"} title={"Titulo"} content={"Contenido"}/>

    </Container>
  )
}

export default index