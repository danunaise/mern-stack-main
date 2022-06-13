const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const blogRoutes = require('./routes/blog');

//connect to database
mongoose.connect(process.env.DATABASE,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
    })
    .then(() => console.log('DB Connected'))
    .catch(err => console.log(err));
//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//routes
app.use('/api', blogRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server Runing on port ${process.env.PORT}`);
})