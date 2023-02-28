export const getBreweries = () => {
    return fetch('https://api.openbrewerydb.org/breweries')
    .then(response => {
        if(!response.ok) {
            throw new Error('Unable to get Breweries')
        } else {
            return response.json()
        }
    })
}