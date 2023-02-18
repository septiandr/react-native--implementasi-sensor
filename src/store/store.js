import { atom } from "jotai"

export const DefaultDataSensor = {
    accelerometer:{
        x: 0, y: 0, z: 0
    },
    gyroscope:{
        x: 0, y: 0, z: 0
    },
    magnetometer:{
        x: 0, y: 0, z: 0
    },
    gps:{
        latitute:0,
        longitude:0
    }
}

export const DataSensor = atom(DefaultDataSensor)