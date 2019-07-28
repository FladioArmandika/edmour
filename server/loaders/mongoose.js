const mongoose  = require('mongoose')

module.exports = async() => {
    const conn = await mongoose.connect(`
        mongodb+srv://${
            process.env.MONGO_USER
        }:${
            process.env.MONGO_PASSWORD
        }@edmour-aqomh.mongodb.net/edmour?retryWrites=true&w=majority
    `)

    return conn.connection.db;
}