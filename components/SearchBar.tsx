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

const SearchBar = ({ setType }: SearchBarProps) => {
    const [searchType, setSearchType] = useState('')
    // const [searchMount, setSearchMount] = useState('')
    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(searchType === ''){
            return alert('Please fill in the search bar')
        }

        setType(searchType)
        // setMount(searchMount)
    }

    return (
        <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchPokemonTypes
              selected={searchType}
              setSelected={setSearchType}
            />
            <SearchButton otherClasses='sm:hidden pl-4' />
          </div>
          {/* <div className='searchbar__item'>
            <Image
              src='/pokedex-icon.png'
              width={25}
              height={25}
              className='absolute w-[20px] h-[20px] ml-4 grayscale-[100%]'
              alt='pokedex icon'
            />
            <input
              type='number'
              name='model'
              value={searchModel}
              onChange={(e) => setSearchModel(e.target.value)}
              placeholder='3...'
              className='searchbar__input sm:border-s-2'
            />
            <SearchButton otherClasses='sm:hidden pl-4' />
          </div> */}
          <SearchButton otherClasses='max-sm:hidden py-1 pl-4' />
        </form>
      );
}

export default SearchBar