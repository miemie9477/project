import Frame from "../../../BasicFrame/frame";
import Details from "./details"
import QandA from "./QandA";
import Comments from "./Comments";


const TestCss = {
    position: "relative"
}

const GordonsGin = () => {
    const pNo = "a10010";
    return(
        <div>
            <div style={TestCss}>
            <Frame/>
            <Details pNo={pNo}/>
            <br/><br/><br/><br/>
            <QandA />
            <br/><br/><br/>
            <Comments pNo={pNo}/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </div>
    );
}
  

export default GordonsGin