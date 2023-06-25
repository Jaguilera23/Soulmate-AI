const CompanyList = ({item1,item2,item3,item4}) => {
    return (
        <div>
            <ul>
                <a href="/"><li className="mb-6">Company</li></a>
                <a href="/"><li className="mb-4">{item1}</li></a>
                <a href="/"><li className="mb-4">{item2}</li></a>
                <a href="/"><li className="mb-4">{item3}</li></a>
                <a href="/"><li>{item4}</li></a>
            </ul>
        </div>
    )
}
export default CompanyList;