import firebase from "firebase";

class Firebase {
  getAllRimis = () =>{
    return new Promise(resolve => {
      firebase.database()
      .ref('/rimis/')
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

  getRimiById = (id) => {
    return new Promise(resolve => {
      firebase.database()
      .ref('/rimis/'+id)
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
}

export default new Firebase();
