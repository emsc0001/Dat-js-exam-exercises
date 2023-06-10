"use strict";

window.addEventListener("load", start)


async function start () {
    const songs = await getPlaylist();
    getPlaylist()
    songs.forEach(showSongs);
    document.querySelector("#remove").addEventListener("click", removeSong)
}

async function getPlaylist () {
    const response = await fetch("playlist.json");
    const data = await response.json()
    return data;
}

function showSongs (song) {
    document.querySelector("#songlist").insertAdjacentHTML(
    "beforeend", /*HTML*/`
    <li> ${song.artist}</li>
    <button id="remove">Remove</button>`)
         
}


// _________________________________________ Øvelse 23 ___________________________________ //

// const songs = [
//     {
//         artist: "yeah",
//         title: "something",
//         duration: "2:24",
//     },
//     {
//         artist: "yeah2",
//         title: "something2",
//         duration: "1:55",
// },
// {
//       artist: "yeah3",
//       title: "something3",
//       duration: "33:33",
// }
// ];


// window.addEventListener("load", start)

// function start () {
//     console.log("hello");
//     showSongs();
// }

// function showSongs() {
//     document.querySelector("#songlist").innerHTML = "";
//     for (const song of songs) {
//         const html = `
//         <li>${song.artist}, ${song.title}, ${song.duration} <button>Upvote</button></button></li>
//         `;
//     document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
//     document.querySelector("#songlist li:last-child button").addEventListener("click", upvoteClicked);
//     const songId = songs.indexOf(song)
//     function upvoteClicked(){
//         if (songId !== 0) {
//         songs.splice(songId, 1)
//         songs.splice(songId -1, 0, song);
//         showSongs();
//     }
// }
// }
// }




