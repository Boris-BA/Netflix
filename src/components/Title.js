import Vignette from "./Vignette";

const Title = ({ data, index }) => {
  return (
    <div className="title">
      {data.map((elem, index) => {
        return (
          <>
            <div className="titre">{elem.category}</div>
            <div className="title2">
              <Vignette data={elem.images}></Vignette>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Title;
