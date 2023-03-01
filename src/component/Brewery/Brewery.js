import './Brewery.css'
import { BreweryCard } from '../BreweryCard/BreweryCard'


export const Brewery = ({ breweries }) => {
    const brewCard = breweries.map(location => {
        return (
            <BreweryCard 
            id={location.id}
            name={location.name}
            city={location.city}
            state={location.state}
            address={location.street}
            key={location.id}
            />
        )
    })

    return (
        <div className='brewcard-container'>
            {brewCard}
        </div>
    )
}