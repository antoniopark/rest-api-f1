import {Router} from 'express';
import * as f1Controller from '../controllers/f1.controller'

const router = Router();

//****************SEASONS****************//

//****************TEAMS****************//

router.get('/teams/',f1Controller.findAllTeams);

router.get('/teams/:id', f1Controller.findOneTeam);

router.post('/teams/',f1Controller.createTeam);

router.delete('/teams/:id', f1Controller.deleteTeam);

router.put('/teams/:id', f1Controller.updateTeam);


//****************DRIVERS****************//

router.get('/drivers/',f1Controller.findAllDrivers);

//router.get('/drivers/champions',f1Controller.findAllDriversChampion);

router.get('/drivers/:id', f1Controller.findOneDriver);

router.post('/drivers/',f1Controller.createDriver);

router.delete('/drivers/:id', f1Controller.deleteDriver);

router.put('/drivers/:id', f1Controller.updateDriver);


export default router;