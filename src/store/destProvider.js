const rawSurvey = {
    e1: {
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
    e2: {
        coords: "108.837383,34.132666",
        stair: {
            id: "S2",
            direction: "left",
        },
        levels: [
            {left: [422, 425]},
            {left: [517, 520]},
            {left: [609, 612]},
            {left: [703, 706]},
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
                        coords,
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