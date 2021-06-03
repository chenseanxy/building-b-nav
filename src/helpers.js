
export function coordConvert(coordString){
    return {
        lat: coordString.split(",")[1],
        lng: coordString.split(",")[0],
    }
}
