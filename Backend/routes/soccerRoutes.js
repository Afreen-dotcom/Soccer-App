import { 
    addNewPlayer,
    deletePlayer,
    getPlayers,
    getPlayerWithID, 
    UpdatePlayer
} from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
    //get end point
    .get(getPlayers)
    //post end point
    .post(addNewPlayer);

    app.route('/player/:PlayerId')
        .get(getPlayerWithID)
        .put(UpdatePlayer)
        .delete(deletePlayer)
}

export default routes;