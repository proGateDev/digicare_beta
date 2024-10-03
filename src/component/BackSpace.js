import React from 'react'

function BackSpace() {
  return (
    <div>
           <button className="text-sm text-gray-500 hover:text-gray-700" onClick={() => window.history.back()}>
              ← Back
            </button>
    </div>
  )
}

export default BackSpace