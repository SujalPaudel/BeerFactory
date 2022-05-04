import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";

export default function ListBeer() {
    const [page, setPage] = useState(1);
    const [beers, setBeers] = useState([]);
    const getURL = `https://api.punkapi.com/v2/beers?page=${page}&per_page=10`

    useEffect(() => {
        fetch(getURL)
            .then(res => res.json())
            .then(data => setBeers(beers.concat(data)))
    }, [page]);



    return (
        <>
            <div class="row main-row">
                     {beers.length > 0 ? beers.map((item) => {
                        return <div class="col-md-6 col-lg-12 py-3"> <div className="card shadow-sm bg-white rounded hover-overlay">
                            <div className="card-body mask">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img
                                            src={item.image_url}
                                            width="30em"
                                            data-tip={`ingridients: ${Object.keys(item.ingredients)}`} data-for='toolTipX' data-place='top'
                                        />
                                        <ReactTooltip id="toolTipX" />
                                    </div>
                                    <div className="col-md-10" >
                                        <div className="card-content">
                                            <h5>{item.name}</h5>
                                            <h6>{item.tagline}</h6>
                                            <span>{item.description}</span>
                                        </div>
                                    </div>
                                </div>
                            </div></div></div>
                    }) : <img src='/spinner.svg' width="50%" />
                    }</div>
                    <button  type="button" class="btn btn-primary more" onClick={() => {
                        setPage(page + 1)
                    }}>
                        Show More
            </button>
        </>)
}

// https://api.punkapi.com/v2/beers?page=1&per_page=10