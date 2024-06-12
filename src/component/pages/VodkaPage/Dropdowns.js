import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const divshadow = {
    boxShadow: '0px 5px 5px #8b8b8b',
}

const Dropdowns = () => {
    return(
        <div style={divshadow}>
            <div className="Dropdowns"> 
            <Container>
                <Row>
                    <Col>
                        {/* <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={NavLink}>品牌</Dropdown.Toggle>
                            <Dropdown.Menu role="menuitemcheckbox">
                                <Container fluid>
                                    <Row>
                                        <Col> <input type="checkbox" name='brand'/>品牌1 </Col>
                                        <Col> <input type="checkbox" name='brand'/>品牌2 </Col>
                                        <Col> <input type="checkbox" name='brand'/>品牌3 </Col>
                                    </Row>
                                    <Dropdown.Divider></Dropdown.Divider>
                                    <Row>
                                        <Col> <input type="checkbox" name='brand'/>品牌4 </Col>
                                        <Col> <input type="checkbox" name='brand'/>品牌5 </Col>
                                        <Col> <input type="checkbox" name='brand'/>品牌6 </Col>
                                    </Row>
                                    <Dropdown.Divider></Dropdown.Divider>
                                    <Row>
                                        <Col><input type="checkbox" name='brand'/>品牌7</Col>
                                        <Col> <input type="checkbox" name='brand'/>品牌8 </Col>
                                        <Col> <input type="checkbox" name='brand'/>品牌9 </Col>
                                    </Row>
                                    <Dropdown.Divider></Dropdown.Divider>
                                    <Row>
                                        <Col><input type="button" value={"套用"} className="ApplyButton" /></Col>
                                    </Row>
                                </Container>
                            </Dropdown.Menu>
                        </Dropdown> */}

                    </Col>
                    <Col>
                    
                        {/* <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={NavLink}>國家</Dropdown.Toggle>
                            <Dropdown.Menu role="menuitemcheckbox">
                                <Container fluid>
                                    <Row>
                                        <Col> <input type="checkbox" name='country'/> 國家1 </Col>
                                        <Col> <input type="checkbox" name='country'/> 國家2 </Col>
                                        <Col> <input type="checkbox" name='country'/> 國家3 </Col>
                                    </Row>
                                    <Dropdown.Divider></Dropdown.Divider>
                                    <Row>
                                        <Col> <input type="checkbox" name='country'/> 國家4 </Col>
                                        <Col> <input type="checkbox" name='country'/> 國家5 </Col>
                                        <Col> <input type="checkbox" name='country'/> 國家6 </Col>
                                    </Row>
                                    <Dropdown.Divider></Dropdown.Divider>
                                    <Row>
                                        <Col><input type="checkbox" name='country'/> 國家7</Col>
                                        <Col> <input type="checkbox" name='country'/> 國家8 </Col>
                                        <Col> <input type="checkbox" name='country'/> 國家9 </Col>
                                    </Row>
                                    <Dropdown.Divider></Dropdown.Divider>
                                    <Row>
                                        <Col><input type="button" value={"套用"} className="ApplyButton" /></Col>
                                    </Row>
                                </Container>
                            </Dropdown.Menu>
                        </Dropdown> */}

                    </Col>
                    <Col md={6} className='DropdownsCol3'>
                            {/* 價格排序<input type="button" name="pricelistButton" value={"↕"} className='pricelistButton'/> */}
                    </Col>
                </Row>
            </Container>
            
            </div>
            <div className='FRbackground'>
                <div className='FilterResult'>
                    {/* <div className='FRfirst'>篩選</div>
                    <div className='FRn'> England 英國 <input type="button" value={"×"} className='clearButton'/></div>
                    <div className='FRend'><input type="button" value={"重設全部"} className='resetButton'/></div> */}
                </div>
            </div>
        </div>
        
        
        
    );
}
export default Dropdowns