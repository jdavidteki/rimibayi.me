import React, { Component } from "react";
import Firebase from "../../firebase/firebase.js";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FilteredRimi from '../FilteredRimi/FilteredRimi';
import emailjs from '@emailjs/browser'

import "./CreateRimi.css";

class CreateRimi extends Component {
  constructor(props){
    super(props);

    this.state = {
            rimis: [],
            filteredRimis: [],
            rimisCopy: [],
            suggestedRimi: {},
            email: '',
            senTitle: '',
            senTitleColor: '',
            senTitleMood: '',
            senTitlePitch: '',
            otherLink1:'',
            otherLink2:'',
            otherLink3:'',
            otherLink4:'',
            readMore: '',
            errMsg: '',
            linkToSm: {
                facebook: '',
                youtube: '',
                instagram: '',
                medium: '',
                linkedIn: '',
                googleProfile: '',
                snapchat: '',
                pinterest: '',
                whatsapp: '',
                tiktok: '',
                reddit: '',
            },
        }
    }

    componentDidMount(){
        Firebase.getAllRimis().then(
            val => {
            this.setState({
                rimis: val,
                rimisCopy: val,
                rimisIds: val.map(a => a.id),
            })
            }
        )
    }

    componentDidUpdate(prevProps, prevState){
    }

    filterSong = (rimi) => {
        if (!this.state.expandResults){
            this.setState({expandResults: true})
        }

        if (rimi==""){
            this.setState({expandResults: false})
        }

        let typeSong = this.state.rimisCopy.filter(thisRimi =>
            thisRimi.title != undefined ?
            (
                thisRimi.title.replace(' ', '').toLowerCase().includes(rimi.replace(' ', '').toLowerCase())
            )
            &&
            (
                thisRimi.isAvailable
            )
            :
            false
        )

        if (rimi == ''){
            this.setState({
                rimis: this.state.rimisCopy
            })
        }else{
            this.setState({
                filteredRimis: typeSong
            })
        }
    }

    checkSenTitle(senTitle){
        this.filterSong(senTitle)
        this.setState({ senTitle: senTitle });
    }

    selectSuggestedRimi = (rimi) => {
        console.log("rimi", rimi)
        this.setState({ senTitle: rimi.title });
    }

    processData(){
        if(this.state.email == ""){
            this.setState({ errMsg: this.state.errMsg + ' email cannot be empty' });
        }else if(this.state.senTitle == ""){
            this.setState({ errMsg: this.state.errMsg +  ' senTitle cannot be empty' });
        }

        var templateParams = {
            to_name: 'africariyoki',
            from_name: 'rimibayi',
            message: 'testingtesting',
            recipient_email: 'jesuyedd@gmail.com'
        };

        emailjs.send('service_jdguftl', 'template_z19ojwr', templateParams, 'VSKnf4Vspvt3LgOiz')
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
            });
    }

    render(){
        return (
            <div className="CreateRimi">
                <TextField
                    value={this.state.email}
                    placeholder="primary email"
                    onChange={e => {
                    this.setState({ email: e.target.value });
                    }}
                />
                <div className="CreateRimi-senTitleSection">
                    <TextField
                        value={this.state.senTitle}
                        placeholder="senTitle"
                        onChange={e => { this.checkSenTitle(e.target.value) }}
                    />
                    {this.state.rimis.length > 0 &&
                        <FilteredRimi
                            rimis={this.state.rimis}
                            filteredRimis={this.state.filteredRimis}
                            selectSuggestedRimi={this.selectSuggestedRimi}
                            suggestSong={this.suggestSong}
                            expandResults={this.state.expandResults}
                        />
                    }
                </div>
                <TextField
                    value={this.state.content}
                    placeholder="content"
                    onChange={e => {
                        this.setState({ content: e.target.value });
                    }}
                />
                <TextField
                    value={this.state.linkToSm.facebook}
                    placeholder="facebook"
                    onChange={e => {
                        this.setState({
                            linkToSm: {
                                facebook: e.target.value,
                            },
                        });
                    }}
                />
                <TextField
                    value={this.state.linkToSm.youtube}
                    placeholder="youtube"
                    onChange={e => {
                        this.setState({
                            linkToSm: {
                                youtube: e.target.value,
                            },
                        });
                    }}
                />
                <TextField
                    value={this.state.linkToSm.instagram}
                    placeholder="instagram"
                    onChange={e => {
                        this.setState({
                            linkToSm: {
                                instagram: e.target.value,
                            },
                        });
                    }}
                />
                <div className="CreateRimi-otherLinks">
                    <TextField
                        value={this.state.otherLink1}
                        placeholder="other link 1"
                        onChange={e => {
                            this.setState({ otherLink1: e.target.value})
                        }}
                    />
                    <TextField
                        value={this.state.otherLink2}
                        placeholder="other link 2"
                        onChange={e => {
                            this.setState({ otherLink2: e.target.value})
                        }}
                    />
                    <TextField
                        value={this.state.otherLink3}
                        placeholder="other link 3"
                        onChange={e => {
                            this.setState({ otherLink3: e.target.value})
                        }}
                    />
                    <TextField
                        value={this.state.otherLink4}
                        placeholder="other link 4"
                        onChange={e => {
                            this.setState({ otherLink4: e.target.value})
                        }}
                    />
                </div>
                <div>{this.state.errMsg}</div>
                <Button
                    style={{ marginTop: 20, width: 200, textTransform: 'lowercase'}}
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                        this.processData()
                    }}
                >
                    create rimi
                </Button>
            </div>
        );
    }
}

export default CreateRimi;