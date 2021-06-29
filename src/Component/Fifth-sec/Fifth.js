import React from 'react'
import logoDcojLarge from "../images/Logos/logo__dcojfwkzna2q_large (1).png";
import TilCollection from "../images/Heroes/collection.jpg";
import logoValentin from "../images/Logos/logo_tile_valentines_day__e23rylk6u86e_medium.png";
function Fifth() {
	return (
    <div>
      <section class="fifth-heghlight-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="left-side-wrapper col-sm-12 col-md-6">
              <div class="left-side-container">
                <div class="top-logo-wrapper">
                  <div class="logo-wrapper">
                    <img src={logoDcojLarge}></img>
                  </div>
                </div>
                <div class="description-wraper">
                  Bundle up to six Apple services. And enjoy more for less.
                </div>
                <div class="links-wrapper">
                  <ul>
                    <li>
                      <a href="">Learn more</a>
                    </li>
                    <li>
                      <a href="">
                        Try it free <sup>3</sup>
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="left-side-image-wrapper">
                  <img src={TilCollection} alt=""></img>
                </div>
              </div>
            </div>
            <div class="right-side-wrapper col-sm-12 col-md-6">
              <div class="right-side-container">
                <div class="logo-wrapper">
                  <img src={logoValentin}></img>
                </div>

                <div class="Love-title">For lovers of Apple.</div>

                <div class="links-wrapper">
                  <ul>
                    <li>
                      <a href="">shop gifts</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Fifth


