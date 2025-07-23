import image from '../assets/newsimage.jpeg';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: '345px' }}
    >
      <img
        src={src || image}
        className="card-img-top"
        alt={title}
        height={200}
        width={360}
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : 'News from this card is coming from newsapi.org website'}
        </p>
        <a href={url} className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};
export default NewsItem;
