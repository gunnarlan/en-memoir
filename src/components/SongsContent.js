import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "../config";
import hash from "./hash";
import Player from "./Player";
import logo from "./logo.svg";

/*
const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fullWidth: {
    width: "100%",
    height: "100%",
  },
  bigAvatar: {
    margin: 30,
    width: 160,
    height: 160,
  }
}));

function SongsContent() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
      <div className={classes.title}>
        <Typography variant="h4">Add your memories</Typography>
      </div>
      <div className={classes.content}>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus,
          nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem
          felis nec erat
        </Typography>
      </div>
    </main>
  );
}
*/

class SongsContent extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{ url: "" }]
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms: 0
      },
      is_playing: "Paused",
      progress_ms: 0
    };
    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    this.getUserData = this.getUserData.bind(this);
    this.search = this.searchAlbums.bind(this);
    this.fetchTracks = this.fetchTracks.bind(this);
  }

  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    console.log("componentDidMount", hash, _token);

    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
      this.getCurrentlyPlaying(_token);
      // this.getUserData(_token);
      // this.search("Maluma", _token);
      // this.fetchTracks(albumId, _token);
    }
  }

  getCurrentlyPlaying(token) {
    // Make a call using the token
    $.ajax({
      url: "https://api.spotify.com/v1/me/player",
      type: "GET",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: data => {
        console.log("data", data);
        if (data) {
          this.setState({
            item: data.item,
            is_playing: data.is_playing,
            progress_ms: data.progress_ms
          });
        } else {
          this.setState({
            item:  {
              album: {
                images: [{ url: "" }]
              },
              name: "Empty",
              artists: [{ name: "" }],
              duration_ms: 0
            },
            is_playing: false,
            progress_ms: 0
          });
        }
      }
    });
  }

  getUserData(token) {
    // Make a call using the token
    $.ajax({
      url: "https://api.spotify.com/v1/me",
      type: "GET",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: data => {
        console.log("data", data);
        /*this.setState({
          item: data.item,
          is_playing: data.is_playing,
          progress_ms: data.progress_ms
        });*/
      }
    });
  }

  searchAlbums(query, token) {
    // Make a call using the token
    $.ajax({
      url: "https://api.spotify.com/v1/search",
      type: "GET",
      data: {
          q: query,
          type: 'album'
      },
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: data => {
        console.log("data", data);
        /*this.setState({
          item: data.item,
          is_playing: data.is_playing,
          progress_ms: data.progress_ms
        });*/
      }
    });
  }

  fetchTracks(albumId, token) {
    // Make a call using the token
    $.ajax({
      url: 'https://api.spotify.com/v1/albums/' + albumId,
      type: "GET",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: data => {
        console.log("data", data);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {!this.state.token && (
            <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token`}
            >
              Login to Spotify
            </a>
          )}
          {this.state.token && (
            <Player
              item={this.state.item}
              is_playing={this.state.is_playing}
              progress_ms={this.progress_ms}
            />
          )}
        </header>
      </div>
    );
  }
}

export default SongsContent;