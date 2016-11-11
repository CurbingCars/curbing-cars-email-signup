import React, { Component } from 'react';
import './App.css';
import $ from 'jquery'; 

class App extends Component {

  
  componentDidMount() {

    this.startCycle();

  }

  handleKeyPress() {
    $('.button-submit-hidden').css("visibility", "visible");
    
    let inputValue = $('.email-value').val();

    if (inputValue === '' || inputValue.length < 2) {
      $('.button-submit-hidden').css("visibility", "hidden");
    }
  }

  startCycle() {
    const images = [
      {
        imageURL: "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(https://media.giphy.com/media/f8uavkHgiUfUk/giphy.gif) no-repeat center center fixed",
      },

      {
        imageURL: "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(https://media.giphy.com/media/SXC4WO8YO3eWQ/giphy.gif) no-repeat center center fixed"
      },

      {
        imageURL: "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(https://i.kinja-img.com/gawker-media/image/upload/s--muaRVrvx--/c_fit,fl_progressive,q_80,w_636/iyxpdeglhcmbetmgnrlw.gif) no-repeat center center fixed"
      },

      {
        imageURL: "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(https://media.giphy.com/media/SYflwdCnpVAY0/giphy.gif) no-repeat center center fixed"
      },

      {
        imageURL: "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(https://media.giphy.com/media/sNZnfW4O6Mrks/giphy.gif) no-repeat center center fixed"
      },

      {
        imageURL: "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(https://media.giphy.com/media/YlQQYUIEAZ76o/giphy.gif) no-repeat center center fixed"
      },

      {
        imageURL: "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(https://media.giphy.com/media/10dqiIs9xs5K2k/giphy.gif) no-repeat center center fixed"
      },

      {
        imageURL: "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(https://media.giphy.com/media/JPFWKEzZk8yT6/giphy.gif) no-repeat center center fixed"
      },

      {
        imageURL: "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(https://thumbs.mic.com/OTg2MmQ4YzE2ZSMvVVIzWlRTX3lSbWJXRW10cFp0dkIxV3p1MHVJPS9maXQtaW4vOTAweDkwMC9maWx0ZXJzOm5vX3Vwc2NhbGUoKTpxdWFsaXR5KDgwKS9odHRwOi8vaW1hZ2VzLm1pYy5jb20vanhjcmlpeGZjcHFhNzQ0ZWl3YWo4enN0d2s3ZHhjbzh3aG9ycndqamZpbXVqaWt0am9meDF6dXhwZGc2ZTBwci5naWY.gif) no-repeat center center fixed"
      }

    ]

    let randomShow = images[Math.floor(Math.random()*images.length)];
    setTimeout(function() {
      this.switchImage(randomShow);
    }.bind(this), 10000);
  }

  switchImage(randomShow) {
    $('.App').css("background", randomShow.imageURL);
    $('.App').css("background-size", "cover");
    this.startCycle();
  }

  render() {
    return (
      <div className="App">
        <div className="body-elements">
          <h1 className="App-intro">
            Curbing Cars
          </h1>
          <div className="form-section">
            <h3 className="description">
              The future of transportation is here. Catch up with our newsletter.
            </h3>
            <form action="http://twitter.us14.list-manage1.com/subscribe?u=da91baa164fc7cb7ffcf9486a&id=1c4b5cf137" onKeyDown={this.handleKeyPress} method="post">
              <input type="hidden" name="u" value="da91baa164fc7cb7ffcf9486a"></input>
              <input type="hidden" name="id" className="email-key" value="c31a3bf483"></input>
              <input placeholder="your email" name="MERGE0" id="MERGE0" className="email-value" type="email">
              </input>
              <br />
              <button type="submit" className="button-submit-hidden" name="submit">Submit</button>
              <input type="hidden" name="ht" value="0f24e51a33aec15b6ddd0a39ee63c5f458af00b3:MTQ3NjQ3OTkzNC40MDI2"></input>
              <input type="hidden" name="mc_signupsource" value="hosted"></input>
            </form>
          </div>
          <div className="find-outmore">
            <h5>Find out more at <a href="http://www.curbingcars.com/">curbingcars.com</a></h5>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
