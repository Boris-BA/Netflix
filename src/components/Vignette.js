const Vignette = ({ data }) => {
  return (
    <>
      {data.map((elem) => {
        return <img className="img-carrousel" src={elem}></img>;
      })}
    </>
  );
};

export default Vignette;
