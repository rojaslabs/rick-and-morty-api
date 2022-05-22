import React, { useState, useEffect } from 'react'
import { axiosGet } from '../actions/axiosGet'
import CharactersCard from '../components/CharactersCard'
import Pagination from '../components/Pagination'

const Characters = () => {

    const [characters, setCharacters] = useState()
    const [currentPageUrl, setCurrentPageUrl] = useState('https://rickandmortyapi.com/api/character')
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [pages, setPages] = useState()
    const [count, setCount] = useState();
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    const getData = async () => {
        const response = await axiosGet(currentPageUrl)
        setCharacters(response.data.results)
        setNextPageUrl(response.data.info.next);
        setPrevPageUrl(response.data.info.prev);
        setPages(response.data.info.pages)
    }

    const getDataByName = async () => {
        const response = await axiosGet(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`)
        setCharacters(response.data.results)
        setNextPageUrl(response.data.info.next);
        setPrevPageUrl(response.data.info.prev);
        setPages(response.data.info.pages)
        setCount(response.data.info.count)
    }

    useEffect(() => {
        getData()
    }, [currentPageUrl])

    useEffect(() => {
        getDataByName()
    }, [name, status])

    function nextPage() {
        setCurrentPageUrl(nextPageUrl)
    }
    function prevPage() {
        setCurrentPageUrl(prevPageUrl)
    }
    function goToPage(num) {
        setCurrentPageUrl(`https://rickandmortyapi.com/api/character/?page=${num}&name=${name}`)
    }

    return (
        <div>
            <div>
                <h2 className="my-4 text-center">Characters</h2>
            </div>
            <form>
                <div className="row my-5">
                    <div className="col-8">
                        <input className='form-control' type='search' value={name} placeholder='Enter a name' onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div className="col-4">
                        <select className='form-control' name='status' onChange={(e) => setStatus(e.target.value)}>
                            <option value=''>Select status</option>
                            <option value='alive'>Alive</option>
                            <option value='dead'>Dead</option>
                            <option value='unknown'>Unknown</option>
                        </select>
                    </div>
                </div>
            </form>

            <div className='row gy-4'>
                <p className='lead text-center mb-5'>Showing {count} character(s) and {pages} page(s)</p>
                {characters?.map((character, index) => (
                    <CharactersCard
                        key={index}
                        id={character.id}
                        name={character.name}
                        src={character.image}
                        alt={character.name}
                        status={character.status}
                    />
                ))}
            </div>
            {characters &&
                <Pagination
                    nextPage={nextPageUrl ? nextPage : null}
                    prevPage={prevPageUrl ? prevPage : null}
                    goToPage={goToPage}
                    pages={pages}
                />
            }
        </div>
    )
}

export default Characters
