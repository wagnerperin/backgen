const app = require('./config/express');
require('dotenv').config();
require('./config/database')(process.env.DB_URI);

app.listen(process.env.PORT, () => {
    console.log('Server running at port '+ process.env.PORT);
})