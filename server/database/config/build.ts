import { sequelize } from "../config"
import {Player,Match} from "../../models"

Match.belongsToMany(Player, { through: 'Match_Players', as: "players",
foreignKey: "match_id",
});

Player.belongsToMany(Match, { through: 'Match_Players', as: "matches",
foreignKey: "player_id",
});

const build = () => { sequelize.sync({ force: true }) }

export default build;