import { useState } from "react";
import { Link } from "react-router-dom";
import { words } from "../../word/word.js";
import "./index.scss";

function AddWords() {
  const submitWord = (e) => {
    e.preventDefault();
    let en = e.target.children[0].children[0].value;
    let ru = e.target.children[1].children[0].value;
  };

  return (
    <div className="addWords">
      <form className="addWords__form" onSubmit={submitWord}>
        <label className="addWords__label label">
          En
          <input className="addWords__input input" />
        </label>
        <label className="addWords__label label">
          Ru
          <input className="addWords__input input" />
        </label>
        <input className="addWords__btn btn" type="submit" value="Add"/>
        <Link to="/">Cancel</Link>
      </form>
    </div>
  );
}

export default AddWords;
