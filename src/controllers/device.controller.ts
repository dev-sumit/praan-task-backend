import DeviceModel from "../models/device.model";
import path from 'path';
import csv from 'csvtojson';
import { convertToISODateFormat } from "../utils";

class DeviceController {

    /**
     * API to bulk upload CSV data
     * @param req 
     * @param res 
     */
    uploadBulkDevicesFromCSV = async (req: any, res: any) => {
        
        let result = '';

        try {
            const jsonObj = await csv().fromFile('./public/praanDeviceData.csv');

            const devices: Device[] = [];
            jsonObj.map((obj) => {
                devices.push({
                    device: obj.device, 
                    w: Number(obj.w),
                    t: obj.t,
                    h: obj.h,
                    p1: Number(obj.p1),
                    p25: Number(obj.p25),
                    p10: Number(obj.p10)
                })
            });
            
            await DeviceModel.insertMany(devices, (err, data) => {
                    if (err) {
                        throw err;
                    }
            });

        } catch (err: any) {
            res.status(404).send(err.message);
        }

        res.status(200).send({
            message: "Successfully Uploaded",
            IsSuccess: true,
            result: ""
        });
    }

    /**
     * Get Devices by sepecified pm values 
     * @param req 
     * @param res 
     */
    getDevicesByPM = async (req: any, res: any) => {
        try {
            let pmVal = req.params?.pmval;
            let pmType = 'p' + pmVal;

            const VALID_PM_KEYS = ['p1', 'p25', 'p10'];

            if (!pmType || ! VALID_PM_KEYS.includes(pmType)) {
                res.status(400).send('Bad Request, Invalid Parameters');
            }
            
            const result = await DeviceModel.find({}).select(`${pmType}`);
            
            res.status(200).send({
                message: 'Success',
                isSuccess: true,
                result: result
            });

        } catch (err: any) {
            res.status(404).send(err.message);
        }
    } 
}

export default DeviceController;