export const fetchParks = () => {
    return $.ajax({
        method:"GET",
        url: "api/parks"
    })
}

export const fetchPark = (parkId) => {
    return $.ajax({
        method:"GET",
        url:`api/parks/${parkId}`
    })
}

