import { Link } from "react-router-dom";
import homeStyles from "./HomePage.module.css";

function Homepage() {
  return (
    <div className={homeStyles.container}>
      <main>
        <section className={homeStyles.hero}>
          <h1 className={homeStyles.logo}>
            💭 <span>Reflect</span>
          </h1>
          <p className={homeStyles.info}>
            <span>Document</span> your notable <br /> events all through the
            year
          </p>
          <p className={homeStyles.description}>
            <span>A year in review template.</span> Collate notable things that
            occured throughout the year for an easy year in review story or blog
            post.
          </p>
          <div className={homeStyles.cta_btns}>
            <Link to="/create">
              <button>Get Started</button>
            </Link>
            <Link to="/login">
              <button>Sign In</button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Homepage;
