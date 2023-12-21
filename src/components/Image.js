export default function Image(props) {
  return(
    <div id="image">
      <img src={props.url} alt="Meme"/>
      <div id="upper">
        <h1>{props.topText}</h1>
      </div>
      <div id="lower">
        <h1>{props.bottomText}</h1>
      </div>
    </div>
  )
}