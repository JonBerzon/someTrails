export const createConditions = conditions => {
    return $.ajax({
        method: "POST",
        url: "api/review_conditions",
        data: {conditions}
    })
}

export const updateConditions = conditions => {
    return $.ajax({
        method: "PATCH",
        url: `api/review_conditions/1`,
        data: {conditions}
    })
}