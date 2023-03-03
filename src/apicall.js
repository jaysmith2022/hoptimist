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


export const getSingleBrewery = (brewID) => {
    return fetch(
      `https://api.openbrewerydb.org/breweries/${brewID}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error("There has been a problem.");
      } else {
        return response.json();
      }
    });
  };