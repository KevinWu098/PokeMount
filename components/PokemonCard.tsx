"use client";

import { useState } from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { generatePokemonOfficialImage } from "@/utils";
import PokemonDetails from "./PokemonDetails";

export interface PokemonCardProps {
    pokemonName: string;
    pokemonID: number;
}

const PokemonCard = (props: PokemonCardProps) => {
    const { pokemonName, pokemonID } = props

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {pokemonName}
                </h2>
            </div>

            <p className="flex mt-6 text-[32px] font-extrabold">
                <span className="self-start text-[14px] font-semibold">
                    <Image 
                        src='/pokedollar.png'
                        alt="Pokèdollar"
                        height={12}
                        width={12}
                        className="object-contain width: auto"
                    />
                </span>
                1000
                <span className="self-end text-[14px] font-medium">
                    /day    
                </span>
            </p>

            <div className="relative w-full h-40 my-3 object-contain">
                <Image src={generatePokemonOfficialImage(pokemonID)} alt="pokemon model" fill sizes="(max-width: 768px) 100vww" priority className="object-contain" />
            </div>

            <div className="relative flex w-full mt-2">
                {/* <div className="flex group-hover:invisible w-full justify-between text-gray">
                    Mount Type, Type, Gen
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/steering-wheel.svg" alt="steering wheel" width={20} height={20} />
                        <p className="text-[14px]">
                            {transmission === 'a' ? 'Automatic' : 'Manual'}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/tire.svg" alt="tire" width={20} height={20} />
                        <p className="text-[14px]">
                            {drive.toUpperCase()}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/gas.svg" alt="gas" width={20} height={20} />
                        <p className="text-[14px]">
                            {city_mpg} MPG
                        </p>
                    </div>
                </div> */}

                <div className="car-card__btn-container">
                    <CustomButton 
                        title="View More"
                        containerStyles="w-full py-[16px] rounded-full bg-red-600"
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                        rightIcon="/right-arrow.svg"
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>

            <PokemonDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} props={props} pokemonID={pokemonID} pokemonName={pokemonName} />
        </div>
    )
}

export default PokemonCard