import './Button.css'
import { Link } from 'react-router-dom'
import React from 'react'

export function Button() {
    return(
        <Link to="sign-up">
            <button className='btn'>Sign Up</button>
        </Link>
    )
}