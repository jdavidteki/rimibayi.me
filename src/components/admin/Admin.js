import React, { Component } from "react";
import ReactDataGrid from "react-data-grid";
import { Toolbar, Data } from "react-data-grid-addons";
import Firebase from "../../firebase/firebase.js";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import UploadContent from '../uploadcontent/UploadContent.js'
import UploadSearcherBck from '../uploadSearcherBck/UploadSearcherBck.js'
import UploadImgStory from '../uploadImgStory/UploadImgStory.js'
import { Analytics, PageHit } from 'expo-analytics';
import Header from "../Header2";

import 'bootstrap/dist/css/bootstrap.css';
import "./Admin.css"

const defaultColumnProperties = {
    filterable: true,
    width: 200,
    resizable: true,
};

const selectors = Data.Selectors;

const columns = [{
    key: 'id',
    name: 'Song ID',
    sort: true,
  }, {
    key: 'lyrics',
    name: 'Lyrics',
    editable: true,
  }, {
    key: 'singer',
    name: 'Singer',
    sort: true,
    editable: true,
}, {
    key: 'albumName',
    name: 'Album Name',
    editable: true,
},{
    key: 'title',
    name: 'Title',
    editable: true,
},{
    key: 'countries',
    name: 'Countries',
    editable: true,
},{
    key: 'dateAdded',
    name: 'Date Added',
},{
    key: 'numPlays',
    name: 'Number of Plays',
},{
    key: 'lrcDone',
    name: 'LRC Done',
},{
    key: 'turnedOn',
    name: 'Turned On',
    editable: true,
},{
    key: 'useForGames',
    name: 'Use For Game',
    editable: true,
}].map(c => ({ ...c, ...defaultColumnProperties }));

class ConnectedAdmin extends Component {

    state = {
        songs:[],
        filters: [],
        filteredRows: [],
        selectedIndexes: [],
        rows:[],
        selectedSongIds: [],
        selectedSongLyrics: '',
        adminLoggedIn: false,
        updatingRow: {},
    };

    componentDidMount(){
        this.adminLogIn()

        Firebase.getLyrics().then( val => {
            this.setState({songs: val, filteredRows: this.getRows(val)})
        })

        const analytics = new Analytics('UA-187038287-1');
        analytics.hit(new PageHit('Admin'))
            .then(() => console.log("google analytics on game"))
            .catch(e => console.log(e.message));

    }

    handleFilterChange=(filter)=>{
        const newFilters = { ...this.state.filters };

        if (filter.filterTerm) {
          newFilters[filter.column.key] = filter;
        } else {
          delete newFilters[filter.column.key];
        }

        let rows = this.state.songs
        let filters = this.state.filters
        let filteredRows = selectors.getRows({ rows, filters })

        this.setState({filters: newFilters, filteredRows: filteredRows})
    };

    getRows(val) {
        let rows = val
        let filters = this.state.filters

        return selectors.getRows({ rows, filters });
    }

    onRowsSelected = rows => {
        this.setState({
          selectedSongIds: this.state.selectedSongIds.concat(
              rows.map(r => r.row.id)
          ),
          selectedIndexes: this.state.selectedIndexes.concat(
            rows.map(r => r.rowIdx)
          ),
          selectedSongLyrics: rows[0].row.lyrics
        });
    };

    onRowsDeselected = rows => {
        let rowIndexes = rows.map(r => r.rowIdx);
        let rowIds = rows.map(r => r.row.id)

        this.setState({
            selectedSongIds: this.state.selectedSongIds.filter(
                i => rowIds.indexOf(i) === -1
            ),
            selectedIndexes: this.state.selectedIndexes.filter(
                i => rowIndexes.indexOf(i) === -1
            )
        });
    };

    refreshTable(){
        Firebase.getLyrics().then( val => {
            this.setState({songs: val, filteredRows: this.getRows(val)})
        })
    }

    adminLogIn(){
        var tenure = prompt("Please enter master password to continue", "");
        if (tenure != null && tenure == "7779") {
            this.setState({adminLoggedIn: true})
        }else{
          alert("you are a liar and a fraud!!!")
          this.setState({adminLoggedIn: false})
        }
    }

    deleteSong(){
        var tenure = prompt("Please enter master password", "");
        if (tenure != null && tenure == "7779") {
            for (let i = 0; i < this.state.selectedSongIds.length; i++) {
                Firebase.deleteRecp(this.state.selectedSongIds[i])
                Firebase.storage().refFromURL(`gs://rimibayi-4b634.appspot.com/music/${this.state.selectedSongIds[i]}.mp3`).delete()
            }
        }else{
          alert("sorry, invalid password")
        }
    }

    updateSong(){
        this.props.history.push({
            pathname: "/lrcfixer/" + this.state.selectedSongIds[0],
            state: {
                lyrics: this.state.selectedSongLyrics,
                songId: this.state.selectedSongIds[0],
            }
        });
    }

    updateAnnotation(){
        this.props.history.push({
            pathname: "/annotationfixer/" + this.state.selectedSongIds[0],
            state: {
                lyrics: this.state.selectedSongLyrics,
                songId: this.state.selectedSongIds[0],
            }
        });
    }

    updatePopLine(){
        this.props.history.push({
            pathname: "/updatepopline/" + this.state.selectedSongIds[0],
            state: {
                lyrics: this.state.selectedSongLyrics,
                songId: this.state.selectedSongIds[0],
            }
        });
    }

    onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
        this.setState(state => {
          const filteredRows = state.filteredRows.slice();
          const rows = state.rows.slice();
          let updatingRow = {}

          for (let i = fromRow; i <= toRow; i++) {
            filteredRows[i] = { ...filteredRows[i], ...updated };
            rows[i] = { ...rows[i], ...updated };
            updatingRow = { ...filteredRows[i], ...updated }
          }

          return { filteredRows, rows, updatingRow };
        });
    };

    render() {
        if (!this.state.adminLoggedIn){
            return (
                <div lassName="Admin">
                    unauthorized access to this page!
                </div>
            )
        }
        return (
            <div className="Admin">
                <Header callerComponent={"karaokepage"} />
                <div className="Admin-table">
                    <ReactDataGrid
                        rowKey="id"
                        columns={columns}
                        rowGetter={i => this.state.filteredRows[i]}
                        rowsCount={this.state.filteredRows.length}
                        minHeight={500}
                        enableCellSelect={true}
                        toolbar={<Toolbar enableFilter={true} />}
                        onAddFilter={filter => this.handleFilterChange(filter)}
                        onClearFilters={() => this.setState({filters: []})}
                        onGridRowsUpdated={this.onGridRowsUpdated}
                        rowSelection={{
                            showCheckbox: true,
                            enableShiftSelect: true,
                            onRowsSelected: this.onRowsSelected,
                            onRowsDeselected: this.onRowsDeselected,
                            selectBy: {
                              indexes: this.state.selectedIndexes
                            }
                        }}
                    />
                    <Button
                        style={{ marginTop: 20, width: 200 }}
                        variant="outlined"
                        color="primary"
                        onClick={() => {
                            this.deleteSong()
                        }}
                    >
                        ({this.state.selectedIndexes.length}) Delete
                    </Button>
                    {" "}
                    <Button
                        style={{ marginTop: 20, width: 200 }}
                        variant="outlined"
                        color="primary"
                        onClick={() => {
                            this.refreshTable()
                        }}
                    >
                        Table Refresh
                    </Button>
                    {" "}
                    {
                        this.state.selectedIndexes.length == 1 && (
                            <div>
                                <Button
                                    style={{ marginTop: 20, width: 200 }}
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => {
                                        this.updateSong()
                                    }}
                                >
                                    Update Lyrics - ({this.state.selectedSongIds[0]})
                                </Button>
                                {" "}
                                <Button
                                    style={{ marginTop: 20, width: 200 }}
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => {
                                        Firebase.updateSongInfo(this.state.selectedSongIds[0], this.state.updatingRow)
                                    }}
                                >
                                    Save Update - ({this.state.selectedSongIds[0]})
                                </Button>
                                {" "}
                                <Button
                                    style={{ marginTop: 20, width: 200 }}
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => {
                                        this.updateAnnotation()
                                    }}
                                >
                                    Update Annotation - ({this.state.selectedSongIds[0]})
                                </Button>
                                {" "}
                                <Button
                                    style={{ marginTop: 20, width: 200 }}
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => {
                                        this.updatePopLine()
                                    }}
                                >
                                    popLine - ({this.state.selectedSongIds[0]})
                                </Button>
                            </div>
                        )
                    }
                </div>
                <UploadContent />
                <UploadSearcherBck />
                <UploadImgStory />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {};
};

const admin = withRouter(connect(mapStateToProps)(ConnectedAdmin));
export default admin;


//https://material-ui.com/components/material-icons/#material-icons