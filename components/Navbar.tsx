import Link from "next/link"
import Image from "next/image"
import CustomButton from "./CustomButton"

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link href="/" className="flex justify-center items-center">
                <Image 
                    src="/pokeball.png"
                    alt="Car Hub Logo"
                    width={30}
                    height={30}
                    className="object-contain"
                />
                <h1 className="font-bold text-3xl px-1">PokèMount</h1>
            </Link>
            
            <CustomButton 
                title="Sign in"
                btnType="button"
                containerStyles="text-primary-black font-semibold rounded-full bg-white min-w-[130px] hover:cursor-not-allowed"
            />
        </nav>
    </header>
  )
}

export default Navbar