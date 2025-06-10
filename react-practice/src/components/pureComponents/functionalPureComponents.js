import React from 'react'

const FunctionalPureComponents = ({name}) => {
    console.log('functional')
  return (
    <div>
     {name}
    </div>
  )
}

export default React.memo(FunctionalPureComponents)
