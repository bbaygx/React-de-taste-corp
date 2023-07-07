import React from 'react'

const SearchInput = ({ openSearch }) => {
    return (
        <>
            <div className="flex justify-end px-4 py-3">
                <div className={`form-control w-full max-w-xs ${openSearch ? "block md:hidden" : "hidden"}`}>
                    <label className="label">
                        <span className="label-text">Mau makan apa hari ini ?</span>
                    </label>
                    <input type="text" placeholder="Cari disini..." className="input input-bordered w-full max-w-xs" />
                </div>
            </div>
        </>
    )
}

export default SearchInput