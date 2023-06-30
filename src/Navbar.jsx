import { useRef, useState } from 'react'
import { links, social } from './data'
import { FaBars } from 'react-icons/fa'
import logo from './assets/logo.svg'
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksRef = useRef(null)
  const linksContainerRef = useRef(null)

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  }
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Codding Addict" className="logo" />
          <button
            className="toggle-btn"
            type="button"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { url, text, id } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="social-links">
          {social.map((link) => {
            const { id, url, icon } = link
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
