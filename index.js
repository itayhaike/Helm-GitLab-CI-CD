const cors = require('cors');
const express = require('express');

const app = express();

const users = [
    {
        id: 1,
        name: 'Roei Rom'
    }
];

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
    return res.send(users);
})

app.get('/:id', (req, res, next) => {
    return res.send(users.find(user => user.id === +req.params.id));
})

app.post('/', (req, res, next) => {
    users.push(req.body);
    return res.send('user added successfully!');
})

app.listen(3000, () => {
    console.log('server started!')
})