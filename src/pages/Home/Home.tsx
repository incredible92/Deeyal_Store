import React,{FC} from 'react'
import NavBar from '../../componenets/NavBar/NavBar'

import "./Home.scss"

const Home:FC = () => {
  return (
    <div>
      <NavBar />
      <h1 className=" welcome flex text-black-400 items-center justify-center py-8 text-4xl">Welcome To Deeyal Store</h1>
    </div>
  )
}

export default Home
