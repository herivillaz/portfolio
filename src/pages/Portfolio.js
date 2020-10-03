import React, { Component } from "react";
import API from "../utils/API";
import Portcard from "../components/Portcard/Portcard";
import projects from "../data/project.json"
import Modal from "../components/Modal"


class Portfolio extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0,
    isModalOpen: false,
    targetProject: {}
  };




  // When the component mounts, load the next dog to be displayed
  // componentDidMount() {
  //   this.loadNextDog();
  // }
  closeModal = () => {
    this.setState({ isModalOpen: false })
  }

  handleOnClick = project => {
    console.log("isthisworking");
    this.setState({ isModalOpen: true, targetProject: project }, () => console.log(this.state))
  }

  render() {

    return (
      <>
      <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 bg-light text-dark">
            <p className="textport">These are my Featured Projects made with learning and practicing.
        <br />You can see the information by clicking on the image of the project.
              <br />Or You can click on the buttons to go to the Code and Deployed version.
            </p>
          </div>
          <div className="col-lg-2"></div>
        </div>
        <div className="row">
          <div className="col-lg-2"></div>
          <Portcard handleClick={() => this.handleOnClick(projects[0])} {...projects[0]} />
          <Portcard handleClick={() => this.handleOnClick(projects[1])} {...projects[1]} />
          <Portcard handleClick={() => this.handleOnClick(projects[2])} {...projects[2]} />
          <Portcard handleClick={() => this.handleOnClick(projects[3])} {...projects[3]} />
          <Portcard handleClick={() => this.handleOnClick(projects[4])} {...projects[4]} />
          <Portcard handleClick={() => this.handleOnClick(projects[5])} {...projects[5]} />
          <Portcard handleClick={() => this.handleOnClick(projects[6])} {...projects[6]} />
          <Portcard handleClick={() => this.handleOnClick(projects[7])} {...projects[7]} />
          <Portcard handleClick={() => this.handleOnClick(projects[8])} {...projects[8]} />
          <Portcard handleClick={() => this.handleOnClick(projects[9])} {...projects[9]} />
          <div className="col-lg-2"></div>
         {this.state.isModalOpen && <Modal closeModal={this.closeModal} project={this.state.targetProject} />}
        </div>



      </>
    );
  }
}

export default Portfolio;
