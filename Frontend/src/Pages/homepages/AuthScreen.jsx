import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"


const AuthScreen = () => {
    const [email, setEmail] = useState("")
  return (
    <div className="hero-bg relative">
        {/* NavBar */}
        <header className="max-w-6x1 mx-auto flex items-center justify-between p-4">
                <img src="/netflix-logo.png" alt="logo" className="w-52"/>
                <Link to={"/login"} className="text-white bg-red-600 py-1 px-2 rounded">
                Sign In

                </Link>
            </header>

            {/* hero section */}

            <div className="flex flex-col items-center justify-center text-center py-40 text-white mx-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Unlimited movies, Tv Shows, and more</h1>
                <p className="text-lg mb-4">Watch anywhere, Cancel anytime</p>
                <p className="mb-4">Ready to watch? Enter your email to create or restart your membership</p>

                <form className="flex flex-col md:flex-row gap-4 w-1/2">
                
                       
                        <input type="text" 
                        className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white
                        focus:ontline-none focus-ring" placeholder="Email Address" id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                        <button className='bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center'>
						Get Started
						<ChevronRight className='size-8 md:size-10' />
					    </button>
                    
                </form>
             
            </div>
   
                {/* Separator Component */}

                <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />
                

                {/* 1st section */}

                <div className="py-10 bg-black text-white">
                    <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
                        {/* leftside */}
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-4xl text-center font-extrabold mb-4">Enjoy on your Tv</h2>
                            <p className="text-lg md:text-xl">
                                Watch on Smart TVs, Playstation, Xbox, Chromcast, Apple TV, Blu-ray player, and more
                            </p>
                        </div>
                        {/* rightside */}
                        <div className="flex-1 relative">
                            <img src="/tv.png" alt="Tv image" className="mt-4 z-20 relative"/>
                            <video className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10" 
                            playsInline
                            autoPlay={true}
                            muted
                            loop>
                                <source src="/hero-vid.m4v" type="video/mp4"/>
                            </video>
                        </div>

                    </div>
                    <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />
                </div>

    </div>
  )
}

export default AuthScreen