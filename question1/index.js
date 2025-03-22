const express = require('express');
const app = express();
app.use(express.json()); // json
// calculating the api average
app.post('/average', (req, res) => {
    const { numbers } = req.body;
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return res.status(400).json({ error: "invalid input Provide a non-empty array" });
    }
    let sum = 0;//without using external libraries 
    for (let num of numbers) {
        if (typeof num !== 'number') {
            return res.status(400).json({ error: "Array must contain only numbers." });
        }
        sum += num;
    }
    const average = sum / numbers.length;
    res.json({ average });
});
const PORT = 3000;//server starting
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
