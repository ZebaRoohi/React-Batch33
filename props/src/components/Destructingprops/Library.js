import React from 'react'
import Books from './Books'

const Library = () => {
    const books=[
        {title:'Book1',author:'Author1'},
        {title:'Book2',author:'Author2'},
        {title:'Book3',author:'Author3'}
    ]
  return (
    <div>
        <h3>Library books info with Destructing</h3>
        {books.map(index=>
      <Books key={index} title={index.title} author={index.author} />
        )}
    </div>
   
  )
}

export default Library
