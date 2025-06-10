
import React, {useContext} from 'react'
import mycontext from './createCustom'

function Profile() {
    const userDetails = useContext(mycontext)
    console.log(userDetails)
  return (
    <div>
      Hi All i am {userDetails.name} & my friend name is {userDetails.friend}
    </div>
  )
}

export default Profile
