export const removeComa = (data)=>{
    return parseFloat(data.replace(/,/g, ''))
}