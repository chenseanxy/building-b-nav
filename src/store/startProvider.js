import {coordConvert} from "../helpers";

const rawSurvey = {
    海棠9号楼: {coords: "108.838385,34.135236"},
    海棠10号楼: {coords: "108.838551,34.135169"},
}

let survey = {}
for (const start in rawSurvey){
    survey[start] = {
        ...rawSurvey[start],
        coords: coordConvert(rawSurvey[start].coords)
    }
}

export default survey;