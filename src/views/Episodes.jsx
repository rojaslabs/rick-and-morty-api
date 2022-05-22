import React, { useState, useEffect } from 'react';
import { axiosGet } from '../actions/axiosGet';
import EpisodesCard from '../components/EpisodesCard'

const Episodios = () => {

    const [episodios, setEpisodios] = useState();

    useEffect(() => {
        getEpisodes()
    }, []);

    const getEpisodes = async () => {
        const response = await axiosGet('https://rickandmortyapi.com/api/episode')
        console.log(response)
        setEpisodios(response.data.results)
    };

    return (
        <div>
            <h3 className='text-center my-5'>Episodios</h3>
            <div className='row gy-4'>
                {episodios?.map((episodio, index) => (
                    <EpisodesCard
                    key={index}
                    episode={episodio.episode}
                    name={episodio.name}
                    air_date={episodio.air_date}
                    />
                ))}
            </div>
        </div>
    );
}

export default Episodios;
