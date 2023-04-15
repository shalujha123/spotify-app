import React from "react";
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";
import PlayList from "./PlayList";

const MenuPlaylist = () => {
  return (
    <div className="playListContainer">
      <div className="nameContainer">
        <p>PlayList</p>
        <i>
          <FaPlus />
        </i>
      </div>
      <div className="playListScroll">
        {PlayList &&
          PlayList.map((list) => {
            const { id, name } = list;
            return (
              <div className="playList" key={id}>
                <i className="list">
                  <BsMusicNoteList />
                </i>
                <p>{name}</p>
                <i className="trash">
                  <BsTrash />
                </i>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MenuPlaylist;
