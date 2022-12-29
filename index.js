const Box = props => {
  //  Write your code here.
  return (
      <div className={`${props.className}`}>
          <p>{props.text</p>
      </div>
  );
};

const element = (
  //  Write your code here..
  <div>
      <h1>Boxes</h1>
      <div className=boxContainer>
          <Box className="box box1" text="small"/>
          <Box className="box box2" text="medium"/>
          <Box className="box box3" text="large"/>
      </div>
  </div>
)

ReactDOM.render(element, document.getElementById("root"));
