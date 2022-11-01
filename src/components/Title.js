const Title = ({ data, index }) => {
  return (
    <div className="container">
      {data.map((elem, index) => {
        return (
          <div>
            <div>{elem.category}</div>

            {elem.images.map((elem) => {
              return <img className="img-carrousel" src={elem} alt="" />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Title;
