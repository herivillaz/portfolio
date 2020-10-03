import React from 'react'

function Portcard({
    picture,
    link,
    github,
    description,
    handleClick
}) {

    return (
        <>
        <div className="col-lg-4 port-card">
            <img onClick={handleClick} className="portfolio" data-toggle="modal" data-target="#exampleModalCenter"
                src={picture} width="300px"
                height="200px" alt=""></img>
            <a className="btn title btn-info"
                href={github} target="_blank">Code</a><a className="btn title btn-primary"
                    href={link} target="_blank">{description}</a>
        </div>
        <div className="col-lg-2"></div>
        
        </>
    )
}

export default Portcard