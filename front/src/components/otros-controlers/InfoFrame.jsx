function InfoFrame({ info, imgInfo }) {
  return (
    <div className="txtConImg">
      <p>{info}</p>
      <img src={imgInfo} alt="imgDeUnCuadro"></img>
    </div>
  );
}

export default InfoFrame;
