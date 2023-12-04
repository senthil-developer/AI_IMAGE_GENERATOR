import React from 'react'

type Props = {}

const page = ({params}: any) => {
  return (
    <div key={params.id}>
        {params.id}
    </div>
  )
}

export default page