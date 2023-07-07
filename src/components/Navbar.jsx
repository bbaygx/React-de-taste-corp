import React, { useState, useRef } from 'react'
import { SearchInput } from "./"
import { FiSearch, FiShoppingCart } from "react-icons/fi"
import { MdDiscount } from "react-icons/md"
import { AiOutlineHeart, AiFillHeart, AiOutlineSearch } from "react-icons/ai"
import { HiOutlineMenuAlt2 } from "react-icons/hi"
import {BsMenuApp} from "react-icons/bs"
import {IoCall} from "react-icons/io5"


const Navbar = () => {

    const [openSearch, setOpenSearch] = useState(false)
    const [input, setInput] = useState([])
    const [like, setLike] = useState(false)

    const openSearchToogle = () => {
        setOpenSearch(prev => !prev)
    }
    const likeToogle = () => {
        setLike(prev => !prev)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(`Hasil Pencarian Dari : ${input}`)
    }

    const handleKeyDown = (e) => {

        if (e.key === 'Enter') {
            e.preventDefault()

            document.getElementById("submit").click();
        }
    }

    return (
        <>
            {/* Alert Info */}
            <div className="bg-gradient-to-r m-2 rounded-md shadow-md from-purple-500 to-pink-500  flex justify-center items-center gap-3 py-1">
                <MdDiscount className='text-xl text-yellow-400' />
                <span className='text-sm font-bold text-slate-200'>Promo 20%</span>
            </div>

            {/* Contact Info */}
            <div className="bg-base-100  flex justify-between items-center gap-3 py-4 px-4">
                <a href="#">
                    <IoCall className='text-xl ' />
                </a>
                <div className="flex-none hidden sm:block">
                    <ul className='flex gap-6'>
                        <li>
                            <a href="#">Testimonial</a>
                        </li>
                        <li>
                            <a href="#">Tentang Kami</a>
                        </li>
                    </ul>
                </div>
            <div className="flex gap-6">
                <span className='text-sm font-bold text-slate-200'>Daftar</span>
                <span className='text-sm font-bold text-slate-200'>Login</span>
            </div>
            </div>



            <nav className=" bg-base-100 shadow-md">
                <div className="navbar m-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <HiOutlineMenuAlt2 className='w-5 h-5' />
                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Homepage</a></li>
                                <li><a>Portfolio</a></li>
                                <li><a>About</a></li>
                            </ul>
                        </div>
                        <a className="font-bold normal-case text-base lg:text-xl">De Taste Food</a>

                        <div className="dropdown dropdown-bottom fixed bg-base-200 cursor-pointer shadow-md mx-2 p-3 rounded-md top-52 md:hidden">
                            <BsMenuApp className='w-6 h-6' tabIndex={0}/>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>


                    </div>
                    <div className="navbar-center">
                        <div className="dropdown dropdown-bottom bg-base-100 py-1 px-5 font-medium cursor-pointer border-2 hidden md:flex md:gap-2 md:items-center md:rounded-full md:mr-3">
                            <BsMenuApp className='w-5 h-5 cursor-pointer'/>
                            <label tabIndex={0} className="m-1 cursor-pointer">Catalog</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <form className="rounded-full py-1 px-3 border-2 border-gray-200 hidden sm:inline-flex gap-3 sm:ml-6" onSubmit={handleSubmit}>
                            <button type='submit' id="submit">
                                <FiSearch className='w-5 h-5 text-gray-600' />
                            </button>
                            <input type="text" placeholder="Search..." className=" outline-none w-full max-w-xs" value={input} onKeyDown={handleKeyDown} onChange={e => setInput(e.target.value)} />
                        </form>
                    </div>
                    <div className="navbar-end">

                        <button className="btn btn-ghost btn-circle sm:hidden" onClick={openSearchToogle}>
                            <AiOutlineSearch className='w-6 h-6' />
                        </button>
                        <button className="btn btn-ghost btn-circle" onClick={likeToogle}>
                            <div className="indicator">
                                {like ? <AiFillHeart className='w-5 h-5' /> : <AiOutlineHeart className='w-5 h-5' />}
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button>
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <FiShoppingCart className='w-5 h-5' />
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>
            <SearchInput openSearch={openSearch} />
        </>
    )
}

export default Navbar