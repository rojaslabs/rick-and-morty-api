import React from 'react';

const EpisodesCard = (props) => {

    const {episode, name, air_date} = props

    return (
        <div className='col-sm-3'>
        <div className='card h-100'>
            <div className='card-header text-white bg-dark'>
                <h5 className='card-title my-1'>{name}</h5>
            </div>
            <div className='card-body'>
            <p className='card-text'>
                    <span className='text-muted'>Código:</span> {episode}
                </p>
                <p className='card-text'>
                    <span className='text-muted'>Air Date:</span> {air_date}
                </p>
            </div>
        </div>
        </div>
    );
}

export default EpisodesCard;
