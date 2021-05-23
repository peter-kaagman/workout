# workout
Workout moet een applicatie worden om mijn bezigheden in de sportschool te kunnen monitoren. Het dient gelijktijdig als een oefenproject voor een Node JS applicatie die gebruik maakt van MySQL database met een ORM (?) koppeling.

Files in config are not in the repository.

config/db.config.js:

module.exports = {
  HOST: "localhost",
  USER: "user",
  PASSWORD: "password",
  DB: "workout",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
