import { Link } from "react-router-dom";
import "./index.scss"

function Home() {
  return (
    <div className="home">
      <div className="container">
        <Link to="/askWords" className="home__btn btn">
        Training
        </Link>
        <Link to="/addWords" className="home__btn btn">
        Add words
        </Link>
      </div>
    </div>
  );
}

export default Home;
