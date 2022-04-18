import React, { Component } from 'react';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import CloseIcon from '@material-ui/icons/Close';
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NoSleep from 'nosleep.js';
import "./Yokis.css";

var noSleep = new NoSleep();
class ConnectedYokis extends Component {
    constructor(props){
      super(props);
      this.state = {
        songs: this.props.songs.filter(v => v.useForGames == 1),
        updateSongIndex: 0,
        stopUpdating: true,
        updateDownloadCTA: 'start update',
        yokis: [],
      }
    }

    player = null

    componentDidUpdate(prevProps, prevState){
      if (prevProps.songs !== this.props.songs) {
        this.setState({songs: this.props.songs})

        let localYokis = JSON.parse(localStorage.getItem('yokis'));
        if (localYokis != null && localYokis['yokis'].length >  0){
            this.setState({yokis: localYokis['yokis']})
        }
      }
    }

    componentDidMount(){
      noSleep.enable();
    }

    componentWillUnmount(){
      noSleep.disable();
    }

    handleUpdatingYokis =  () => {
        localStorage.removeItem('yokis')
        this.setState({
          yokis: [],
          stopUpdating: false,
        }, ()=>{this.indexedDBGet(this.state.songs)})
    }

    pauseUpdating = () =>{
      this.setState({
        stopUpdating: true
      })
    }

    async getAudioFilesAndPutInLocalDB(yokis, db){
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };

      for(var i = 0; i < yokis.length; i++){
        if (!this.state.stopUpdating){
          let yokisId = yokis[i].id
          await fetch(`https://storage.googleapis.com/rimibayi-4b634.appspot.com/music/${yokisId}.mp3`, requestOptions)
          .then(response => response.blob())
          .then(async result => {
            var blob = result;

            // Open a transaction to the database
            //TODO: figure out how to make this check local yokis before adding new ones to reduce waist of bandwidth
            var transaction = db.transaction(["yokis"], "readwrite");
            transaction.objectStore("yokis").put(blob, yokisId);

            if(this.state.songs[this.state.updateSongIndex] != undefined){
              this.setState(previousState => ({
                yokis: getUniqueListBy([...previousState.yokis, yokis[i]], 'id')
              }), ()=>{
                localStorage.setItem('yokis', JSON.stringify({
                    "yokis": this.state.yokis,
                }));
              });
            }
          })
          .catch(error => console.log('error', error));
        }
        setTimeout(()=>{}, 250)
      }
    }

    indexedDBGet(yokis){
      var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
          dbVersion =  1000000000

      // Create/open database --this is like a variable block in javascript
      var request = indexedDB.open("yokisFolder", dbVersion),
          createObjectStore = function (dataBase) {

            if(dataBase.objectStoreNames.length == 0) { //TODO: if we ever have to add more dbs, then we will need have to rethink this. sorry, whichever dev has to work on this
              // Create an objectStore
              console.log("Creating objectStore")
              dataBase.createObjectStore("yokis");
            }
          }

      request.onerror = (event) => {
        console.log("Error creating/accessing IndexedDB database", event);
      };

      request.onsuccess = (event) =>  {
        console.log("Success creating/accessing IndexedDB database", event);
        var db = request.result;

        db.onerror = function (event) {
          console.log("Error creating/accessing IndexedDB database", event);
        };

        //TODO: this is not necessary anymore so lets remove after thorough research
        // Interim solution for Google Chrome to create an objectStore. Will be deprecated
        if (db.setVersion) {
          if (db.version != dbVersion) {
            var setVersion = db.setVersion(db.version + 1); //always make sure to update to current version + 1
            setVersion.onsuccess = function () {
              createObjectStore(db);

              setTime(() => {
                this.getAudioFilesAndPutInLocalDB(yokis, db);
              }, 2000)
            };
          }
          else {
            this.getAudioFilesAndPutInLocalDB(yokis, db);
          }
        } else {
          this.getAudioFilesAndPutInLocalDB(yokis, db);
        }
      }

      // For future use. Currently only in latest Firefox versions
      request.onupgradeneeded = function (event) {
        createObjectStore(event.target.result);
      };
    }

    render() {
      return(
        <div className="Yokis">
          <div className="Yokis-wrapper">
            <div className="Yokis-icon" onClick={()=>this.setState({showArtDesc: true})}>
                {this.state.useIcon
                ?
                    <InsertCommentIcon className={"Yokis-insertCommentIcon"} style={{ color: '#3413f1' }} />
                :
                    <span id="js-yokisCTA" className="Yokis-cta">offline?</span>
                }
            </div>
            {this.state.showArtDesc &&
                <div className="Yokis-artDesc">
                    <div className="Yokis-artDescWrapper">
                        <div className="Yokis-closeIcon">
                            <Button onClick={() => this.setState({showArtDesc: false})}>
                                <CloseIcon style={{ color: '#f7c99e'}} />
                            </Button>
                        </div>
                        <div className="Yokis-content">
                            <div className="Yokis-title">
                                <p className="Yokis-title-super">download yokis to enjoy rimibayi offline</p>
                                <p className="Yokis-title-sub">
                                    you go need to download as many yokis as possible so the games fit work well.
                                    if you ever clear your browser (chrome) cache, you go need to come download again. no vex!
                                </p>
                            </div>
                            <div className="Yokis-controlMenu">
                                <Button
                                    variant="contained"
                                    style={{backgroundColor: '#3413f1', color: 'white', textTransform: 'lowercase', marginRight: 8}}
                                    onClick={() => this.handleUpdatingYokis()}
                                >
                                    start download
                                </Button>
                                <Button
                                    variant="contained"
                                    style={{backgroundColor: '#3413f1', color: 'white', textTransform: 'lowercase', marginRight: 8}}
                                    onClick={() => this.pauseUpdating()}
                                >
                                    stop download
                                </Button>
                            </div>
                            <div className="Yokis-updatedSongs">
                              <div className="Yokis-updateProgress">
                                {this.state.yokis.length > 0 &&
                                  <p>downloaded {this.state.yokis.length} yoki(s)</p>
                                }
                              </div>
                              {this.state.yokis.map((song, index) =>
                                <div key={index}>{song.title}</div>
                              )}
                            </div>
                        </div>
                    </div>
                </div>
            }
          </div>
        </div>
      )
    }
}

function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

const mapStateToProps = state => {
    return {};
};

const Yokis = withRouter(connect(mapStateToProps)(ConnectedYokis));

export default Yokis;
