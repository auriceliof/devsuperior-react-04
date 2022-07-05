import './styles.css'

const MovieList = () => {
  return (
    <div className="base-card movielist-container">
      <div className="movielist-image">
        <img
          src="https://image.tmdb.org/t/p/w533_and_h300_bestv2/wu1uilmhM4TdluKi2ytfz8gidHf.jpg"
          alt="Bob Esponja"
        />
      </div>
      <div className="movielist-details">
        <h4 className="movielist-title">Bob Esponja</h4>
        <h5 className="movielist-year">2020</h5>
        <p className="movielist-description">O Incrível Resgate.</p>
      </div>
    </div>
  );
};
export default MovieList;
