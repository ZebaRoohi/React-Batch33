/*import React from 'react'
import ObjectChild from './ObjectChild'

const ParentObject = () => {
    const person={
        name:'Harry',
        age:23
    }
  return (
    <div>
      <ObjectChild details={person} />
    </div>
  )
}

export default ParentObject*/

//or

import React from 'react'
import ObjectChild from './ObjectChild'

const ParentObject = () => {
  const data={
    name:'Sam',
    age:23
  }
  return (
    <div>
      <ObjectChild {...data} />
    </div>
  )
}

export default ParentObject

