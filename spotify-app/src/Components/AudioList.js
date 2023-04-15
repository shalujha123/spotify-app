import React, { useState, useEffect } from "react";
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from "react-icons/fa";
import Songs from "./Songs";
import MusicPlayer from "./MusicPlayer";

const AudioList = () => {
  const [songs, setSongs] = useState(Songs);
  const [song, setSong] = useState(Songs[0].song);
  const [img, setImage] = useState(Songs[0].imgSrc);

  useEffect(() => {
    const songs = document.querySelectorAll(".songs");

    // we can not use fat arrow function here must use normal function while firing event function
    function changeMenuActive() {
      songs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    songs.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  const changeFavourite = (id) => {
    Songs.forEach((music) => {
      if (music.id == id) {
        music.favourite = !music.favourite;
      }
    });
    setSongs([...Songs]);
  };


  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImage(imgSrc);
  }

  return (
    <div className="audioList">
      <h2 className="title">
        The list <span>{`${Songs.length} songs`}</span>
      </h2>
      <div className="songsContainer">
        {songs &&
          songs.map((music, index) => {
            const { id, songName, artist, song, imgSrc, favourite } = music;
            return (
              <div
                className="songs"
                key={id}
                onClick={() => setMainSong(song, imgSrc)}
              >
                <div className="count">{`#${index + 1}`}</div>
                <div className="song">
                  <div className="imgBox">
                    <img src={imgSrc} alt="" />
                  </div>
                  <div className="section">
                    <p className="songName">
                      {songName} <span className="spanArtist">{artist}</span>
                    </p>

                    <div className="hits">
                      <p className="hit">
                        <i>
                          <FaHeadphones />
                        </i>
                        95,450,102
                      </p>
                      <p className="duration">
                        <i>
                          <FaRegClock />
                        </i>
                        {song.length}
                      </p>

                      <div
                        className="favourite"
                        onClick={() => changeFavourite(id)}
                      >
                        {favourite ? (
                          <i>
                            <FaHeart />
                          </i>
                        ) : (
                          <i>
                            <FaRegHeart />
                          </i>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <MusicPlayer song = {song} imgSrc = {img} /> 
    </div>
  );
};

export default AudioList;
