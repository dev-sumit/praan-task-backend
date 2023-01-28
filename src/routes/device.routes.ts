import * as express from 'express';

import DeviceController from '../controllers/device.controller';
const deviceRouter = express.Router();
const deviceController = new DeviceController();

// Bulk upload data from CSV to db
deviceRouter.get('/bulk', deviceController.uploadBulkDevicesFromCSV);

deviceRouter.get('/pm/:pmval', deviceController.getDevicesByPM);

export default deviceRouter;