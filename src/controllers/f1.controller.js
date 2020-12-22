import Team from '../models/Team';
import Driver from '../models/Driver';
import {getPaginationTeams,getPaginationDrivers} from '../libs/getPagination';
import { get } from 'mongoose';

//Teams

export const findAllTeams = async (req, res) => {
    try {
        const {size, page, team} = req.query;
        const condition = team 
        ? {
            team: { $regex: new RegExp(team), $options: "i"},
        } 
        : {};
        const {limit,offset} = getPaginationTeams(page,size)
        const teams = await Team.paginate(condition ,{offset, limit});
        res.json(
           {
            totalItems: teams.totalDocs,
            teams: teams.docs,
            totalPages: teams.totalPages,
            currentPage: teams.page - 1
        }

        );
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong retrieving the teams'
        })
    }
};

export const createTeam = async (req, res) => {
    try {
        const newTeam = new Team({ team: req.body.team,avatar: req.body.avatar, year_foundation: req.body.year_foundation, driver1: req.body.driver1, driver2: req.body.driver2, team_chief: req.body.team_chief });
        const teamSaved = await newTeam.save();
        res.json(teamSaved);
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong creating team'
        });
    };
};

export const findOneTeam = async (req, res) => {
    const { id } = req.params;
    try {
        const team = await Team.findById(id);
        if (!team) return res.status(404).json({ message: `Team with id ${id} does not exist` });

        res.json(team);
    } catch (error) {
        res.status(500).json({
            message: error.message || `Error retrieving team with id: ${id}`,
        });
    }
};

export const deleteTeam = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Team.findByIdAndDelete(id);
        res.json({
            message: 'The Team has been eliminated'
        });
    } catch (error) {
        res.status(500).json({
            message: `Cannot deleting team with id: ${id}`,
        });
    }
};

export const updateTeam = async (req, res) => {
    try {
        await Team.findByIdAndUpdate(req.params.id, req.body);
        res.json({
            message: 'Team was updated successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong updating team'
        })
    }
};

//Drivers

export const findAllDrivers = async (req, res) => {
    try {
        const {size, page, name} = req.query;
        const condition = name 
        ? {
            name: { $regex: new RegExp(name), $options: "i"},
        } 
        : {};

        const {limit,offset} = getPaginationDrivers(page,size)
        const drivers = await Driver.paginate(condition,{offset, limit});
        res.json({
            totalItems: drivers.totalDocs,
            drivers: drivers.docs,
            totalPages: drivers.totalPages,
            currentPage: drivers.page - 1
        });

    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong retrieving driver'
        });
    };
};

export const createDriver = async (req, res) => {
    try {
        const newDriver = new Driver({ name: req.body.name,avatar: req.body.avatar, team: req.body.team, country: req.body.country, date_birth: req.body.date_birth, championships: req.body.championships });
        const driverSaved = await newDriver.save();
        res.json(driverSaved);

    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong creating driver'
        });
    };
};

export const findOneDriver = async (req, res) => {
    const { id } = req.params;
    try {
        const driver = await Driver.findById(id);
        if (!driver) return res.status(404).json({ message: `Driver with id ${id} does not exist` });
        res.json(driver);
    } catch (error) {
        res.status(500).json({
            message: error.message || `Error retrieving driver with id: ${id}`,
        });
    }
};

export const deleteDriver = async (req, res) => {
    const { id } = req.params
    try {
        const data = await Driver.findByIdAndDelete(id);
        res.json({
            message: 'The Driver has been eliminated'
        });
    } catch (error) {
        res.status(500).json({
            message: `Cannot deleting driver with id: ${id}`,
        });
    }
};

export const updateDriver = async (req, res) => {
    try {
        await Driver.findByIdAndUpdate(req.params.id, req.body);
        res.json({
            message: 'Driver was updated successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong updating driver'
        })
    }
};


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
