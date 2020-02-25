let messages =[]
let id = 0

module.exports = {
create: (req, res) => {
messages.push({
    id,
    text: req.body.text,
    time: req.body.time
})
id++
res.status(200).send(messages)
},
read: (req, res) => {
    res.status(200).send(messages)
},
update: (req, res) => {
    const messageIndex = messages.findIndex(message => {return(message.id == req.params.id )})

    messages[messageIndex] = {
        id: req.params.id,
        text: req.body.text || messages[messageIndex].text,
        time: messages[messageIndex].time
    }
    res.status(200).send(messages)
},
delete: (req, res) => {
const messasgeIndex = messages.findIndex(message => {return(message.id == req.params.id)})
messages.splice(messasgeIndex,1)
res.status(200).send(messages)
}
}