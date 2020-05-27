const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const db = require('./models');

// get all artists 
app.get('/api/artist/all/', (req, res) => {
    db.Artist.findAll()
        .then(artist => {
            return artist;
        })
        .catch(err => {
            console.log(`There has been an error: ${err}`)
        })
        .then((result) => {
            res.json(result);
        })
})

// get all albums 
app.get('/api/albums/all/', (req, res) => {
    db.Album.findAll()
        .then(albums => {
            return albums;
        })
        .catch(err => {
            console.log(`There has been an error: ${err}`)
        })
        .then((result) => {
            res.json(result);
        })
})

// get all tracks 
app.get('/api/tracks/all/', (req, res) => {
    db.Track.findAll()
        .then(tracks => {
            return tracks;
        })
        .catch(err => {
            console.log(`There has been an error: ${err}`)
        })
        .then((result) => {
            res.json(result);
        })
})

// create a new artist
app.post('/api/create/artist', (req, res) => {
    console.log(req.params.artist);
    db.Artist.create({
        artist_name: req.body.artist
    })
        .catch(err => {
            console.log(`There has been an error : ${err}`)
        })
        .then((result) => {
            res.json(result);
        })
})

// get all albums from specific artist
app.get('/api/artist/:id/albums', (req, res) => {
    db.Artist.findByPk(req.params.id)
        .then((artist) => {
            return artist.getAlbums();
        })
        .catch(err => {
            console.log(`There has been an error ${err}`);
            res.json({ message: `${err}` });
        })
        .then((result) =>
            res.json(result));
})

// create a new album
app.post('/api/create/artist/:artist_id/album', (req, res) => {
    db.Artist.findByPk(req.params.artist_id)
        .then(artist => {
            return artist.createAlbum({
                album_name: req.body.name,
                year: req.body.year
            })
        })
        .catch(err => {
            console.log(`There has been an error ${err}`)
            res.json({ message: `${err}` });
        })
        .then((result) => {
            res.json(result);
        })
})

// create a new track
app.post('/api/create/artist/:artist_id/album/:album_id/track', (req, res) => {
    db.Album.findByPk(req.params.album_id)
        .then(album => {
            return album.createTrack({
                track_name: req.body.name,
                track_duration: req.body.duration
            })
        })
        .catch(err => {
            console.log(`There has been an error : ${err}`)
            res.json({ message: `${err}` });
        })
        .then((result) => {
            res.json(result);
        })
})

// delete an artist
app.delete('/api/delete/artist/:id', (req, res) => {
    db.Artist.destroy({
        where: { id: Number(req.params.id) }
    })
        .then(deletedArtist => {
            console.log(`${deletedArtist} has been deleted`)
            res.json(deletedArtist);
        })

})

// restore an artist
// app.delete('/api/restore/artist/:id', (req, res) => {
//     db.Artist.restore({
//         where: { id: Number(req.params.id) }
//     })
//         .then(deletedArtist => {
//             console.log(`${deletedArtist.name} has been deleted`)
//             res.json(deletedArtist);
//         })

// })



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})