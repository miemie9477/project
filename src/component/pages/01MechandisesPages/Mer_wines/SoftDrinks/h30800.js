import Frame from "../../../../BasicFrame/frame";
import Details from "../../Mer_Basics/details";
import QandA from "../../Mer_Basics/QandA";
import Comments from "../../Mer_Basics/Comments";


const TestCss = {
    position: "relative"
}

const FeverTreeGinger = () => {
    const pNo = "h30800";
    const Alcohol = "0";
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
  

export default FeverTreeGinger