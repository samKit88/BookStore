import React, { useState } from 'react'

const SearchImage = ({ getText }) => {
  const [inputText, setInputText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    getText(inputText)
  }
  return (
    <div>
      <div className="max-w-sm rounded-overflow-hidden my-10 mx-auto">
        <form onSubmit={onSubmit} className="w-full max-w sm">
          <div className="flex itmes-center border-b-2 border-teal-500 py-2">
            <input
              type="text"
              placeholder="Search Image"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              onChange={(e) => {
                setInputText(e.target.value)
              }}
            />
            <button
              type="Submit"
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchImage
