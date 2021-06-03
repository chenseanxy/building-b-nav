import {coordConvert} from "../helpers";

const rawSurvey = {
    E1: {
        coords: "108.837069,34.132801",
        stair: {
            id: "S1",
            direction: "right",
        },
        levels: [
            {fwd: [426]},
            {fwd: [521]},
            {fwd: [613]},
            {fwd: [707]},
        ],
    },
    E2: {
        coords: "108.837383,34.132666",
        stair: {
            id: "S2",
            direction: "left",
        },
        levels: [
            {left: [422, 425], right: [421]},
            {left: [517, 520], right: [516]},
            {left: [609, 612], right: [608]},
            {left: [703, 706]},
        ]
    },
    E3: {
        coords: "",
        stair: {
            id: "S3",
            direction: "",
        },
        levels: [
            {left: [320]},
            {left: [418, 419], right: [416]},
            {left: [513, 514], right: [511]},
            {left: [605, 606], right: [603]},
            {left: [701]},
        ]
    },
    E4: {
        coords: "",
        stair: {
            id: "S4",
            direction: "",
        },
        levels: [
            {left: [217], right: [216]},
            {left: [315], right: [314]},
            {left: [415], right: [414]},
            {left: [510], right: [509]},
            {left: [402]},
        ]
    },
    E5: {
        coords: "",
        stair: {
            id: "S5",
            direction: "",
        },
        levels: [
            {},
            {right: [312]},
            {right: [412]},
            {right: [507]},
            {right: [601]},
        ]
    },
    E6: {
        coords: "",
        stair: {
            id: "S6",
            direction: "",
        },
        levels: [
            {left: [211], right: [208]},
            {left: [311], right: [308]},
            {left: [411], right: [408]},
            {left: [506], right: [503]},
        ]
    },
    E8: {
        coords: "",
        stair: {
            id: "S8",
            direction: "",
        },
        levels: [
            {left: [106], right: [105]},
            {left: [207], right: [206]},
            {left: [307], right: [306]},
            {left: [407], right: [406]},
            {left: [502]},
        ]
    },
    E9: {
        coords: "",
        stair: {
            id: "S9",
            direction: "",
        },
        levels: [
            {right: [101]},
            {left: [203], right: [201]},
            {left: [303], right: [301]},
            {left: [403], right: [401]},
            {left: [501]},
        ]
    }
}

let survey = {}
for (const entrance in rawSurvey){
    const {coords, levels, stair} = rawSurvey[entrance];
    for (var level=0; level < levels.length; level++){
        var currentLevel = levels[level];
        for (const direction in currentLevel){
            const rooms = currentLevel[direction];
            for (var room=0; room < rooms.length; room++){
                survey[rooms[room]] = {
                    entrance: {
                        id: entrance,
                        coords: coordConvert(coords),
                        toStair: {...stair},
                    },
                    direction: {
                        direction,
                        level: level,
                        roomsToPass: room,
                    }
                }
            }
        }
    }
}

export default survey;