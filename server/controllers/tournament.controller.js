import Tournament from "../models/tournament.model.js";

/** 
 * @route GET tournament/:id/create-tournament   
 * @async
 * @function createNewTournament
*/

const createNewTournament = async (req, res) => {

    try {
        const tournamentId = req.body.id;
        const tournamentExist = await Tournament.exists({ _id: tournamentId });

        if (tournamentExist) {
            res.status(400).json({ message: "Tournament already exists." });
        }

        const newTournament = new Tournament({
            title: req.body.title,
            members: req.body.members,
        });
    
        await newTournament.save();
        
        res.status(201).json({ message: "Tournament created successfully." });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
};

/** 
 * @route GET /tournament/:id
 * @async
 * @function getTournamentById
 * 
 * @param {String} req.body.id - the id of the current tournament.
 * 
 * @description Returns all the members inside the tournament.
*/

const getTournamentById = async (req, res) => {
    try {
        const tournamentId = req.body.id;
        const tournament = await Tournament.find({ _id: tournamentId });

        if (!tournament) {
            res.status(404).json({ message: "Tournament was not found." });
        }

        res.status(200).json(tournament);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again later." });
    }
};


/** 
 * @route GET /tournament/:id/remove-tournament
 * @async
 * @function deleteTournament
 * 
 * @param {String} req.body.id - the id of the current tournament.
*/

const deleteTournament = async (req, res) => {
    try {
        const tournamentId = req.body.id;
        const tournamentName = req.body.name;

        const tournamentExist = await Tournament.exists({ title: tournamentName });
        if (!tournamentExist) {
            res.status(404).json({ message: "Tournament was not found." });
        }
        
        await Tournament.deleteOne({ _id: tournamentId });
        res.status(200).json({ message: "Tournament removed successfully" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
};

export {
    createNewTournament,
    getTournamentById,
    deleteTournament,
};