const Action = ({moveLeft,moveRight}) => {
  return (
    <div className="actions flex">
      <button onClick={moveLeft}>&gt;</button>
      <button onClick={moveRight}>&lt;</button>
    </div>
  );
};
export default Action;
