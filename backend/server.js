const { insertData, getData } = require("./insertData.js");
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json({ limit: '10mb' }));
app.use(express.raw({ type: '*/*', limit: '10mb' }));
app.use(cors());
const PORT = 3001;

app.get('/', (req, res) => {
    const result = getData();
    console.log(result, "nitya");
    res.json({ result: result });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});