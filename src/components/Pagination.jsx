import React, { useState, useEffect } from 'react';

const Pagination = (props) => {

    const { nextPage, prevPage, goToPage, pages } = props

    const [currentPage, setCurrentPage] = useState('');

    useEffect(() => {
        setCurrentPage(1)
    }, [pages]);

    const next = () => {
        if (currentPage < pages) {
            setCurrentPage(currentPage + 1)
            nextPage()
        }
    }

    const prev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            prevPage()
        }
    }

    let pageButtons = []

    for (let i = 1; i <= pages; i++) {
        pageButtons.push(<button key={i} disabled={i == currentPage} onClick={() => {goToPage(i);setCurrentPage(i)}}>{i}</button>)
    }

    return (
        <div className='custom-paginator'>
            {currentPage < 2 ? (<button className='disabled'>Previous</button>) : (<button onClick={prev}>Previous</button>)}
            {pageButtons}
            {currentPage === pages ? (<button className='disabled'>Next</button>) : (<button onClick={next}>Next</button>)}
        </div>
    );
}

export default Pagination;
