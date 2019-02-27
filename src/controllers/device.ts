import { Router } from 'express';
import config from '../config/config';

class DeviceController {
  public router: Router = Router();

  constructor() {
    this.routes();
  }

  private routes(): void {

    this.router.get('/', async (req,res)=>{
      // const publicapi: saap_api.CloudDataApi = await  saap_api.getSaaPCloudDataService(config.app.adapterurl);
      // const database:saap_api.DatabaseInfo = await publicapi.getDatabase(saap_api.createLogin("Northstar", "Demouser", "Demouser"));
      // const devices:saap_api.DeviceInfo[] = await publicapi.getDevices(); 
      res.status(200).send("devices");
    });

    this.router.get('/:id',(req,res)=>{
      // const singleData = data.find((c) => c.id === req.params.id );
      // if(!singleData) return res.status(404).send('The device With the Given ID was not found');
      // res.send(singleData);
      res.status(200).send("devices With ID");
    });
  }
}

export const deviceRoutes = new DeviceController().router;
