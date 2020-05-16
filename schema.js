const axios = require("axios");

const {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLBoolean,
	GraphQLList,
	GraphQLSchema,
} = require("graphql");

//Rocket Type
const RocketType = new GraphQLObjectType({
	name: "Rocket",
	fields: () => ({
		rocket_id: { type: GraphQLString },
		rocket_name: { type: GraphQLString },
		rocket_type: { type: GraphQLString },
	}),
});

// Lanunch Type
const LanunchType = new GraphQLObjectType({
	name: "Launch",
	fields: () => ({
		flight_number: { type: GraphQLInt },
		mission_name: { type: GraphQLString },
		launch_year: { type: GraphQLString },
		launch_date_local: { type: GraphQLString },
		launch_success: { type: GraphQLBoolean },
		rocket: { type: RocketType },
	}),
});

//Root Query

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		launches: {
			type: new GraphQLList(LanunchType),
			async resolve(_parent, _args) {
				const response = await axios.get("https://api.spacexdata.com/v3/launches/");

				return response.data;
			},
		},
		launch: {
			type: LanunchType,
			args: {
				flight_number: {
					type: GraphQLInt,
				},
			},
			async resolve(_parent, args) {
				const response = await axios.get(
					`https://api.spacexdata.com/v3/launches/${args.flight_number}`
				);

				return response.data;
			},
		},
		rockets: {
			type: new GraphQLList(RocketType),
			async resolve(_parent, _args) {
				const response = await axios.get("https://api.spacexdata.com/v3/rockets/");

				return response.data;
			},
		},
		rocket: {
			type: RocketType,
			args: {
				rocket_id: {
					type: GraphQLString,
				},
			},
			async resolve(_parent, args) {
				const response = await axios.get(`https://api.spacexdata.com/v3/rockets/${args.rocket_id}`);

				return response.data;
			},
		},
	},
});

module.exports = new GraphQLSchema({
	query: RootQuery,
});
