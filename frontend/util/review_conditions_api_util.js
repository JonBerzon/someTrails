export const createConditions = conditions => {
    return $.ajax({
        method: "POST",
        url: "api/review_conditions",
        data: {conditions}
    })
}