import firebase from "firebase";

class Firebase {
  getLyrics = () =>{
    return new Promise(resolve => {
      firebase.database()
      .ref('/lyrics/')
      .once('value')
      .then(snapshot => {
        if (snapshot.val()){
          resolve(Object.values(snapshot.val()))
        }else{
          resolve({})
        }
      })
    })
  }

  getVersion = () =>{
    return new Promise(resolve => {
      firebase.database()
      .ref('/version/')
      .once('value')
      .then(snapshot => {
        if (snapshot.val()){
          resolve(snapshot.val())
        }else{
          resolve({})
        }
      })
    })
  }

  setVersion = (version) =>{
    return new Promise(resolve => {
      firebase.database()
      .ref('/version/')
      .set(
        version
      )
      .then((response) => {
        resolve(true)
      })
      .catch(error => {
        console.warn("error", error)
      })
    })
  }

  getLyricsRawJSON = () =>{
    return new Promise(resolve => {
      firebase.database()
      .ref('/lyrics/')
      .once('value')
      .then(snapshot => {
        if (snapshot.val()){
          resolve(snapshot.val())
        }else{
          resolve({})
        }
      })
    })
  }

  getScoreBoardGuessSong = () =>{
    return new Promise(resolve => {
      firebase.database()
      .ref('/scoreboard/')
      .once('value')
      .then(snapshot => {
        if (snapshot.val()){
          resolve(snapshot.val())
        }else{
          resolve({})
        }
      })
    })
  }

  getScoreboardGuessSongLine = () =>{
    return new Promise(resolve => {
      firebase.database()
      .ref('/scoreboardguesssongline/')
      .once('value')
      .then(snapshot => {
        if (snapshot.val()){
          resolve(snapshot.val())
        }else{
          resolve({})
        }
      })
    })
  }

  getScoreBoardNextLine = () =>{
    return new Promise(resolve => {
      firebase.database()
      .ref('/scoreboardnextline/')
      .once('value')
      .then(snapshot => {
        if (snapshot.val()){
          resolve(snapshot.val())
        }else{
          resolve({})
        }
      })
    })
  }

  getScoreBoardPopularLine = () =>{
    return new Promise(resolve => {
      firebase.database()
      .ref('/scoreboardguesssongline/')
      .once('value')
      .then(snapshot => {
        if (snapshot.val()){
          resolve(snapshot.val())
        }else{
          resolve({})
        }
      })
    })
  }

  getLyricsById = (id) =>{
    return new Promise(resolve => {
      firebase.database()
      .ref('/lyrics/'+id)
      .once('value')
      .then(snapshot => {
        if (snapshot.val()){
          resolve(Object(snapshot.val()))
        }else{
          resolve({})
        }
      })
    })
  }

  getAnnotationBySongId = (id) =>{
    return new Promise(resolve => {
      firebase.database()
      .ref('/annotations/'+id)
      .once('value')
      .then(snapshot => {
        if (snapshot.val()){
          resolve(snapshot.val())
        }else{
          resolve({})
        }
      })
    })
  }

  getPopularLines = () => {
    return new Promise(resolve => {
      firebase.database()
      .ref('/popularlines/')
      .once('value')
      .then(snapshot => {
        if (snapshot.val()){
          resolve(snapshot.val())
        }else{
          resolve({})
        }
      })
    })
  }

  getPopularLinesById = (id) =>{
    return new Promise(resolve => {
      firebase.database()
      .ref('/popularlines/'+id)
      .once('value')
      .then(snapshot => {
        if (snapshot.val()){
          resolve(snapshot.val())
        }else{
          resolve({})
        }
      })
    })
  }

  getStoryFromID = (id) =>{
    return new Promise(resolve => {
      firebase.database()
      .ref('/bckStory/bck'+id)
      .once('value')
      .then(snapshot => {
        if (snapshot.val()){
          resolve(Object(snapshot.val()))
        }else{
          resolve({})
        }
      }).catch(error => {
        console.log("error", error)
      })
    })
  }

  addStoryFromID = (item) => {
    return new Promise(resolve => {
      console.log("item", item)
      firebase.database()
      .ref('/bckStory/bck'+item.id)
      .update(
        {
          title: item.title,
          author: item.author,
          content: item.content,
          dateCreated: item.dateCreated,
        }
      )
      .then((response) => {
        console.log("response", response)
        resolve(true)
      })
      .catch(error => {
        console.log("error", error)
      })
    })
  }

  getSBTAs = () => {
    return new Promise(resolve => {
      firebase.database()
      .ref('/bckStory/')
      .once('value')
      .then(snapshot => {
        if (snapshot.val()){
          resolve(snapshot.val())
        }else{
          resolve({})
        }
      })
    })
  }

  storage = () => {
    return firebase.storage()
  }

  deleteRecp = (songId) => {
    return new Promise(resolve => {
      firebase.database()
      .ref('/lyrics/'+songId)
      .remove()
      .then(() => {
        resolve(true)
      }).catch( (error) =>{
        console.log("error", error)
      })
    })
  }

  updateNumPlays = (songId, numPlays) =>{
    return new Promise(resolve => {
      firebase.database()
      .ref('/lyrics/' + songId + '/')
      .update(
        {
          numPlays: numPlays,
        },
      )
      .then((response) => {
        console.log("response", response)
        resolve(true)
      })
      .catch(error => {
        console.log("error", error)
      })
    })
  }

  submitASuggestion = (songTitle, artistName, youtubeLink) => {
    return new Promise(resolve => {
      firebase.database()
      .ref('/suggestions/')
      .push(
        {
          songTitle: songTitle,
          artistName: artistName,
          youtubeLink: youtubeLink,
        },
      )
      .then((response) => {
        resolve(true)
      })
      .catch(error => {
        console.warn("error", error)
      })
    })
  }

  addRimi = (item) => {
    return new Promise(resolve => {
      firebase.database()
      .ref('/lyrics/' + item.id + '/')
      .set(
        {
          id: item.id,
          title: item.title,
          lyricsurl: item.lyricsurl,
          singer: item.singer,
          audiourl: item.audiourl,
          lyrics: item.lyrics,
          title: item.title,
          countries: item.countries,
          dateAdded: item.dateAdded,
          albumName: item.albumName,
          numPlays: 20,
          lrcDone: 0,
        },
      )
      .then((response) => {
        resolve(true)
      })
      .catch(error => {
        console.warn("error", error)
      })
    })
  }

  bckMappings = () => {
    return new Promise(resolve => {
      firebase.database()
      .ref('/searcherBackgrounds/')
      .once('value')
      .then(snapshot => {
        if (snapshot.val()){
          resolve(Object(snapshot.val()))
        }else{
          resolve({})
        }
      })
    })
  }

  updateSearcherBck = (country, bckUrl) => {
    return new Promise(resolve => {
      firebase.database()
      .ref('/searcherBackgrounds/' + country + '/')
      .update({bckUrl})
      .then((response) => {
        console.log("response", response)
        resolve(true)
      })
      .catch(error => {
        console.log("error", error)
      })
    })
  }

  updateSongInfo = (songId, detailsToUpdate) =>{
    return new Promise(resolve => {
      firebase.database()
      .ref('/lyrics/' + songId + '/')
      .update(
        {
          title: detailsToUpdate?.title?.length > 0 ? detailsToUpdate.title : '',
          lyricsurl: detailsToUpdate?.lyricsurl?.length > 0 ? detailsToUpdate.lyricsurl : '',
          singer: detailsToUpdate?.singer?.length > 0 ? detailsToUpdate.singer : '',
          audiourl: detailsToUpdate?.audiourl?.length > 0 ? detailsToUpdate.audiourl : '',
          lyrics: detailsToUpdate?.lyrics?.length > 0 ? detailsToUpdate.lyrics : '',
          title: detailsToUpdate?.title?.length > 0 ? detailsToUpdate.title : '',
          countries: detailsToUpdate?.countries?.length > 0 ? detailsToUpdate.countries : '',
          dateAdded: detailsToUpdate?.dateAdded?.length > 0 ? detailsToUpdate.dateAdded : '',
          albumName: detailsToUpdate?.albumName?.length > 0 ? detailsToUpdate.albumName : '',
          turnedOn: detailsToUpdate?.turnedOn?.length > 0 ? detailsToUpdate.turnedOn : 0,
          useForGames: detailsToUpdate?.useForGames?.length > 0 ? detailsToUpdate.useForGames : 0
        },
      )
      .then((response) => {
        console.log("response", response)
        resolve(true)
      })
      .catch(error => {
        console.log("error", error)
      })
    })
  }

  updateLyrics = (songId, lyrics) => {
    return new Promise(resolve => {
      firebase.database()
      .ref('/lyrics/' + songId + '/')
      .update(
        {
          lyrics: lyrics,
          lrcDone: 1,
        },
      )
      .then((response) => {
        console.log("response", response)
        resolve(true)
      })
      .catch(error => {
        console.log("error", error)
      })
    })
  }

  updateAnnotation = (songId, content) => {
    return new Promise(resolve => {
      firebase.database()
      .ref('/annotations/' + songId + '/')
      .update(
        {
          content: content,
        },
      )
      .then((response) => {
        console.log("response", response)
        resolve(true)
      })
      .catch(error => {
        console.log("error", error)
      })
    })
  }

  updatePopularline = (songId, content) => {
    return new Promise(resolve => {
      firebase.database()
      .ref('/popularlines/' + songId + '/')
      .update(
        {
          content: content,
        },
      )
      .then((response) => {
        console.log("response", response)
        resolve(true)
      })
      .catch(error => {
        console.log("error", error)
      })
    })
  }

  postTransaction = (userInfo, recpInfo, cardInfo, transInfo) =>{
    return new Promise(resolve => {
      firebase.database()
      .ref('/userTransactions/' + userInfo.user.uid + '/' + transInfo.id + '/')
      .set(
        {
          transactionId: transInfo.id,
          accountNumber: recpInfo.accountNumber,
          bankName: recpInfo.bankName,
          recpFirstName: recpInfo.firstName,
          recpLastName: recpInfo.lastName,
          cardUsed: cardInfo.number,
          recpAmt: transInfo.recpAmt,
          sendAmt: transInfo.sendAmt,
          recpCurrency: transInfo.recpCurrency,
          sendCurrency: transInfo.sendCurrency,
          rate: transInfo.rate,
          isSuccessful: true,
          time: '13:03'
        },
      )
      .then((response) => {
        resolve(true)
      })
      .catch(error => {
        console.warn("error", error)
      })
    })
  }

  updateScoreBoardGuessSong = (scoreBoardObject) => {
    return new Promise(resolve => {
      firebase.database()
      .ref('/scoreboard/')
      .set(
        scoreBoardObject
      )
      .then((response) => {
        resolve(true)
      })
      .catch(error => {
        console.warn("error", error)
      })
    })
  }

  updateScoreBoardNextLine = (scoreBoardObject) => {
    return new Promise(resolve => {
      firebase.database()
      .ref('/scoreboardnextline/')
      .set(
        scoreBoardObject
      )
      .then((response) => {
        resolve(true)
      })
      .catch(error => {
        console.warn("error", error)
      })
    })
  }

  updateScoreBoardPopularLine = (scoreBoardObject) => {
    return new Promise(resolve => {
      firebase.database()
      .ref('/scoreboardguesssongline/')
      .set(
        scoreBoardObject
      )
      .then((response) => {
        resolve(true)
      })
      .catch(error => {
        console.warn("error", error)
      })
    })
  }

}

export default new Firebase();
