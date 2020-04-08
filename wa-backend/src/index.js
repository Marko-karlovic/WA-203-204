import express from 'express';
import studenti from './memory_storage.js'
import cors from 'cors'

const app = express()  // instanciranje aplikacije
const port = 3000  // port na kojem će web server slušati

app.use(cors())
app.use(express.json()) // automatski dekodiraj JSON poruke


app.get('/studenti', (req, res) => {

    res.json(studenti)
})

app.listen(port, () => console.log(`Slušam na portu ${ port}`))