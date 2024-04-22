/*import React from 'react'

const ConditionChild = (props) => {
  return (
    <div>
      <h3>Condtion rendering with props</h3>
      {props.isVisible?(<p>Message is visible</p>)
      :(<p>Message is not visible</p>)}
    </div>
  )
}

export default ConditionChild*/

//with destructing
import React from 'react'

const ConditionChild = ({isVisible}) => {
  return (
    <div>
      <h3>Condition rendering with destructing</h3>
      {isVisible &&<p>Message is visible</p>}
      {!isVisible && <p>Message is not visible</p>}
    </div>
  )
}

export default ConditionChild

