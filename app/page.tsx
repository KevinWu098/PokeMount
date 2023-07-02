"use client"

import { Hero, SearchBar, CustomFilter, PokemonCard, ShowMore } from '@/components'
import { filterMountTypes } from '@/constants';
import { fetchPokemon } from '@/utils'
import { useEffect, useState } from 'react';

import Image from 'next/image';

export default function Home() {
  const [allPokemon, setAllPokemon] = useState([])
  const [allIDs, setAllIDs] = useState([])
  const [loading, setLoading] = useState(false)

  const [type, setType] = useState('')
  const [mount, setMount] = useState('')

  // const [limit, setLimit] = useState(10)

  const getPokemon = async () => {
    setLoading(true);

    try {
      const result = await fetchPokemon({
        type: type || 'normal',
        mount: mount || 'land',
      });

      setAllPokemon(result[0])
      setAllIDs(result[1])
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPokemon()
  }, [type, mount])

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id='discover'>
        <div className="home__text-container">
          <h1 className='text-4xl font-extrabold'>
            Pokè Mounts
          </h1>
          <p>Discover mounts that'll accelerate your Pokèjourney!</p>
        </div>

        <div className='home__filters'>
          <SearchBar 
            setType={setType}
            // setMount={setMount}
          />
        </div>

        <div className='home__filter-container'>
          <CustomFilter title="Mount Types" options={filterMountTypes} setMount={setMount}/>
        </div>

        {allPokemon.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>
              {allPokemon?.map((allPokemon, index) => (
                <PokemonCard 
                  key={`pokemon-${index}`} 
                  pokemonName={allPokemon} 
                  pokemonID={allIDs[index]} />
              ))}
            </div>

            {/* {loading && (
              <div className='flex justify-center pt-10'>
                <Image 
                  src="/loading.gif"
                  alt="loading"
                  width={50}
                  height={50}
                  className='object-contain'
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allPokemon.length}
              setLimit={setLimit}
            /> */}
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  )
}
