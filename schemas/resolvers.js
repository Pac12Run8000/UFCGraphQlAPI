const { FighterList } = require("./fighterData")

const resolvers = {
    Query: {
        fighters: () => {
            return FighterList;
        },
        fighter: (parent, { id }, context, info) => {
            return FighterList.find(fighter => fighter.id === id);
        },
        
        fightersByHomeTown: (parent, { homeTown }, context, info) => {
            return FighterList.filter(fighter => fighter.homeTown === homeTown);
        },
        fightersByMartialArt: (parent, { martialArt }, context, info) => {
            return FighterList.filter(fighter => fighter.primaryMartialArt === martialArt);
        }
    }
};

module.exports = { resolvers };