const CartWidget =() =>{
    return(
        <button className="flex justify-center items-center relative border-[0.5px] rounded-full border-subtitlePurple w-[9.625rem] h-[2.5rem] text-[14px]">
            <p className='me-4 text-subtitlePurple'>View Cart</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 relative text-subtitlePurple">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <div className="w-3 h-3 bg-red-500 border-solid rounded-full top-2 flex justify-center items-center absolute left-[125px] bottom-3">
                <p className="text-center text-xxs ">1</p>
            </div>
        </button>
        
    )
}

export default CartWidget;