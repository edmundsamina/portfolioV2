import "./portfolio.css";
import { v4 as uuidv4 } from 'uuid';

export function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt={props.title} />
      <div className="card-body-container">
        <div className="card-title">
        <span className="card-title-rectangle"></span>
        <h3>{props.title}</h3>
        
        </div>
       
        <p className="card-desc">{props.desc}</p>
        <div className="tags-container">
          {props.tags &&
            props.tags.map((tag) => {
              return <span key={uuidv4()}>{tag.toUpperCase()}</span>;
            })}
        </div>

        <div className="links">
          <a rel="noreferrer" target="_blank" href={props.url}>
            Live Site
          </a>
          <a rel="noreferrer" target="_blank" href={props.repo}>
            Repository
          </a>
        </div>
      </div>
    </div>
  );
}
