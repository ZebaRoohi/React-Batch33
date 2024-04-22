/*import React from 'react'

const ObjectChild = ({details}) => {
  return (
    <div>
        <h3>With Objects</h3>
      <p>{details.name}</p>
      <p>{details.age}</p>
    </div>
  )
}

export default ObjectChild*/

//or

import React from 'react'

const ObjectChild = ({name,age}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  )
}

export default ObjectChild

