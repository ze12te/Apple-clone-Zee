import React from 'react'
import logo from "../images/icons/logo.png";
import search from "../images/icons/search-icon.png";
import cart from "../images/icons/cart.png";
function Header() {
  return (
    <div>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <a className="navbar-brand mx-auto" href="#">
              <img src={logo}></img>
            </a>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/mac/">
                    Mac
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link js-scroll-trigger"
                    href="https://www.apple.com/ipad/"
                  >
                    ipad
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link js-scroll-trigger"
                    href="https://www.apple.com/iphone/"
                  >
                    iphone
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link js-scroll-trigger"
                    href="https://www.apple.com/watch/"
                  >
                    watch
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link js-scroll-trigger"
                    href="https://www.apple.com/tv/"
                  >
                    tv
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link js-scroll-trigger"
                    href="https://www.apple.com/music/"
                  >
                    Music
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link js-scroll-trigger"
                    href="https://support.apple.com/"
                  >
                    Support
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/search/">
                    <img src={search}></img>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/cart/">
                    <img src={cart}></img>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header







        