import { useEffect, useRef, useState } from 'react';
import './App.css'
import useFetch from './useFetch'
import ResidentCard from './components/ResidentCard';
import getRandomNumber from './utils/getRandomNumber';
import LocationCard from './components/LocationCard';

function App() {

  const [inputValue, setInputValue] = useState(getRandomNumber(126))

  const url = `https://rickandmortyapi.com/api/location/${inputValue || undefined}`; // 
  const [locationInfo, getLocation, hasError, isLoading] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [inputValue])

  const inputSearch = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    setInputValue(inputSearch.current.value.trim())
  }

  console.log(locationInfo)

  return (
    <div className='all__render'>
      <img src="https://i.redd.it/o6cwlzg3exk41.png" alt="" />
      <form className="input__button" onSubmit={handleSubmit}>
        <input className="input__bar" ref={inputSearch} type="text" />
        <button className='search__button'>Search a Dimension</button>
      </form>
      <div className='all'>
        {
          locationInfo?.residents.length === 0
            ? <h2>Hey! No one is living here, try another dimension from 1 to 126!🧪</h2>
            : isLoading
              ? <h2>The dimension is loading...🧪</h2>
              : (
                hasError
                  ? <h2>Hey! At the moment we only have from dimension 1 to 126.</h2>
                  : (
                    <div>
                      <div className='general__location'>
                        <LocationCard
                          locationInfo={locationInfo}
                        />
                      </div>
                      <div className='cards'>
                        {
                          locationInfo?.residents.map(url => (
                            <ResidentCard
                              key={url}
                              url={url}
                            />
                          ))
                        }
                      </div>
                    </div>))
        }
      </div>
    </div>
  )
}

export default App
