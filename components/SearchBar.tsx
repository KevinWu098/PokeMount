"use client";

import { SearchBarProps } from '@/types';
import SearchPokemonTypes from './SearchPokemonTypes'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react'

const SearchButton = ({otherClasses}: {otherClasses: string}) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src="/magnifying-glass.svg"
            alt="magnifying glass"
            width={40}
            height={50}
            className='object-contain'
        />
    </button>
)

const SearchBar = ({ setManufacturer, setModel }: SearchBarProps) => {
    const [searchManufacturer, setSearchManufacturer] = useState('')
    const [searchModel, setSearchModel] = useState('')
    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(searchManufacturer === '' && searchModel === ''){
            return alert('Please fill in the search bar')
        }

        setModel(searchModel)
        setManufacturer(searchManufacturer)
    }

    return (
        <form className='searchbar' onSubmit={handleSearch}>
          <div className='searchbar__item'>
            <SearchPokemonTypes
              selected={searchManufacturer}
              setSelected={setSearchManufacturer}
            />
            <SearchButton otherClasses='sm:hidden pl-4' />
          </div>
          <div className='searchbar__item'>
            <Image
              src='/pokedex-icon.png'
              width={25}
              height={25}
              className='absolute w-[20px] h-[20px] ml-4 grayscale-[100%]'
              alt='pokedex icon'
            />
            <input
              type='text'
              name='model'
              value={searchModel}
              onChange={(e) => setSearchModel(e.target.value)}
              placeholder='Generation...'
              className='searchbar__input sm:border-s-2'
            />
            <SearchButton otherClasses='sm:hidden pl-4' />
          </div>
          <SearchButton otherClasses='max-sm:hidden py-1 pl-4' />
        </form>
      );
}

export default SearchBar