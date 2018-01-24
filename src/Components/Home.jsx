import React, {Component} from 'react';
import {Link} from 'react-router';

import Header from './Header';
import Footer from './Footer';

import iPhonePromo1 from '../Images/iPhone_Icon_Promo_AvailibleAppStore.png';
import ComputerArt from '../Images/computer_Art.jpg';
import Ewaste3 from '../Images/E-waste3.jpg';
import MapLocate from '../Images/mapLocate.png';

class Home extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    window.scrollTo(0,0);

  }

  render() {
    const mainDivStyle = {
      width: '800px',
      backgroundColor: 'white',


    }

    return (
      <div>
        <Header page = {0}/>
        <section id="headerImgIndex">
          <article>
            <div id="fixedWidth">
            </div>
          </article>

          <div class="parallax" data-velocity="-.3"></div>

          <div class="parallax" data-velocity="-.2" data-fit="525">
            <div id="fixedWidth">
              <div id="window">
                <div id="textWindow">
                  <h1> Recycle Your Electronics, Batteries, And Paint In Canada </h1>
                  <h1> </h1>
                </div>

              </div>
            </div>
          </div>
        </section>



        <div id="overviewI">

          <div id="fixedWidth">

            <div id="Drawing">
              <a href='https://itunes.apple.com/us/app/recycle-can/id1248915926?ls=1&mt=8'>

              <img src={iPhonePromo1} width="100%" height="100%" />
            </a>
          </div>
          <div id="desc">
            <div id="header3">
              <h1><b>Download The Official Recycle Can iOS App!</b></h1>
              <h1>
                <p>Recycling electronics has never been easier! Download our official iOS application for a mobile, versatile experience that seemlessly integrates Apple's Mapkit for enhanced navigational tools!</p>
                <a href='https://itunes.apple.com/us/app/recycle-can/id1248915926?ls=1&mt=8'>
                <p>Download Here</p>
              </a></h1>
            </div>
          </div>
        </div>

        <div id="fixedWidth">

          <div id="Drawing2Loc">
            <div id="leftFill">

            </div>
            <div id="rightFill">
            </div>
          </div>


        </div>

        <div id="fixedWidth">
          <div id="Drawing3">
            <img src= {ComputerArt} width="100%" height="100%" />
          </div>
          <div id="desc">
            <div id="header3">
              <h1><b>Why Recycle Your Electronics, Batteries, Or Any Household Hazardous Materials?</b></h1>
              <h1>
                <p>In the 21st century, many electronics, batteries, and paint contain toxic materials such as lead, mercury, or most commonly, toxic fumes, that can get released into the environment when improperly disposed of. These toxic qualities render the materials in question unfit to be disposed of in traditional landfills. With Recycle Can, we provide a nationwide tool that gives the nearest location to recycle your potentially dangerous household materials in a safe, government approved collection site.</p></h1>
              </div>
            </div>
          </div>


          <div id="fixedWidth">

            <div id="Drawing2Loc">
              <div id="leftFill">

              </div>
              <div id="rightFill">
              </div>
            </div>


          </div>


          <div id="fixedWidth">
            <div id="Drawing">
              <img src={Ewaste3} width="100%" height="100%" />
            </div>
            <div id="desc3">
              <div id="header3">
                <h1><b>How E-waste affects the world.</b></h1>
                <h1>

                  <p>The fastest growing household hazardous material is electronic waste, otherwise known as e-waste. With consumers seemingly replacing their old electronics such as their phones every two years, there is an ever growing pile of e-waste needing to be disposed of. In many instances, such waste is picked apart by workers in third world countries for its rare metals but thus exposing them to dangerous elements such as toxic fumes, lead, mercury, or even arsenic.</p></h1>

                </div>
              </div>
            </div>

            <div id="fixedWidth">

              <div id="Drawing2">
                <Link to='/About'>
                <div id="Gallery">
                  <h1>About</h1>
                </div>
              </Link>

            </div>

            <div id="desc2">
              <div id="header4">
                <h1>See who we are and contact us for any questions</h1>

              </div>
            </div>
          </div>

          <div id="fixedWidth">
            <div id="Drawing">
              <img src={MapLocate} width="100%" height="100%" />
            </div>
            <div id="desc">
              <div id="header3">
                <h1><b>Use Our Locator To Find A Nearby Collection Site.</b></h1>
                <h1>
                  <a href='E-waste.html'>
                    <p>For E-Waste</p>
                  </a>
                  <a href='Batteries.html'>
                    <p>For Batteries</p>

                  </a>

                  <a href='Paint.html'>
                    <p>For Other Hazardous Materials</p>

                  </a>
                </h1>
              </div>
            </div>

          </div>




          <Footer />

        </div>

      </div>

    );
  }


}

export default Home;
