const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = "3000";
const url = "mongodb://localhost:27017";

app.use(express.json());

mongoose.connect(url, {})
.then(() => {
    console.log('Database Connected');
})
.catch((err) => {
    console.log('Error connecting to Database', err);
});

const EmployeeInformation = require('./Route/Employee.route');
app.use('/employee', EmployeeInformation);

app.listen(port, () => {
    console.log('Listening on port 3000');
});