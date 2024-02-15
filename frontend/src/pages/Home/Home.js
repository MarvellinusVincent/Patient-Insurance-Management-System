import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <header>
        <h1>
          CareConnect<span>360</span>
        </h1>
        <nav>
          <ul>
            <li>
              <button>
                <Link className="nav-link">Log in</Link>
              </button>
            </li>
            <li>
              <button>
                <Link className="nav-link">Sign up</Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="home-introduction">
          <h2>Simplify Your World: All-in-One, All for You.</h2>
          <p>Connecting Health, Insurance, and Care with Seamless Precision.</p>
        </div>
      </main>
      <footer>
        <p>© 2024 CareConnect360. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
