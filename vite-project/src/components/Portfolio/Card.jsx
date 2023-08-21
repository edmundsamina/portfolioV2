import "./portfolio.css";

export function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt={props.title} />
      <div className="card-body-container">
        <h3 className="card-title">{props.title}</h3>

        <p className="card-desc">{props.desc}</p>
        <div className="tags-container">
          {props.tags &&
            props.tags.map((tag) => {
              return <span>{tag.toUpperCase()}</span>;
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
