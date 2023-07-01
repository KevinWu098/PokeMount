"use client"

import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from '@/components'
import { fuels, yearsOfProduction } from '@/constants';
import { fetchCars } from '@/utils'
import { useEffect, useState } from 'react';
import { CarState } from "@/types";

import Image from 'next/image';

export default function Home() {
  const [allCars, setAllCars] = useState<CarState>([])
  const [loading, setLoading] = useState(false)
  
  const [manufacturer, setManufacturer] = useState("")
  const [model, setModel] = useState("")

  const [fuel, setFuel] = useState("")
  const [year, setYear] = useState(2022)

  const [limit, setLimit] = useState(10)

  const getCars = async () => {
    setLoading(true);

    try {    
      const result = await fetchCars({
        manufacturer: manufacturer || '',
        year: year || 2022,
        fuel: fuel || '',
        limit: limit || 10,
        model: model || '', 
      });

      setAllCars(result)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCars()
  }, [fuel, year, limit, manufacturer, model])

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id='discover'>
        <div className="home__text-container">
          <h1 className='text-4xl font-extrabold'>
            Pokè Mounts
          </h1>
          <p>Explore mounts that'll elevate your Pokèjourney</p>
        </div>

        <div className='home__filters'>
          <SearchBar 
            setManufacturer={setManufacturer}
            setModel={setModel}
          />

          <div className='home__filter-container'>
            <CustomFilter title="Mount Types" options={fuels} setFilter={setFuel}/>
            {/* <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear}/> */}
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((pokemon, index) => (
                <CarCard key={`pokemon-${index}`} car={pokemon} />
              ))}
            </div>

            {loading && (
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
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
