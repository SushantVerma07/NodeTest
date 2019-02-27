import express = require('express');
import {deviceRoutes} from '../controllers/device';
import status from '../controllers/status';

export default function(app:express.Application){
    app.use('/api/device',deviceRoutes);
    app.use('/api/status',status);
}