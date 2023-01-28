import * as mongoose from 'mongoose';

const deviceSchema = new mongoose.Schema({
    device: {
        type: String,
    },
    t: {
        type: String
    },
    w: {
        type: Number        
    },
    h: {
        type: String        
    },
    p1: {
        type: Number        
    },
    p25: {
        type: Number        
    },
    p10: {
        type: Number        
    }
});

const DeviceModel = mongoose.model('devices', deviceSchema);

export default DeviceModel;