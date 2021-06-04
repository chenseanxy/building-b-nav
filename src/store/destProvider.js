import {coordConvert} from "../helpers";

const rawSurvey = {
    E1: {
        coords: "108.837069,34.132801",
        photos: [],
        stair: {
            id: "S1",
            direction: "right",
            photos: [],
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
        photos: ["2-0"],
        stair: {
            id: "S2",
            direction: "left",
            photos: ["2-1"],
        },
        levels: [
            {left: [422, 425], right: [421]},
            {left: [517, 520], right: [516]},
            {left: [609, 612], right: [608]},
            {left: [703, 706]},
        ]
    },
    E3: {
        coords: "108.837866,34.132458",
        photos: ["3-0"],
        stair: {
            id: "S3",
            direction: "left",
            photos: ["3-1"],
        },
        levels: [
            {back: [320]},
            {back: [418, 419], fwd: [416]},
            {back: [513, 514], fwd: [511]},
            {back: [605, 606], fwd: [603]},
            {back: [701]},
        ]
    },
    E4: {
        coords: "108.838073,34.132391",
        photos: ["4-0"],
        stair: {
            id: "S4",
            direction: "left",
            photos: ["4-1"],
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
        coords: "108.838509,34.132185",
        photos: ["5-0", "5-1"],
        stair: {
            id: "S5",
            direction: "right",
            photos: ["5-2"],
        },
        levels: [
            {},
            {fwd: [312]},
            {fwd: [412]},
            {fwd: [507]},
            {fwd: [601]},
        ]
    },
    E6: {
        coords: "108.838639,34.132114",
        photos: ["6-0", "6-1"],
        stair: {
            id: "S6",
            direction: "left",
            photos: ["6-2"],
        },
        levels: [
            {back: [211], fwd: [208]},
            {back: [311], fwd: [308]},
            {back: [411], fwd: [408]},
            {back: [506], fwd: [503]},
        ]
    },
    E8: {
        coords: "108.839214,34.131868",
        photos: ["8-0"],
        stair: {
            id: "S8",
            direction: "right",
            photos: ["8-1"],
        },
        levels: [
            {back: [106], fwd: [105]},
            {back: [207], fwd: [206]},
            {back: [307], fwd: [306]},
            {back: [407], fwd: [406]},
            {back: [502]},
        ]
    },
    E9: {
        coords: "108.839537,34.131722",
        photos: ["9-0"],
        stair: {
            id: "S9",
            direction: "right",
            photos: ["9-1"],
        },
        levels: [
            {fwd: [101]},
            {back: [203], fwd: [201]},
            {back: [303], fwd: [301]},
            {back: [403], fwd: [401]},
            {back: [501]},
        ]
    },
    E10: {
        coords: "108.838369,34.132443",
        photos: ["10-0"],
        stair: {
            id: "S10",
            direction: "fwd",
            photos: ["10-1"],
        },
        levels: [
            {},
            {left: [443, 442], right: [437, 434, 433]},
            {left: [537, 538], right: [532, 529, 528]},
        ]
    }
}

let survey = {}
for (const entrance in rawSurvey){
    const {coords, levels, stair, photos} = rawSurvey[entrance];
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
                        photos,
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