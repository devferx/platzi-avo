import React from 'react'
import Navbar from '@components/Navbar/Navbar'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>
        <p>this is the footer</p>
      </footer>
    </div>
  )
}

export default Layout
