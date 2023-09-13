import { useEffect } from "react"
import useFetch from "../useFetch"

const ResidentCard = ({ url }) => {

    const [residentInfo, getResident] = useFetch(url)

    useEffect(() => {
        getResident()
    }, [])

    console.log(residentInfo)

    return (
        <article className="resident">
            <header className="resident__header">
                <img className="resident__img" src={residentInfo?.image} alt="" />
                <div className="resident__status">
                    <span className={`resident__status__circle ${residentInfo?.status}`}></span>
                    <span className="resident__status__info">{residentInfo?.status}</span>
                </div>
            </header>
            <body className="resident__body">
                <h2 className="resident__name">{residentInfo?.name}</h2>
                <hr className="resident__hr" />
                <ul className="resident__list">
                    <li className="resident__list__element">
                        <span className="resident__element">Specie: </span>
                        <span className="resident__info">{residentInfo?.species}</span>
                    </li>
                    <li className="resident__list__element">
                        <span className="resident__element">Origin: </span>
                        <span className="resident__info">{residentInfo?.origin.name}</span>
                    </li>
                    <li className="resident__list__element">
                        <span className="resident__element">Episodes where appear: </span>
                        <span className="resident__info">{residentInfo?.episode.length}</span>
                    </li>
                </ul>
            </body>
        </article>
    )
}

export default ResidentCard