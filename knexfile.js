module.exports = {
    development: {
        client: "mysql",
        connection: {
            host: "127.0.0.1",
            port: 3306,
            user: "root",
            password: "Password123",
            database: "realestatedb",
        },
        useNullAsDefault: true,
        migrations: {
            directory: "./knex/migrations",
        },
        seeds: { directory: "./knex/seeds" },
    },
    pool: {
        afterCreate: (conn, done) => {
            conn.run("PRAGMA foreign_keys=ON", done);
        }

    }
}