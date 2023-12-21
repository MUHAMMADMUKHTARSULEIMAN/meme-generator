// import {useState} from "react"
export default function BoxToggle(props) {
    // const [on, setOn] = useState(props.on);

    // function toggle() {
    //   setOn(prevState => !prevState);
    // }

    const styles = props.on ? {backgroundColor: "#222222"} : {backgroundColor: "transparent"};

  return(
    <div style={styles} className="box" onClick={() => props.toggle(props.id)}></div>
  )
}