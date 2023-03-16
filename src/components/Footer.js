import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/fontawesome-free-brands'

const Footer = () => {
  return (
    <footer>
        <a href="https://github.com/JSammy23/memory-game"
        target='_blank' rel="noreferrer">
            by JSammy23
            <FontAwesomeIcon className='logo' icon={faGithub} />
        </a>
    </footer>
  )
}

export default Footer
