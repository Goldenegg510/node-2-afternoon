const express = require('express');
const app = express();
const message_contorller = require('./controllers/message_controller')

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'));

const port = 3001;

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})

app.post('/api/messages', message_contorller.create)
app.get('/api/messages', message_contorller.read)
app.put('/api/messages/:id', message_contorller.update)
app.delete('/api/messages/:id', message_contorller.delete)
