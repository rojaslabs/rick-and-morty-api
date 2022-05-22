import React from 'react';

const CharacterCard = (props) => {

    const { id, name, src, alt, status, species, gender, origin, location } = props

    return (
        <div>
            <h2 className="my-4 text-center">Character details</h2>
            <div className="card mt-5 text-start">
                <div className="row">
                    <div className="col-sm-3">
                        <img src={src} className="card-img" alt={alt} />
                    </div>
                    <div className="col-9">
                        <div className="card-body">
                            <h4 className="card-title">#{id}. {name}</h4>
                            <p>
                                {status === 'Alive' && <span className="badge bg-success my-2">{status}</span>}
                                {status === 'Dead' && <span className="badge bg-danger my-2">{status}</span>}
                                {status === 'unknown' && <span className="badge bg-secondary my-2">{status}</span>}
                            </p>
                            <p className="card-text"><span className='text-muted'>Species: </span>{species}</p>
                            <p className="card-text"><span className='text-muted'>Gender: </span>{gender}</p>
                            <p className="card-text"><span className='text-muted'>Origin: </span>{origin}</p>
                            <p className="card-text"><span className='text-muted'>Location: </span>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;
