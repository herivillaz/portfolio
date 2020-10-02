import React from "react";

function Modal(props) {
    return (

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">

                        <div class="modal-body">
                            <h3>{props.project.description}</h3>
                            <img class="portfolio" data-toggle="modal" data-target="#exampleModalCenter"
                                src={props.project.url} width="300px"
                                height="200px" alt="" />
                            <p>{props.project.project}</p>
                            <p>You can visit the Github version to check the code in the "Code button" or try the deployed application in the "name of the project button"</p>

                        </div>
                    </div>
                </div>
            </div>


    )
}

export default Modal