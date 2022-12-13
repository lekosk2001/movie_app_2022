import React from 'react'
import {Link } from 'react-router-dom'
import './Navigation.css'

type Props = {}

export default function Navigation(props:Props) {
    return (
    <div className='nav'>
        <Link to='/movie_app_2022'>Home</Link>
        <Link to='/movie_app_2022/about'>About</Link>
    </div>
)
}
