import { Sequelize } from 'sequelize';

const db = new Sequelize({
	database: "trash-it",
	username: "postgres",
	password: "root",
	host: "localhost",
	port: 5432,
	dialect: "postgres",
});

// const db = new Sequelize({
//   database: "trash_it",
//   username: "trash_it_user",
//   password: "HYYo1VPOIQhBZqaFl9ZLC776oZPlYRc9",
//   host: "dpg-cg32s24eoogop18annk0-a.ohio-postgres.render.com",
//   port: 5432,
// 	dialect: "postgres",
//   dialectOptions: {
//     ssl: true,
//   },
// });


export { db };
