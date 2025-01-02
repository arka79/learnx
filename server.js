const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/courses', (req, res) => {
    const { course } = req.body;
    res.json({ course, message: `You selected the ${course} course.` });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
