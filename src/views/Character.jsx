import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { axiosGet } from '../actions/axiosGet';
import CharacterCard from '../components/CharacterCard';

const Character = () => {

    const { id } = useParams()
    const [character, setCharacter] = useState();

    useEffect(() => {
        getCharacter()
    }, []);

    const getCharacter = async () => {
        const response = await axiosGet(`https://rickandmortyapi.com/api/character/${id}`)
        setCharacter([response.data])
    };

    let navigate = useNavigate()

    const backToCharacters = () => {
        navigate('/')
    }

    return (
        <div>
            {character?.name}
            {character?.map((character, index) => (
                <CharacterCard
                    key={index}
                    id={character.id}
                    name={character.name}
                    src={character.image}
                    alt={character.name}
                    status={character.status}
                    species={character.species}
                    gender={character.gender}
                    origin={character.origin.name}
                    location={character.location.name}
                />
            ))}
            <button className='btn w-100 btn-outline-dark mt-5' onClick={backToCharacters}>Back to characters</button>
        </div>
    );
}

export default Character;
