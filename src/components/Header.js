import React from 'react'
import { IconName } from "react-icons/fa6";

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'>Towel rails</span>
            <ul className='nav'>
                <li>About</li>
                <li>Contacts</li>
                <li>Cabinet</li>
            </ul>
        </div>
    <div className='presentation'></div>
    </header>
  )
}
