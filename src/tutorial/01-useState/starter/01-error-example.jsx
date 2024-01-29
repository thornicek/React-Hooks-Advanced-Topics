const ErrorExample = () => {
  let count = 0;

  const incrementCLick = (()=>{
    count++;
    console.log(count)
  })

  return <div>
    <h2>{count}</h2>
    <button type="button" onClick={incrementCLick} className="btn">Click me</button>
  </div>
};

export default ErrorExample;
