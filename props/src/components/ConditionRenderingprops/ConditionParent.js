import React from 'react'
import ConditionChild from './ConditionChild'

const ConditionParent = () => {
  return (
    <div>
      <ConditionChild isVisible={false} />
    </div>
  )
}

export default ConditionParent
