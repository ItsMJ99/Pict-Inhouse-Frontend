import React, { useEffect } from 'react'

function Reports() {
  return (
    <>
    {useEffect(()=>{
          document.title = "Reports"
      })}
    <div>
      Reports
    </div>
    </>
  )
}

export default Reports
