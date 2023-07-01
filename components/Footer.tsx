import Image from "next/image"
import Link from "next/link"
import { footerLinks } from "@/constants"

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
        <div className="flex mad-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
            <div className="footer__links">
                {footerLinks.map((link) => (
                    <div key={link.title} className="footer__link hover:cursor-not-allowed">
                        <h3 className="font-bold">{link.title}</h3>
                        {link.links.map((item) => (
                            <p
                                key={item.title}
                                // href={item.url}
                                className="text-gray-500"
                            >
                                {item.title}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
            
        <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
            <p>@2023 PokèMount. All Rights Reserved</p>
            <div className="footer__copyrights-link">
                <p className="text-gray-500 hover:cursor-not-allowed">
                    Privacy Policy
                </p>
                <p className="text-gray-500 hover:cursor-not-allowed">
                    Terms of Use
                </p>
            </div>
        </div>

    </footer>
  )
}

export default Footer