const { insertData, getData } = require("./insertData.js");
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json({ limit: '10mb' }));
app.use(express.raw({ type: '*/*', limit: '10mb' }));
app.use(cors());
const PORT = 3001;

app.get('/', async (req, res) => {
    const result = await getData();
    res.send({ result });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});