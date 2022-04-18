import React, { Component } from "react";
import Section2 from "../Section2";
import Section3 from "../Section3";
import Section from "../Section";
import Game1 from "../Game1";
import FooterMenuFooterDefault from "../FooterMenuFooterDefault";
import Searcher  from "../Searcher2";
import PopularSongs  from '../PopularSongs2/PopularSongs2.js';
import Firebase from "../../firebase/firebase.js";
import { GetRandomBackground } from "../helpers/Helpers";
import Header from "../Header2";
import section12DataImage from "../../../static/img/logo-1@2x.png";
import game15DataImage from "../../../static/img/icon-1@2x.png";
import game16DataImage from "../../../static/img/icon-2@2x.png";
import TempBackground from "../../../static/img/whitebackground.png"
import MetaTags from 'react-meta-tags';
import { Analytics, PageHit } from 'expo-analytics';

import "./Homepage3.css";

class Homepage3 extends Component{
  constructor(props){
    super(props);

    this.state = {
      overlapGroup: homepage3Data.overlapGroup,
      section1Props: homepage3Data.section1Props,
      sectionProps: homepage3Data.sectionProps,
      game11Props: homepage3Data.game11Props,
      game12Props: homepage3Data.game12Props,
      footerMenuFooterDefaultProps: homepage3Data.footerMenuFooterDefaultProps,
      popularSongs:[],
      songs:[],
    }
  }

  componentDidMount(){
    //hack: use this to fix github pages doing ?/ on pages
    if (window.location.href.includes("?/")){
      let actualDestination = window.location.href.split("?/")[1]

      this.props.history.push({
        pathname: "/" + actualDestination
      });
    }

    setTimeout( () => {
      this.setState({
        overlapGroup: GetRandomBackground(""),
      })
    }, 500);

    const analytics = new Analytics('UA-187038287-1');
    analytics.hit(new PageHit('HomePage'))
      .then(() => console.log("google analytics on searcher"))
      .catch(e => console.log(e.message));


    //download all the images for caching purposes
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      mode: 'no-cors'
    };
    for(var i = 1; i < 11; i++) {
      fetch(`https://firebasestorage.googleapis.com/v0/b/rimibayi-4b634.appspot.com/o/searchBackgrounds%2Fbck${i}bck.jpeg?alt=media`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error',error));
    }

    //if there is no internet connection this should atleast work
    Firebase.getLyrics().then(
      val => {
        this.setState({
          popularSongs: val,
          songs: val,
          songsCopy: val,
          songIds: val.map(a => a.id),
        })

        localStorage.setItem('lyrics', JSON.stringify({
          "lyrics": val,
        }));
      }
    )

    //try to load local songs file first
    let localSongs = JSON.parse(localStorage.getItem('lyrics'));
    if (localSongs != null){
      let localLyrics = localSongs['lyrics']
      this.setState({
        popularSongs: localLyrics,
        songs: localLyrics,
        songsCopy: localLyrics,
        songIds: localLyrics.map(a => a.id),
      })
    }
  }

  getSongDetails(){
    let metaDes = "sing along to your favourite afrobeat songs --- "

    for (var i = 0; i < this.state.songs.length; i++) {
      metaDes += `${this.state.songs[i].title}, ${this.state.songs[i].singer}, `
    }

    return metaDes
  }

  playSong = (songId) => {
    let chooseSong = this.state.songs.filter(song => songId === song.id)

    if(this.props.history == undefined){
      //TODO: figure out if it's possible to not have to do this
      window.location.href = "/karaoke/" + songId
    }else{
      this.props.history.push({
        pathname: "/karaoke/" + songId,
        state: { chooseSong: chooseSong, songs: this.state.songsCopy}
      });
    }

    this.setState({
      songs: chooseSong,
      currentSong: chooseSong
    })
  }

  render(){
    return (
      <div className="container-center-horizontal">
        <MetaTags>
          <title>rimibayi - play with africa!</title>
          <meta name="description" content={this.getSongDetails()} />
          <meta property="og:title" content="rimibayi" />
          <meta httpEquiv="cache-control" content="no-cache" />
          <meta httpEquiv="expires" content="0" />
          <meta httpEquiv="pragma" content="no-cache" />
        </MetaTags>

        {/* these will remain for SEO purposes */}
          <h1 itemProp="headline" style={{ display: "none" }}>#karaokewithafrica - #karaoke, african karaoke, #nigeriankaraoke, #lagoskaraoke, #ghanaian karaoke, #afrobeatskaraoke, afrobeatskaraoke, the african internet playhouse</h1>
        {/* ******** */}

        <div className="homepage3 screen">
          <div
            style={{ backgroundImage: `url(${this.state.overlapGroup})` }}
            className="overlap-group-40">
              <div className="overlap-group-40-dark"></div>
          </div>
          <div className="homepage3-container">
            <Header callerComponent={"homepage"} />
            <div className="section2-1">
              <Section2 />
              <Searcher/>
              <div className="frame-231-1">
                <Section3 />
                {this.state.popularSongs.length > 0 &&
                    <PopularSongs
                      cards = {this.state.popularSongs.sort(( )=> Math.random() - 0.5).slice(0, 50)}
                      playSong = {this.playSong}
                      scrollSeconds = {10000}
                  />
                }
              </div>
            </div>
            <div className="section3-2">
              <Section className={this.state.sectionProps.className} />
              <div className="games-4">
                <Game1
                  icon={this.state.game11Props.icon}
                  spanText1={"guess the song"}
                  spanText2={"choose from snippets"}
                  className={this.state.game11Props.className}
                  hreflink={"guess-the-song"}
                />
                <Game1
                  icon={this.state.game12Props.icon}
                  spanText1={"pop lines"}
                  spanText2={"recognise catch-phrases"}
                  className={this.state.game12Props.className}
                  hreflink={"popular-lines"}
                />
                <Game1
                  icon={this.state.game11Props.icon}
                  spanText1={"next line"}
                  spanText2={"what is the next line?"}
                  className={this.state.game12Props.className}
                  hreflink={"next-line"}
                />
              </div>
            </div>
            <FooterMenuFooterDefault className={this.state.footerMenuFooterDefaultProps.className} />
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage3;

const section12Data = {
  src: section12DataImage,
};

const section5Data = {
  className: "section-2",
};

const game15Data = {
  icon: game15DataImage,
  spanText1: "Guess the song",
  spanText2: "Select the correct song title of random song instrumental",
  className: "game1-2",
};

const game16Data = {
  icon: game16DataImage,
  spanText1: "Next line",
  spanText2: <>Choose the correct next line to a <br />random song instrumental</>,
  className: "game2-2",
};

const footerMenuFooterDefault4Data = {
  className: "footer-default-3",
};

const homepage3Data = {
  overlapGroup: TempBackground,
  section1Props: section12Data,
  sectionProps: section5Data,
  game11Props: game15Data,
  game12Props: game16Data,
  footerMenuFooterDefaultProps: footerMenuFooterDefault4Data,
};