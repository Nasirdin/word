import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { words } from "../../word/word";
import "./index.scss";

function AskWords() {
  const [indexWord, setindexWord] = useState();
  const [en, setEn] = useState(1);
  const [error, setError] = useState("");
  const [active, setActive] = useState(false);
  const onSubmitForm = (e) => {
    e.preventDefault();

    let inputValue = e.target.children[1].value;
    if (words[indexWord].ru === inputValue && en == 1) {
      setError("Success");
      setindexWord(Math.floor(Math.random() * words.length));
      setEn(Math.floor(Math.random() * 2));
      setActive(true);
    } else if (words[indexWord].en === inputValue && en == 0) {
      setError("Success");
      setindexWord(Math.floor(Math.random() * words.length));
      setEn(Math.floor(Math.random() * 2));
      setActive(true);
    } else {
      setError("Ouch! you made a mistake");
      setActive(false);
    }
  };

  useEffect(() => {
    setindexWord(Math.floor(Math.random() * words.length));
    setEn(Math.floor(Math.random() * 2));
  }, []);

  return (
    <div className="askWords">
      <div className="container">
        <p className={!active ? "error" : "success"}>{error}</p>
        <form className="askWords__form" onSubmit={onSubmitForm}>
          <label className="askWords__word label">
            {en === 1 ? `${words[indexWord]?.en}` : `${words[indexWord]?.ru}`}
          </label>
          <input className="askWords__input input" id="word" />
          <input type="submit" className="askWords__btn btn" value="Submi" />
          <Link to="/">Cancel</Link>
        </form>
      </div>
    </div>
  );
}

export default AskWords;
