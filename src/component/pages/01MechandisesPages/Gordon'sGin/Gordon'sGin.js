import Frame from "../../../BasicFrame/frame";
import Details from "./details"
import QandA from "./QandA";
import Comments from "./Comments";


const TestCss = {
    position: "relative"
}

const GordonsGin = () => {
    return(
        <div>
            <div style={TestCss}>
            <Frame/>
            <Details />
            <br/><br/><br/><br/>
            <QandA />
            <br/><br/><br/>
            <Comments />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </div>
    );
}
  

export default GordonsGin