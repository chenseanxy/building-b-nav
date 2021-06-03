import {coordConvert} from "../helpers";

const rawSurvey = {
    // "5号楼": {coords: "108.838129,34.134788"},
    "竹园1号楼": {coords: "108.847229,34.133152"},
    "竹园2号楼": {coords: "108.846937,34.13329"},
    "竹园3号楼": {coords: "108.845491,34.133947"},
    "竹园4号楼": {coords: "108.845235,34.134048"},
    "海棠5号楼": {coords: "108.84183,34.135236"},
    "海棠6号楼": {coords: "108.841637,34.135299"},
    "海棠7号楼": {coords: "108.839279,34.136274"},
    "海棠8号楼": {coords: "108.839126,34.136397"},
    "海棠9号楼": {coords: "108.838385,34.135236"},
    "海棠10号楼": {coords: "108.838551,34.135169"},
    "丁香11号楼": {coords: "108.835209,34.130178"},
    "丁香12号楼": {coords: "108.834661,34.129226"},
    "丁香13号楼": {coords: "108.834828,34.128998"},
    "丁香14号楼": {coords: "108.836503,34.128486"},
    "丁香15号楼": {coords: "108.836701,34.128165"},
}

let survey = {}
for (const start in rawSurvey){
    survey[start] = {
        ...rawSurvey[start],
        coords: coordConvert(rawSurvey[start].coords)
    }
}

export default survey;