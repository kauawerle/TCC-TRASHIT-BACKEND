import { Sequelize } from 'sequelize';

let db = new Sequelize('postgres://vcvdeerhjojtpa:40362cfe0d0d9a7e571df6edf90a0c014fe1e2d6b16c596e54726d4a054bfb5c@ec2-34-197-84-74.compute-1.amazonaws.com:5432/df8m9agb9d469c', {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

	export { db };
