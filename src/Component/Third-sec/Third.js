import React from 'react'

import logoHero from "../images/icons/logo_hero__trsrpeu6koqy_large.png";
function Third() {
  return (
    <div>
       <section class="third-highlight-wrapper">
        <div class="container">
            <div class="top-logo-wrapper">
                <div class="logo-wrapper">
              <img src={logoHero}></img>
                </div>
            </div>
            <div class="description-wrapper">
                The future of health is on your wrist.
            </div>
            <div class="links-wrapper">
                <ul>
                    <li><a href="">Learn more</a></li>
                    <li><a href="">Buy</a></li>
                </ul>
            </div>

        </div>
    </section> 
    </div>
  )
}

export default Third

