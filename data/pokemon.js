import axios from "axios";

const getUser = async() => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    return res
}

const getPokemon = async() => {
    const res = await axios.get(`${process.env.POKESERVER}`)
    return res
}

const getInfoPokemon = (url) => {
    const res = axios.get(`${url}`)
    //console.log(`${url}`)
    return res
} 

module.exports = {
    getPokemon,
    getInfoPokemon
}