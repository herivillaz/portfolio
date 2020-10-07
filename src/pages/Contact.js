import React, { Component } from "react";

class Contact extends Component {
  state = {
    // search: "",
    // breeds: [],
    // results: [],
    // error: ""
  };

  
  render() {
    return (
      <>
      <a class="social-link" href="https://www.linkedin.com/in/herivillaz/" target="_blank" rel="noopener noreferrer"><i
            class="fab fa-linkedin-in fa-4x"></i></a>
            <span class="last_span"></span>
            <a class="social-link" href="https://github.com/herivillaz" target="_blank"rel="noopener noreferrer"><i class="fab fa-github fa-4x">
          </i></a>
        <span class="last_span"></span>
        <a class="social-link" href="https://instagram.com/herivillaz" target="_blank"rel="noopener noreferrer"><i
            class="fab fa-instagram fa-4x"></i></a>

      <form action="mailto:herivillaz@gmail.com" method="POST">
    <div class="form-group">
      <label for="exampleFormControlInput1">Name</label>
      <input type="text" class="form-control" id="exampleFormControlInput1"  placeholder="Heribert Villazana"/>
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">Email address</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Message</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
name="message"         placeholder="Your message here"></textarea>
    </div>
    <a href="index.html"><button class='bg-info'>submit</button></a>
  </form>
  <div class="resume">
  <a href="https://docs.google.com/document/d/174KZCil2UXMVn0QCU0R8VyFTPQjjlgJRa9nJnYxH5lM/edit?usp=sharing"><button class='bg-info' id='resume'>Download My Resume Here</button></a>
  </div>
  </>
    );
  }
}

export default Contact;
