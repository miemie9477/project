import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from "react-router-dom";
import Ad1 from "./pic/ad1.png"
import Ad2 from "./pic/ad2.png"
import Ad3 from "./pic/ad3.png"
import gin from "./pic/gin.png"
import vodka from "./pic/vodka.jpg"
import brandy from "./pic/brandy.jpeg"
import rum from "./pic/rum.jpg"
import whiskey from "./pic/whiskey.jpg"
import tequila from "./pic/tequila.jpg"
import liqueur from "./pic/liqueur.jpg"
import softdrinks from "./pic/softdrinks.jpg"
import waitforupdate from "./pic/waitforupdate.jpg"
import "./css/HomePage.css"

function HomeCarousel() {
    return (
        <div>
            <div className='CarouselCss'>
            
                <Carousel>
                    <Carousel.Item interval={3000} >
                        <img src={Ad1} alt="ad1"/>
                        <Carousel.Caption >
                            <div className="CarouselAd1Text">
                                <h4 style={{fontWeight:"lighter"}}>熱情推薦</h4>
                                <h1 style={{fontWeight:"bold", marginBottom:"15px"}}>白州12年單一純麥威士忌</h1>
                                <h4>清透的琥珀色澤與清爽香氣，</h4>
                                <h4>獨特的威士忌風味體驗。</h4><br/>
                                <NavLink to="/WhiskeyPage/e52220"><Button variant="outline-light" style={{padding:"10px", marginLeft:"10px"}}>立即享受</Button>{' '}</NavLink>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={3000} >
                        <img src={Ad2} alt="ad2"/>
                        <Carousel.Caption >
                            <div className="CarouselAd2Text">
                                <h4 style={{fontWeight:"lighter"}}>本月暢銷</h4>
                                <h1 style={{fontWeight:"bold", marginBottom:"15px"}}>灰雁原味伏特加</h1>
                                <h4>瓶身選用霧面磨砂玻璃，錫箔密封軟木塞瓶塞，呈現出與眾不同的精品級質感。</h4><br/>
                                <NavLink to="/VodkaPage/b60101"><Button variant="outline-light" style={{padding:"10px", marginLeft:"10px"}}>點我選購</Button>{' '}</NavLink>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={3000} >
                        <img src={Ad3} alt="ad3"/>
                        <Carousel.Caption >
                            <div className="CarouselAd3Text">
                                <h4 style={{fontWeight:"lighter"}}>超凡風味</h4>
                                <h1 style={{fontWeight:"bold", marginBottom:"15px"}}>約翰走路 黑牌12年</h1>
                                <h4>各地區氣候和橡木桶等錯綜複雜的因素與略有不同的成熟方式，創造出獨具超凡風味的威士忌</h4><br/>
                                <NavLink to="/WhiskeyPage/e27777"><Button variant="outline-light" style={{padding:"10px", marginLeft:"10px"}}>即刻入手</Button>{' '}</NavLink>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>


                </Carousel>
                
            </div>
            <div >
                <div className='Dividerline'></div>
                <Container style={{marginTop:"10px"}}>
                    <Row>
                        <Col className='Category' style={{backgroundImage: `url(${gin})`}}><NavLink to="/GinPage">琴酒</NavLink></Col>
                        <Col className='Category' style={{backgroundImage: `url(${vodka})`}}><NavLink to="/VodkaPage">伏特加</NavLink></Col>
                        <Col className='Category' style={{backgroundImage: `url(${brandy})`}}><NavLink to="/BrandyPage">白蘭地</NavLink></Col>
                    </Row>
                    <Row>
                        <Col className='Category' style={{backgroundImage: `url(${rum})`}}><NavLink to="/RumPage">蘭姆酒</NavLink></Col>
                        <Col className='Category' style={{backgroundImage: `url(${whiskey})`}}><NavLink to="/WhiskeyPage">威士忌</NavLink></Col>
                        <Col className='Category' style={{backgroundImage: `url(${tequila})`}}><NavLink to="/TequilaPage">龍舌蘭</NavLink></Col>
                    </Row>
                    <Row>
                        <Col className='Category' style={{backgroundImage: `url(${liqueur})`}}><NavLink to="/LiqueurPage">利口酒</NavLink></Col>
                        <Col className='Category' style={{backgroundImage: `url(${softdrinks})`}}><NavLink to="/SoftDrinksPage">無酒精</NavLink></Col>
                        <Col className='Category' style={{backgroundImage: `url(${waitforupdate})`}}><NavLink to="#">敬請期待</NavLink></Col>
                    </Row>
                </Container>
            </div>
        </div>

    );
  }

  export default HomeCarousel