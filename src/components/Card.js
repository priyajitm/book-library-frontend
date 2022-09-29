const Card = ({id, image, handleClick}) => {

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." onClick={() => handleClick(id)}/>
      <div className="card-overlay-buttons">
        <button>See Details</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default Card;
