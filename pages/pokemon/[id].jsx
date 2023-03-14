import React, { useState } from 'react'
import { Container, Text, Heading, Stack, Image, Box, Center, Circle, Button, Modal, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Grid, Input, HStack, FormLabel, FormControl, InputGroup, InputLeftAddon, useToast, InputLeftElement } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowBackIcon, ExternalLinkIcon } from '@chakra-ui/icons'

export const getServerSideProps = async (context) => {
    const { id } = context.query;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await res.json();
    const pokeID2 = ('00' + pokemon.id).slice(-3);
    const pokeID = id
    pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeID2}.png`;
    pokemon.image2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`
    return {
        props: { pokemon },
    };
}
const OverlayOne = () => (
    <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
    />
)

const Pokemon = ({ pokemon }) => {
    const router = useRouter()
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
    const [pokeID, setPokeID] = useState([])
    function crzbtn(e) {
        if ((e.target.id == 'leftcross' || e.target.id == 'leftT') && pokemon.id > 1) {
            router.push(`/pokemon/${pokemon.id - 1}`)
        }
        if ((e.target.id == 'botcross' || e.target.id == 'downT') && pokemon.id > 10) {
            router.push(`/pokemon/${pokemon.id - 10}`)
        }
        if ((e.target.id == 'topcross' || e.target.id == 'upT') && pokemon.id <= 141) {
            router.push(`/pokemon/${pokemon.id + 10}`)
        }
        if ((e.target.id == 'rightcross'|| e.target.id == 'rightT') && pokemon.id <= 150) {
            router.push(`/pokemon/${pokemon.id + 1}`)
        }
    }

    const pokemonID = () => {
        if (pokemon.id < 100 && pokemon.id > 9) {
            return "0" + pokemon.id
        } else if (pokemon.id <= 9) {
            return "00" + pokemon.id
        }
        return pokemon.id
    }

    const handleChange = (e) => {
        setPokeID({
            ...pokeID,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (pokeID.pokeID < 1 || pokeID.pokeID > 150) {
            toast({
                title: 'ID invalido',
                position: 'top-right',
                isCosable: true,
                duration: 1500,
                status: 'error'
            })
        } else {
            router.push(`/pokemon/${pokeID.pokeID}`)
            onClose()
        }

    }

    return (
        <Container maxW={"container.xl"} mt={150} borderRadius={5}>
            <div id="pokedex">
                <div id="left">
                    <div id="logo"></div>
                    <div id="bg_curve1_left"></div>
                    <div id="bg_curve2_left"></div>
                    <div id="curve1_left">
                        <div id="buttonGlass" onClick={() => { setOverlay(<OverlayOne />); onOpen() }} className={'pointer'}>
                            <Text ml={2} mt={2} fontSize={20}>{pokemonID()}</Text>
                            <div id="reflect"></div>
                        </div>
                        <div id="miniButtonGlass1" className='pointer' onClick={() => router.push("/")}></div>
                        <div id="miniButtonGlass2"></div>
                        <div id="miniButtonGlass3"></div>
                    </div>
                    <div id="curve2_left">
                        <div id="junction">
                            <div id="junction1"></div>
                            <div id="junction2"></div>
                        </div>
                    </div>
                    <div id="screen">
                        <div id="topPicture">
                            <div id="buttontopPicture1"></div>
                            <div id="buttontopPicture2"></div>
                        </div>
                        <div id="picture">
                            <Image src={pokemon.image} alt="psykokwak" height="170" width={200} />
                        </div>
                        <div id="buttonbottomPicture"></div>
                        <div id="speakers">
                            <div className="sp"></div>
                            <div className="sp"></div>
                            <div className="sp"></div>
                            <div className="sp"></div>
                        </div>
                    </div>
                    <div id="bigbluebutton"></div>
                    <div id="barbutton1"></div>
                    <div id="barbutton2"></div>
                    <div id="cross">
                        <div id="leftcross" className='crzbtn pointer' onClick={(e) => crzbtn(e)}>
                            <div id="leftT"></div>
                        </div>
                        <div id="topcross" className='crzbtn pointer' onClick={(e) => crzbtn(e)}>
                            <div id="upT"></div>
                        </div>
                        <div id="rightcross" className='crzbtn pointer' onClick={(e) => crzbtn(e)}>
                            <div id="rightT"></div>
                        </div>
                        <div id="midcross">
                            <div id="midCircle"></div>
                        </div>
                        <div id="botcross" className='crzbtn pointer' onClick={(e) => crzbtn(e)}>
                            <div id="downT"></div>
                        </div>
                    </div>
                </div>
                <div id="right">
                    <div id="stats">
                        <strong className='unselectable'>Name:</strong> {pokemon.name}<br />
                        <strong className='unselectable'>Type:</strong> {pokemon?.types[0]?.type?.name + "\n"} {pokemon?.types[1]?.type?.name}<br />
                        <strong className='unselectable'>Height:</strong> {pokemon.height}<br />
                        <strong className='unselectable'>Weight:</strong> {pokemon.weight}<br /><br />
                    </div>
                    <div id="blueButtons1">
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                    </div>
                    <div id="blueButtons2">
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                    </div>
                    <div id="miniButtonGlass4"></div>
                    <div id="miniButtonGlass5"></div>
                    <div id="barbutton3"></div>
                    <div id="barbutton4"></div>
                    <div id="yellowBox1">
                        <Text ml={3}>{pokemon?.abilities[0]?.ability?.name}</Text>
                        <Text ml={3}>{pokemon?.abilities[1]?.ability?.name}</Text>
                    </div>
                    <div id="yellowBox2">
                        <Text ml={3}>{pokemon?.abilities[2]?.ability?.name}</Text>
                        <Text ml={3}>{pokemon?.abilities[3]?.ability?.name}</Text>
                    </div>
                    <div id="bg_curve1_right"></div>
                    <div id="bg_curve2_right"></div>
                    <div id="curve1_right"></div>
                    <div id="curve2_right"></div>
                </div>
            </div>
            <Text mx={5} fontSize={15}>
                API
                <Link color='teal.500' href={`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`}><ExternalLinkIcon /> </Link>
            </Text>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                    <ModalHeader alignSelf={"center"}>Buscar Pokemon</ModalHeader>
                    <ModalCloseButton />
                    <form id='form' onSubmit={handleSubmit}>
                        <ModalBody>
                            <FormControl id='poke' isRequired>
                                <FormLabel htmlFor='pokeID'>Pokemon ID</FormLabel>
                                <InputGroup>
                                    <InputLeftAddon>ID</InputLeftAddon>
                                    <Input type='number' name='pokeID' id='pokeID' placeholder={pokemon.id}
                                        maxLength={'150'} minLength={'1'} onChange={handleChange}
                                    ></Input>

                                </InputGroup>
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <HStack>
                                <Button colorScheme={'green'} type="submit">Confirmar</Button>
                                <Button colorScheme={'red'} onClick={onClose}>Close</Button>
                            </HStack>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </Container>


    )


}

export default Pokemon