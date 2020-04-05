import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const NavContainer = styled.nav`
  	display: flex;
		justify-content: flex-end;
    align-items: center;
    margin: 0;
    border: none;
		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
			overflow: hidden;
			
		}
		li {
  		float: left;
			margin: 45px;
		}
		li a {
			display: block;
			color: #949393;
			text-align: center;
			padding: 16px;
			text-decoration: none;
		}


  `


const links = [
  { href: 'https://zeit.co/now', label: 'About' },
  { href: 'https://github.com/zeit/next.js', label: 'Resume' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <NavContainer>
    <ul>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </NavContainer>
)

export default Nav
