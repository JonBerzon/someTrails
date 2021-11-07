export const fetchTrails = () => {
    return $.ajax({
        method: "GET",
        url: "api/trails"
    })
}

export const fetchTrail = (trailId) => {
    return $.ajax({
        method: "GET",
        url: `api/trails/${trailId}`
    })
}