import React from 'react'
import { Link } from "react-router-dom";

const CharactersCard = (props) => {

    const { id, name, src, alt, status } = props

    return (
        <div className='col-sm-3'>
            <div className='card h-100'>
                <div className='card-header text-white bg-dark'>
                    <h6 className='card-title my-1'>
                        {name}
                        {status === 'Alive' && <span className='dot text-success'>•</span>}
                        {status === 'Dead' && <span className='dot text-danger'>•</span>}
                        {status === 'unknown' && <span className='dot text-muted'>•</span>}
                    </h6>
                </div>
                <img className='card-img' src={src} alt={alt} />
                <div className='card-body bg-dark d-flex flex-column'>
                    <Link to={`character/${id}`}><button className='btn btn-outline-light mt-auto w-100'>Details</button></Link>
                </div>
            </div>
        </div>
    )
}

export default CharactersCard
