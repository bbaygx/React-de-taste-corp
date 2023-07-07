import React, {useState} from 'react'
import { SearchInput} from "./"
import {FiShoppingCart} from "react-icons/fi"
import {MdDiscount} from "react-icons/md"
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai"

const Navbar = () => {

    const [openSearch, setOpenSearch] = useState(false)
    const [like, setLike] = useState(false)

    const openSearchToogle = () => {
        setOpenSearch(prev => !prev)
    }
    const likeToogle = () => {
        setLike(prev => !prev)
    }

    return (
        <>
    {/* Alert Info */}
    <div class="bg-gradient-to-r m-2 rounded-md from-purple-500 to-pink-500  flex justify-center items-center gap-3 py-3">
         <MdDiscount className='text-xl text-yellow-400'/>
        <span className='text-sm font-bold text-slate-200'>Promo 20%</span>
    </div>
        {/* Sign in */}
        <div class=" mx-2 px-3 bg-base-100 container">
  <a class="normal-case text-sm font-semibold">
    <span className='text-gray-600 '>+62 </span> 858-7984-4424
 </a>
</div>

            <nav class=" bg-base-100 shadow-md">
                <div className="navbar container m-auto">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Homepage</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                    <a class="font-bold normal-case text-xl">De Taste Food</a>
                </div>
                <div class="navbar-center">
                </div>
                <div class="navbar-end">
                    <button class="btn btn-ghost btn-circle" onClick={openSearchToogle}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"  /></svg>
                    </button>
                    <button class="btn btn-ghost btn-circle" onClick={likeToogle}>
                        <div class="indicator">
                            {like ? <AiFillHeart className='w-5 h-5'/> : <AiOutlineHeart className='w-5 h-5'/>}
                            <span class="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                    <button class="btn btn-ghost btn-circle">
                        <div class="indicator">
                            <FiShoppingCart className='w-5 h-5'/>
                            <span class="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
                </div>
            </nav>
            <SearchInput openSearch={openSearch}/>
        </>
    )
}

export default Navbar