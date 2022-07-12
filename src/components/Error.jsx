import React from 'react'

function Error({children}) {
  return (
    <div className="bg-red-800 text-white text-center uppercase p-3 font-bold mb-3 rounded">
        {children}
    </div>
  )
}

export default Error