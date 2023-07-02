"use client";

import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { PokemonCardProps } from './PokemonCard';
import { generatePokemonImage } from '@/utils';
import CustomButton from './CustomButton';

interface PokemonDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    pokemonID: number;
    pokemonName: string;
    props: PokemonCardProps
}

const PokemonDetails = ({ isOpen, closeModal, props, pokemonID, pokemonName }: PokemonDetailsProps) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200' leaveFrom='opacity-100' leaveTo='opacity-0'>
                        <div className="fixed inset-0 bg-black bg-opacity-25"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100' leave='ease-in duration-200' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'>
                            <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                                <button
                                    type='button'
                                    className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                                    onClick={closeModal}
                                >
                                    <Image src="/close.svg" alt="close" width={20} height={20} className='object-contain'/>
                                </button>

                                <div className="flex-1 flex flex-col gap-3">
                                    <div className='relative w-full h-40 rounded-lg'>
                                        <Image src={generatePokemonImage(pokemonID)} alt='car model' fill sizes='100vw' priority className='object-contain z-10'/>
                                        <div className="relative w-full h-40 bg-pattern hue-rotate--232 bg-cover bg-center rounded-lg"></div>
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col gap-2">
                                    <h2 className='font-semibold text-xl capitalize'>
                                        {pokemonName}
                                    </h2>

                                    <div className="mt-3 flex flex-wrap gap-4">
                                        {Object.entries(props).map(([key, value]) => (
                                            <div className="flex justify-between gap-5 w-full text-right" key={key}>
                                                <h4 className='text-gray capitalize'>{key.replace(/([a-z])([A-Z])/g, '$1 $2')}</h4>
                                                <p className='text-black-100 font-semibold'>
                                                    {typeof(value as string | number) === 'string' 
                                                        ? (value as string).split(' ')
                                                                           .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
                                                                           .join(' ') 
                                                        : value as number}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="w-full flex-center gap-5">
                                    <CustomButton 
                                        title="Buy or Rent"
                                        btnType="button"
                                        containerStyles="bg-red-600 rounded-full text-white drop-shadow-md hover:cursor-not-allowed"
                                    />
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default PokemonDetails