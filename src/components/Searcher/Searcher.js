import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";

import './Searcher.css';

//you can just come here and add a language
const allPrompts=[
  'pidgin: who you dey find',
  'twi: eh dwom ben na wo be to',
  'yoruba: kini o fẹ lati kọrin si',
  'hausa: me kuke so ku yi waka',
  'swahili: unataka kuimba nini',
  'afrikaans: waarvoor wil jy sing',
  'amharic: ምን መዝፈን ትፈልጋለህ',
  'igbo: kedu ihe ị chọrọ ịbụ abụ',
  'zulu:  ufuna ukucula ini',
  'shona: unoda kuimbira chii',
]

class Searcher extends Component {
    constructor(props){
        super(props);

        this.state= {
            rimis: Object.values(this.props.rimis),
            filteredrimis: [],
            rimisCopy: Object.values(this.props.rimis),
            popularrimis:[],
            count:0,
            query: '',
            background: "",
            selectedCode: '',
            inputPromptMsg: 'english: what do you want to sing',
        }
    }

    componentDidMount () {
        //interval for chainging input prompt
        let nthPromptToShow = 0
        setInterval( () => {
        let modPrompt = nthPromptToShow % (allPrompts.length + 3)
        let promptToShow = 'english: who are you looking for'

        if(modPrompt > 2){
            promptToShow = allPrompts[modPrompt - 3]
        }

        nthPromptToShow += 1

        this.setState({
            inputPromptMsg: promptToShow
        })
        }, 2000);
    }

    filterRimi = (rimi) => {
        let typeSong = this.state.rimisCopy.filter(thisRimi =>
            thisRimi.title != undefined && thisRimi.id != undefined ?
                (
                    thisRimi.title.replace(' ', '').toLowerCase().includes(rimi.replace(' ', '').toLowerCase()) ||
                    thisRimi.id.replace(' ', '').toLowerCase().includes(rimi.replace(' ', '').toLowerCase())
                )
            :
                false
            )

        if (rimi == ''){
            this.setState({
                rimis: this.state.rimisCopy
            })
        }else{
            this.props.getSearchResult(typeSong)
            this.setState({
                filteredrimis: typeSong
            })
        }
    }

    render() {
        return (
            <div className="Searcher">
                <div className="Searcher-container">

                    <div className="Searcher-inputWrapper">
                        <TextField
                        className="Searcher-input"
                        shrink='true'
                        autoComplete='off'
                        id="Searcher-input"
                        label={`${this.state.inputPromptMsg}?`}
                        variant="outlined"
                        onChange={event=>{
                            this.setState({query: event.target.value}, ()=> {
                            this.filterRimi(this.state.query)
                            })
                        }}
                        />
                    </div>

                    {/* {this.state.rimis.length > 0 &&
                        <SongList
                        rimis={this.state.rimis}
                        filteredrimis={this.state.filteredrimis}
                        playSong={this.playSong}
                        suggestSong={this.suggestSong}
                        expandResults={this.state.expandResults}
                        />
                    } */}
                </div>
            </div>
        )
    }
}

export default Searcher;