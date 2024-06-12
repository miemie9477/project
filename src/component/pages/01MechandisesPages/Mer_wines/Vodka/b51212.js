import Frame from "../../../../BasicFrame/frame";
import Details from "../../Mer_Basics/details";
import QandA from "../../Mer_Basics/QandA";
import Comments from "../../Mer_Basics/Comments";


const TestCss = {
    position: "relative"
}

const Smirnoff = () => {
    const pNo = "b51212";
    const Alcohol = "37.5";
    return(
        <div>
            <div style={TestCss}>
            <Frame/>
            <Details pNo={pNo} Alcohol={Alcohol}/>
            <br/><br/><br/><br/>
            <QandA />
            <br/><br/><br/>
            <Comments pNo={pNo}/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </div>
    );
}
  

export default Smirnoff