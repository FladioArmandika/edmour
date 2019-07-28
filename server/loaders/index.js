const expressLoader     = require('./express');
const mongooseLoader    = require('./mongoose');

module.exports = async(app) => {
    await mongooseLoader(app);
    await expressLoader(app);    
}