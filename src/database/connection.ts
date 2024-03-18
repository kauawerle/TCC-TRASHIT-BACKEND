require("dotenv").config();

import { Sequelize } from "sequelize";

// const db = new Sequelize({
// 	database: "trash-it",
// 	username: "postgres",
// 	password: "root",
// 	host: "localhost",
// 	port: 5432,
// 	dialect: "postgres",
// });

const db = new Sequelize({
	host: "dpg-cnma0c821fec73963kn0-a.ohio-postgres.render.com",
	database: "trash_it_tdvi",
	username: "trash_it",
	password: "PwibxO0eCT6LNclH6Ce3CK8kQkbq6Fso",
	port: 5432,
	dialect: "postgres",
	dialectOptions: {
		ssl: true,
	},
});


export { db };
