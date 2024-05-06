import withCounter from "./withCounter";
const ButtonClick = (props) => {
const{count,incrementCount}=props;
  return (
    <div>
      <button onClick={incrementCount} >Click</button>
      <h3>Counter:{count}</h3>
    </div>
  )
}
export default withCounter(ButtonClick,10)