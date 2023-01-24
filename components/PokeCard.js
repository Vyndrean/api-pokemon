import React from 'react'
import { Card, Stack, Image, CardBody, Heading, Text, CardFooter, Button } from '@chakra-ui/react'



const PokeCard = ({heading, text, image}) => {

    return (
        <Stack>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '150px' }}
                    
                    src={image}
                    alt='Poke'
                />

                <Stack>
                    <CardBody>
                        <Heading size='md' as={'h5'} fontFamily='cursive'>{heading}</Heading>
                    </CardBody>
                </Stack>
            </Card>
        </Stack>
    )
}

export default PokeCard