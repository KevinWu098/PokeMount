import { specificMountTypes } from "@/constants";
// import { CarProps, FilterProps } from "@/types";

// export async function fetchCars(filters: FilterProps) {
//     const { manufacturer, year, model, limit, fuel } = filters

//     const headers = {
//         'X-RapidAPI-Key': '9182afcd14msh57bc0f601507e2dp172da3jsn57a86406893a',
//         'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
//     }

//     const response = await fetch(
//         `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, 
//         {
//             headers: headers,
//         }
//     )

//     const result = await response.json();

//     return result
// }

interface FilterPokemonProps {
    type?: string;
    // generation?: number;
    mount: string;
}

export async function fetchPokemon(props: FilterPokemonProps) {
    const { type, mount } = props

    const response = await fetch(
        `https://pokeapi.co/api/v2/type/${type}`
    )

    const result = await response.json()
    const filteredNames = result['pokemon']
                            .map((pokemon: any) => pokemon.pokemon.name)
                            .filter((pokemon: string) => {
                                return specificMountTypes[mount].includes(pokemon)
                            })
    const filteredIDs = result['pokemon']
                            .filter((pokemon: any) => {
                                return filteredNames.includes(pokemon.pokemon.name)
                            })
                            .map((pokemon: any) => pokemon.pokemon.url)
                            .map((url: string) => url.match(/\/(\d+)\/$/)?.[1] ?? "")
    return [filteredNames, filteredIDs]
}

// fetchPokemon({type: 'ground', mount: 'land'})

export const generatePokemonImage = (id: number) => {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return url
}

export const generatePokemonOfficialImage = (id: number) => {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    return url
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

  export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set(type, value)
    
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    return newPathname
  }