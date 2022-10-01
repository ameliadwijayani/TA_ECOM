import React from 'react'
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import styled from '@emotion/styled'
import {graphql} from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Img from "gatsby-image"
import { setItem } from "../utils/auth"
// import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"


export default function Product({data}) {
    const P = styled.p(
        {
          fontSize: 20
        },
        props => ({ color: props.color })
    )
    const [qty,setQty]=React.useState(0)
    // const { addItem } = useShoppingCart()

        
    React.useEffect(()=>{
        console.log(data)
    },[])
    const _data=  data.stripePrice
    function header_product(){
        return(
            <div id="breadcrumb" className="section">
            <div className="container">
                {/* row */}
                <div className="row">
                <div className="col-md-12">
                    {/* <ul className="breadcrumb-tree">
                    <li><a href="#">Home{_data.fields.readingTime.time}</a></li>
                    <li><a href="#">All Categories</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Headphones</a></li>
                    <li className="active">{markdown.title}</li>
                    </ul> */}
                </div>
                </div>
                {/* /row */}
            </div>
            {/* /container */}
            </div>
        )
    }
    function main_product(){
        return(
            <div>
                <div className="col-md-5 col-md-push-2">
                    <div id="product-main-img">
                        <div className="product-preview">
                        <img src={data.stripePrice.product.images[0]}  />
                        </div>
                    </div>
                </div>
                <div class="col-md-2  col-md-pull-5">
                    <div id="product-imgs">

                    </div>
                </div>
                {/* Product details */}
                <div className="col-md-5">
                    <div className="product-details">
                    <h2 className="product-name">{data.stripePrice.product.name}</h2>
                    <div>
                        <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        </div>
                    
                    </div>
                    <div>
                        <h3 className="product-price">${data.stripePrice.unit_amount/100}</h3>
                        <span className="product-available">In Stock 
                        {/* <p>{_data.fields.readingTime.time} menit</p> */}
                        </span>
                    </div>
                    <P color="grey">{data.stripePrice.product.description}</P>
                    <div className="add-to-cart">

                        <div className="qty-label">
                        Qty
                        <div className="input-number">
                            <input type="number" value={qty} />
                            <span className="qty-up" onClick={()=>{setQty(qty+1)}}>+</span>
                            <span className="qty-down" onClick={()=>{setQty(qty-1)}}>-</span>
                        </div>
                        </div>
                        <button onClick={()=>{setItem(_data,qty)}} className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                    </div>
                
                    <ul className="product-links">
                        {/* <li>Share:</li> */}
                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                        <li><a href="#"><i className="fa fa-envelope" /></a></li>
                    </ul>
                    </div>
                </div>
            </div>

        )
    }
    function detail_product(){
        return(
            <div className="col-md-12">
            <div id="product-tab">
                {/* product tab nav */}
                <ul className="tab-nav">
                <li className="active"><a data-toggle="tab" href="#tab1">Description</a></li>
               
                </ul>
                {/* /product tab nav */}
                {/* product tab content */}
                <div className="tab-content">
                {/* tab1  */}
                <div id="tab1" className="tab-pane fade in active">
                    <div className="row">
                    <div className="col-md-12">
                        <p>{data.stripePrice.product.description}</p>
                    </div>
                    </div>
                </div>
                {/* /tab3  */}
                </div>
                {/* /product tab content  */}
            </div>
        </div>
        )
    }
  return (
      <Layout>
            {/* {header_product()} */}
            <div className="section">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                        {main_product()}
                        {detail_product()}
                    </div>
                </div>
            </div>
      </Layout>
  )
}


export const query = graphql`
    query($id: String!) {
        stripePrice ( id: { eq: $id} ){
            id
            product{
                id
                description
                default_price
                images
                name
            }
            unit_amount
        }
    }
`

