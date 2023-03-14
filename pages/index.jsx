import React, {useState as state} from 'react'
import { Heading, Container, Stack, Grid } from '@chakra-ui/react'
import PokeCard from '@/components/PokeCard'
import Link from 'next/link'
import SearchBar from '@/components/SearchBar'

export const getServerSideProps = async (context) => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    const { results } = await res.json()
    const pokemon = results.map((pokemon, index) => {
        const pokeID = ((index + 1))
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`
        const id = pokeID
        return { ...pokemon, image, id }
    })
    return {
        props: {
            data: pokemon
        }
    }
}

const pokemon = ({ data, data2 }) => {
    const [pokemon, setPokemon] = state(data)
    const handleChange = (e) => {
        let filtered = data.filter((res ) => {
            return `${res.name.toLowerCase()}`.includes(e.toLowerCase())
        })
        setPokemon(filtered)
        console.log(pokemon)
    }
    
    return (
        <>
            <Heading as={"h1"} textAlign={"center"} mb={50} mt={5} color={"white"} fontFamily='cursive' >Lista de Pokemon</Heading>
            <Stack my="5">
                <SearchBar align="center" onChange={handleChange}/>
            </Stack>
            <Container mx={"7%"}>
                <Stack>
                    <Grid templateColumns='repeat(6, 1fr)' gap={6}>
                        {pokemon.map(item => (
                            <Link href={`/pokemon/${item.id}`} key={item.id}>
                                <PokeCard heading={item.name} image={item.image} />
                            </Link>
                        ))}
                    </Grid>
                </Stack>
            </Container>
        </>
    )
}

export default pokemon