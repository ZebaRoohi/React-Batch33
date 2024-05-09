import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountries } from './countrySlice'

const Country = () => {
    const countries=useSelector((state)=>state.countries)
    const dispatch=useDispatch()
  return (
    <div>
      <h3>Countries</h3>
      <button onClick={()=>dispatch(fetchCountries())}>Fetch Countries</button>
      <div>
        {countries.data?.map((country)=>(
            <div key={country.name.common}>{country.name.common}
            <img src={country.flags.png}  alt={country.name.common} />
            </div>
        ))}
      </div>
    </div>
  )
}

export default Country
