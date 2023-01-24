import React from 'react'
import { Heading, Container, Stack, Grid } from '@chakra-ui/react'
import PokeCard from '@/components/PokeCard'
import Link from 'next/link'


export const getServerSideProps = async (context) => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    const { results } = await res.json()
    const pokemon = results.map((pokemon, index) => {
        const pokeID = ((index + 1))
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`
        return { ...pokemon, image }
    })
    return {
        props: {
            data: pokemon
        }
    }
}





const pokemon = ({ data }) => {
    return (
        <>
        <Heading as={"h1"} textAlign={"center"} mb={50} mt={5} color={"white"} fontFamily='cursive' >Lista de Pokemon</Heading>
            <Container mx={"7%"}>
                <Stack>
                    <Grid templateColumns='repeat(6, 1fr)' gap={6}>
                        {data.map((item, index) => (
                            <Link href={`/pokemon/${index + 1}`} key={item.url}>
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