import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import Img from "gatsby-image"
import {graphql,Link} from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { GatsbyImage } from "gatsby-plugin-image"
import { useHistory ,useLocation } from 'react-router-dom';
import { useFlexSearch } from 'react-use-flexsearch';

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51L0Zk4A7C8rU4XCnfZEY5yGnJDujOdY2CxQkSHUbAE22YPCcpmYLc3HOQHpkriiba6USkmNHyLrivD57tzFG3Aay00f3s7NEgp")
  }
  return stripePromise
}

export default function Store({ path,data: {
    localSearchPages: { index, store },
    allStripePrice: { edges },
}},props) {
    const unFlattenResults = results =>{
        results!=[]&&results.map(post => {
            const {id,name,description,images,default_price,currency,unit_amount,unit_amount_decimal} = post;
            
            return { edges: { id,name,description,images,default_price,currency,unit_amount,unit_amount_decimal } };
        });
        return results;
    }
    
    const [loading, setLoading] = useState(false)
    async function redirectToCheckout(price){
        setLoading(true)
        const stripe = await getStripe()
        const { error } = await stripe.redirectToCheckout({
            mode: "payment",
            lineItems: [{ price: price, quantity: 1 }],
            successUrl: `http://localhost:8000/`,
            cancelUrl: `http://localhost:8000/Checkout?p=${price}`,
        })
        if (error) {
            console.warn("Error:", error)
            setLoading(false)
        }
        
    }
    let s = "";
    const query = new URLSearchParams(s).get('s')
    const [searchQuery, setSearchQuery] = useState(query || '');
    const results = useFlexSearch(searchQuery, index, store);
    const posts = searchQuery ? unFlattenResults(results) : edges;
    if (typeof window !== 'undefined') {
        s=typeof window !== 'undefined'?window.location:"";
        
        
      

        function header_store(){
            return(
                <div id="breadcrumb" className="section">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                    <div className="col-md-12">
                        <ul className="breadcrumb-tree">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">All Categories</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li className="active">Headphones (227,490 Results)</li>
                        </ul>
                    </div>
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
                </div>

            )
        }
        function categories(){
            return(
            <div className="section">
            {/* container */}
            <div className="container">
                {/* row */}
                <div className="row">
                <div id="store" className="col-md-9">
                    {/* store products */}
                    <div className="row">
                        {/* product */}
                        {posts.map((e,index)=>{
                            if(e.name==undefined){
                                e.id2=e.node?.product.id;
                                e.name=e.node?.product.name;
                                e.unit_amount=e.node?.unit_amount;
                                e.default_price=e.node?.product.default_price;
                                e.images=e.node?.product.images[0];
                            }
                            return(
                                <div className="col-md-4 col-xs-6" key={index}>
                                    <div className="product">
                                        <div className="product-img">
                                            <img src={e.images} alt ="Img"  />
                                            <GatsbyImage alt="produk img" image= {(e.images)}/>
                                            <div className="product-label">
                                            
                                            </div>
                                        </div>
                                        <div className="product-body">
                                            
                                            <h3 className="product-name"><Link to={`/${e.id}`}>{e.name}</Link></h3>

                                            <h4 className="product-price">Rp {e.unit_amount}</h4>
                                            <div className="product-rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            </div>
                                        </div>
                                        <div className="add-to-cart">
                                            <button className="add-to-cart-btn" 
                                            onClick={()=>redirectToCheckout(e.default_price)}><i className="fa fa-shopping-cart" /> add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    {/* /product */}
                    </div>
                    {/* /store products */}
                    {/* store bottom filter */}
                    <div className="store-filter clearfix">
                    <span className="store-qty">Showing 20-100 products</span>
                    {/* <ul className="store-pagination">
                        <li className="active">1</li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#"><i className="fa fa-angle-right" /></a></li>
                    </ul> */}
                    </div>
                    {/* /store bottom filter */}
                </div>
                {/* /STORE */}
                </div>
                {/* /row */}
            </div>
            {/* /container */}
            </div>

            )
        }
        return (
            <div>
                <Header
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    searchData={{  }}
                />
                    { header_store()}
                    { categories()}
                <Footer/>
            </div>
        )
    }
    
    // const posts = edges;
return null;

}

export const query = graphql`
    query {
        localSearchPages {
            store
            index
        }
        allStripePrice {
            edges {
              node {
                id
                product {
                  images
                  name
                  id
                  description
                  default_price
                }
                currency
                unit_amount
                unit_amount_decimal
              }
            }
          }
    }
`



