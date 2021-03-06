import React from 'react'
import {Row , Col} from 'react-bootstrap'

function ProductList(props) {

    function convertIDR(s){
        let	reverse = s.toString().split('').reverse().join(''),
        converted 	= reverse.match(/\d{1,3}/g);
        converted	= converted.join('.').split('').reverse().join('');
        return converted
    }
    
    return (
        <Row className="d-flex justify-content-center d-lg-grid myProductListRow">
            {props.data && props.data.map((item,index)=>(
                <Col key={index} className="myCardFrame p-0 mb-5" xs={12} lg={4}>
                    <div className="myCardImageFrame position-relative">
                        <img
                            alt=""
                            src={item.image ? "/compressed"+item.image : props.imgNotFoundPotrait}
                            className={item.status === 0 ? "myCardImage" : "myCardImageSold"}
                            onClick={(e)=>{
                                if(props.fashion){
                                    window.location=`/fashion/${item.id}`
                                } else
                                window.location=`/cosmetic/${item.id}`
                            }}
                            onError={(e)=>{e.target.src=props.imgNotFoundPotrait}}
                        />
                        {item.status === 1 && 
                            <div className="position-absolute top-0 h-25 w-100 d-flex justify-content-center align-items-center  ">
                                <div className="mySold text-center w-50 rounded rounded-pill">Sold Out</div>
                            </div>
                        }
                    </div>
                    <div className="my-3 px-3 text-break">
                        <h4 className="fw-bold text-uppercase">{item.name}</h4>
                        <h5>Rp {convertIDR(item.priceInd)}</h5>
                        <p className="text-secondary">(NT$ {item.priceTwn})</p>
                    </div>
                    
                </Col>
            ))}
        </Row>
    )
}

export default ProductList
