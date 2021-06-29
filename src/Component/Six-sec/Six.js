import React from 'react'
import AppelCard from "../images/Logos/appel card_large (2).png";
import logoTv from "../images/Logos/logo_tv__cfvl40z2nzau_large.png";
import logolosing from "../images/Logos/logo_losing_alice__e47dd5kopx2e_large (1).png";
function Six() {
  return (
    <div>
      <section class="sixth-heghlight-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="left-side-wrapper col-sm-12 col-md-6">
              <div class="left-side-container">
                <div class="top-logo-wrapper">
                  <div class="logo-wrapper">
                    <img src={AppelCard}></img>
                  </div>
                </div>

                <div class="description-wraper">
                  Get 3% Daily cash back on <br></br>
                  purchases from Apple when <br></br>
                  you use Apple Card.
                </div>

                <div class="links-wrapper">
                  <div>
                    <ul>
                      <li>
                        <a href="">Learn more</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="right-side-wrapper col-sm-12 col-md-6">
              <div class="right-side-container">
                <div class="logo-wrapper">
                  <img src={logoTv}></img>
                </div>
                <div class="logo-wrapper">
                  <img src={logolosing}/>
                </div>
                <div class="description-wraper">
                  Not all fantasies are fiction.
                </div>

                <div class="watch-now-wrapper">
                  <a href="#">Watch now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Six


