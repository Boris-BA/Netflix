const Vignette = ({ data }) => {
  return (
    <>
      {data.map((elem) => {
        return <img className="img-carrousel" src={elem} alt=""></img>;
      })}
    </>
  );
};

export default Vignette;
