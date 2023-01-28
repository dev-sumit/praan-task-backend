interface Device {
    // device id
    device: string;
    // windspeed in km/h 
    w: number;
    // timestamp
    t: string;
    // wind-direction
    h: string;
    // PM 1.0 particle
    p1: number;
    // PM 2.5 particle
    p25: number;
    // PM 10 particle
    p10: number;
}