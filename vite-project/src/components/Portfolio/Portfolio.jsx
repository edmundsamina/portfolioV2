import { Card } from "./Card";
import { portfolioData } from "../../projectData";
import { v4 as uuidv4 } from 'uuid';
import './portfolio.css';

console.log(portfolioData)

export function Portfolio() {
  return (
    <div className="portfolio-container">
       <h3 className="featured">
          {" "}
          <span>
            <svg
              width="40"
              height="3"
              viewBox="0 0 94 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.864258"
                y1="1.98284"
                x2="93.288"
                y2="1.98284"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </span>{" "}
          Featured{" "}
        </h3>
      <div className="featured-projects">
        {portfolioData.filter((data)=>{
          return data.featured === true
        }).map((card)=> {
          return <Card key={uuidv4()} tags={card.tags} img = {card.img} title={card.title} desc={card.desc} url={card.url} repo={card.repo}/>
        })}
      </div>
      <h3 className="other-projects">
          {" "}
         {" "}
          Other Projects{" "}
          <span>
            <svg
              width="40"
              height="3"
              viewBox="0 0 94 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.864258"
                y1="1.98284"
                x2="93.288"
                y2="1.98284"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </span>
        </h3>
        <div className="other-work">
        {portfolioData.filter((data)=>{
          return data.featured === false
        }).map((card)=> {
          return <Card key={Math.random()*1212121} img = {card.img} title={card.title} desc={card.desc} url={card.url} repo={card.repo} tags={card.tags}/>
        })}
      </div>
    </div>
  );
}
