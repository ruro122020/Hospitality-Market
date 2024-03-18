import React, { useEffect, useState } from 'react'
import Form from './Form'
const DServices = () => {
  const [createService, setCreateService] = useState(false)


  useEffect(() => {

  }, [])


  return (
    <div>
      <h1>Services</h1>
      <button onClick={() => setCreateService(true)}> + Service</button>
      {createService && <Form />}
    </div>
  )
}

export default DServices
