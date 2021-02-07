export const countries = "/countries"
export const sum = "/summary"

export function countryStatusTotalRoute(country,status){
    return `/total/country/${country}/status/${status}`
}
export function countryDayOneRoute(country,status){
    return `/dayone/country/${country}/status/${status}`
}

