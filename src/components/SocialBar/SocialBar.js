import React from 'react'
import { SocialIcon } from 'react-social-icons'

export default function SocialBar() {
  return (
    <nav className="navbar navbar-dark bg-dark SocialBar">
      <div className="container justify-content-center">
        <SocialIcon
          url="https://www.linkedin.com/in/yao-hao-lai/"
          className="mx-4"
          target="_blank"
          fgcolor="#fff"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://github.com/laiyaohao"
          className="mx-4"
          target="_blank"
          fgcolor="#fff"
          style={{ height: 35, width: 35 }}
        />
      </div>
    </nav>
  )
}