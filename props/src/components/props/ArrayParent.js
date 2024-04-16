import React from 'react'
import ArrayChild from './ArrayChild'

const ArrayParent = () => {
     let colors=['red','blue','green','orange']
  return (
    <div>
      <ArrayChild colorList={colors} />
    </div>
  )
}

export default ArrayParent
