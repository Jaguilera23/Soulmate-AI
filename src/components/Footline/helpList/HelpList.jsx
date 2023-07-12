const HelpList = ({item1,item2,item3}) => {
    return (
        <div className="xs:w-[7.3rem] ">
            <ul>
                <li className="mb-6">Help Center</li>
                <li className="mb-4">{item1}</li>
                <li className="mb-4">{item2}</li>
                <li>{item3}</li>
            </ul>
        </div>
    )
}

export default HelpList