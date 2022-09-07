import React from 'react'
import {Link } from 'react-router-dom'
import './Navigation.css'

type Props = {}

export default function Navigation(props:Props) {
    return (
    <div className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
    </div>
)
}
