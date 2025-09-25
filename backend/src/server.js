import express from 'express';

const PORT = 5000;
const app = express();

app.get('/', (req, res) => {
    res.json({ message: "Hello from mini-event-tracker" });
});

app.listen(PORT, () => {
    console.log(`server is running on :http://localhost:${PORT}`);
});