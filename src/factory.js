export const removeComa = (data)=>{
    return parseFloat(data.replace(/,/g, ''))
}
export const removeComaPlus = (data)=>{
    return data?parseFloat(data.replace(/[,+]/g, '')):null
}