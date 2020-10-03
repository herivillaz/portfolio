import React from "react";

function Modal(props) {
    return (

            <div onClick={props.closeModal} style={{display:'block'}} className="modal" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body" style={{boxShadow: '0px 0px 25px 15px darkslategrey'}}>
                            <h3>{props.project.description}</h3>
                            <img className="portfolio" data-toggle="modal" data-target="#exampleModalCenter"
                                src={props.project.url} width="300px"
                                height="200px" alt="" />
                            <p>{props.project.project}</p>
                            <p>You can visit the Github version to check the code in the "Code button" or try the deployed application in the "name of the project button"</p>

                        </div>
                        <button style={{position: 'absolute',top: '5px', right: '10px'}} onClick={props.closeModal}><i>X</i></button>
                    </div>
                </div>
            </div>


    )
}

export default Modal