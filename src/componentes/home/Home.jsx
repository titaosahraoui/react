import React from "react";
import { Link } from "react-router-dom";
import { articals } from "./data";
import "./home.css";
const Home = () => {
  return (
    <div>
      <div className="header">
        <h1>Articels</h1>
      </div>
      <div className="container">
        {articals.map((i, key) => (
          <div className="card" key={i.id}>
            <Link to={`/images/${i.id}`}>
              <img src={i.img} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
