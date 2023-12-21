export default function Text(props) {
  return(
    <div id="text">
      <form>
        <input id="left" type="text" value={props.topText} name="topText" onChange={props.handleChange}/>
        <input id="right" type="text" value={props.bottomText} name="bottomText" onChange={props.handleChange}/>
        <button onClick={props.getNewImage}>Get a new meme image🖼️</button>
      </form>
    </div>
  )
}