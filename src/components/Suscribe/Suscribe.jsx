const Suscribe = () => {
    return (
        <div>
            <input
            type="email"
            placeholder="Enter your email address"
            required
            className="px-8 py-4 rounded-full  font-Inter text-subtitlePurple border gap-2 bg-transparent border-subtitlePurple border-solid"
        />
        <button type="submit" className="px-8 py-4 rounded-full bg-subtitlePurple font-Inter text-black border gap-2 ms-4" >
            Suscribe right now
        </button>

        </div>
        

    )

}

export default Suscribe;