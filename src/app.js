const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const apiRoutes = require('./routes/api');

const app = express();
app.use(bodyParser.json());
app.use('/api', apiRoutes);

// Sync the database models with the MySQL tables
sequelize.sync({ force: true }).then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});

