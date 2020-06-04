class Machine extends React.Component{
  render(){
    let s1 = this.props.s1;
    let s2 = this.props.s2;
    let s3 = this.props.s3;
    let msg; 
    if (s1===s2 && s2===s3) {
      msg =  <p>You win</p>
    }else{
      msg = <p>You lose</p>
    }
    return(
      <div>
        <p>{s1} {s2} {s3}</p>
        <p>{msg}</p>
      </div>
    );
  }
}