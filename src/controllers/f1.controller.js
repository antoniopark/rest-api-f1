import Team from '../models/Team';
import Driver from '../models/Driver';

//Teams

export const findAllTeams = async (req,res)=>{
    const teams = await Team.find();
    res.json(teams);
}

export const createTeam =  async (req,res) => {
    const newTeam = new Team ({team: req.body.team, year_foundation: req.body.year_foundation, driver1: req.body.driver1, driver2: req.body.driver2, team_chief: req.body.team_chief });
    const teamSaved = await newTeam.save();
    res.json(teamSaved);
}

export const findOneTeam = async (req,res)=>{
   const team = await Team.findById(req.params.id);
    res.json(team);
}

export const deleteTeam = async (req,res) => {
    const data = await Team.findByIdAndDelete(req.params.id);
    res.json({
        message: 'The Team has been eliminated'
    });
}

export const updateTeam = async (req,res)=>{
    await Team.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Team was updated successfully' 
      });
  }

//Drivers

export const findAllDrivers = async (req,res)=>{
    const drivers = await Driver.find();
    res.json(drivers);
}

export const createDriver =  async (req,res) => {
    const newDriver = new Driver ({name: req.body.name, team: req.body.team, country: req.body.country, date_birth: req.body.date_birth, world_champ: req.body.world_champ });
    const driverSaved = await newDriver.save();
    res.json(driverSaved);
}

export const findOneDriver = async (req,res)=>{
   const driver = await Driver.findById(req.params.id);
    res.json(driver);
}

export const deleteDriver = async (req,res) => {
    const data = await Driver.findByIdAndDelete(req.params.id);
    res.json({
        message: 'The Driver has been eliminated'
    });
}

export const updateDriver = async (req,res)=>{
  await Driver.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: 'Driver was updated successfully' 
    });
}


/* 
Pedir los pilotos que han ganado campeonatos PENDIENTE

//drivers with championships
function checktitulos(driver){
    return driver.world_champ > 0;

}

export const findAllDriversChampion = async (req,res)=>{
    const drivers = await Driver.find({world_champ: 7});
    console.log(drivers)
    res.json(drivers);
}
*/
