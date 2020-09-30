import React from 'react'

function Portcard({
    picture,
    link,
    github,
    description
}) {

    return (
        <>
        <div class="col-lg-4 port-card">
            <img class="portfolio" data-toggle="modal" data-target="#exampleModalCenter"
                src={picture} width="300px"
                height="200px" alt=""></img>
            <a class="btn title btn-info"
                href={github} target="_blank">Code</a><a class="btn title btn-primary"
                    href={link} target="_blank">{description}</a>
        </div>
        <div class="col-lg-2"></div>
        
        </>
    )
}

export default Portcard