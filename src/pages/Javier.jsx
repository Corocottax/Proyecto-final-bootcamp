import React from 'react'
import Santi from './Santi'

const Javier = () => {

    const users = [];

  return (
    <div>
      <h1>Soy Javier Álvarez</h1>
      <h3>Esta es mi rama</h3>
      <Santi users={users}></Santi>
    </div>
  )
}

export default Javier