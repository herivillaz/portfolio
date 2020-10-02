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


  render() {
    const handleOnClick = project => {
      console.log("isthisworking");
      this.setState({isModalOpen:true})
      this.setState({targetProject: project})
          }
    return (
      <>
        <div class="row">
          <div class="col-lg-2"></div>
          <Portcard handleClick={() => handleOnClick(projects[0])} {...projects[0]}/>
          <Portcard {...projects[1]}/>
          <Portcard {...projects[2]}/>
          <Portcard {...projects[3]}/>
          <Portcard {...projects[4]}/>
          <Portcard {...projects[5]}/>
          <Portcard {...projects[6]}/>
          <Portcard {...projects[7]}/>
          <Portcard {...projects[8]}/>
          <Portcard {...projects[9]}/>
{this.state.isModalOpen ? <Modal project={this.state.targetProject} /> : <div/>}

         <div class="col-lg-2"></div>
        </div>
        
        

      </>
    );
  }
}

export default Portfolio;
