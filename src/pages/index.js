import React from 'react'
import Layout from "../components/Layout"
import { StaticImage} from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql,Link} from "gatsby"

import { login, logout, isAuthenticated, getProfile,setItem } from "../utils/auth"


export default function ({data}) {
  
  // if (!isAuthenticated()) {
  //   login()
  //   return <p>Redirecting to login...</p>
  // }
  // const user = getProfile()

  const [Loading,setLoading]=React.useState(false)
  React.useEffect(()=>{
        
    let script = document.createElement('script')
    script.src="js/jquery.min.js"
    script.async=true
    document.body.appendChild(script)

    setLoading(true)
  },[])
  const [allMarkdownRemark, setallMarkdownRemark]  = React.useState(data.allStripePrice.edges); 
  

      function A(){
        return(
          <div className="section">
            {/* container */}
            <div className="container">
              {/* row */}
              <div className="row">
                {/* shop */}
                <div className="col-md-4 col-xs-6">
                  <div className="shop">
                    <div className="shop-img">
                    {/* <StaticImage src="./img/shop01.png" alt="A dinosaur" /> */}
                      
                    </div>
                    <div className="shop-body">
                      <h3>Laptop<br />Collection</h3>
                      <a><Link to="/Store"  className="cta-btn">Shop now <i className="fa fa-arrow-circle-right" /> </Link></a>
                    </div>
                  </div>
                </div>
                {/* /shop */}
                {/* shop */}
                <div className="col-md-4 col-xs-6">
                  <div className="shop">
                    <div className="shop-img">
                    <StaticImage src="./img/shop03.png" alt="A dinosaur" />
                    </div>
                    <div className="shop-body">
                      <h3>Accessories<br />Collection</h3>
                      <a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right" /></a>
                    </div>
                  </div>
                </div>
                {/* /shop */}
                {/* shop */}
                <div className="col-md-4 col-xs-6">
                  <div className="shop">
                    <div className="shop-img">
                    <StaticImage src="./img/shop02.png" alt ="Img" />
                    </div>
                    <div className="shop-body">
                      <h3>Cameras<br />Collection</h3>
                      <a><Link to="/Store"  className="cta-btn">Shop now <i className="fa fa-arrow-circle-right" /> </Link></a>
                    </div>
                  </div>
                </div>
                {/* /shop */}
              </div>
              {/* /row */}
            </div>
            {/* /container */}
          </div>
        )
      }
      function hotdeal(){
        return(
          <div id="hot-deal" class="section">
                <div class="container">

                  <div class="row">
                    <div class="col-md-12">
                      <div class="hot-deal">
                        <ul class="hot-deal-countdown">
                          <li>
                            <div>
                              <h3>02</h3>
                              <span>Days</span>
                            </div>
                          </li>
                          <li>
                            <div>
                              <h3>10</h3>
                              <span>Hours</span>
                            </div>
                          </li>
                          <li>
                            <div>
                              <h3>34</h3>
                              <span>Mins</span>
                            </div>
                          </li>
                          <li>
                            <div>
                              <h3>60</h3>
                              <span>Secs</span>
                            </div>
                          </li>
                        </ul>
                        <h2 class="text-uppercase">hot deal this week</h2>
                        <p>New Collection Up to 50% OFF</p>
                        <a><Link to="/Store" class="primary-btn cta-btn" href="#">Shop now</Link></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        )
      }
      let limit=0;
      function topselling(){
        return(
        <div className="section">
      {/* container */}
      <div className="container">
        {/* row */}
        <div className="row">
          {/* section title */}
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="title">Top selling</h3>
            
            </div>
          </div>
          {/* /section title */}
          {/* Products tab & slick */}
          <div className="col-md-12">
            <div className="row">
              <div className="products-tabs">
                {/* tab */}
                <div id="tab2" className="tab-pane fade in active">
                  <div className="products-slick row" style={{  }} data-nav="#slick-nav-2">
                    {/* product */}
                    {allMarkdownRemark.map((e,index)=>{
                      if(limit<=3){
                        limit++;
                        return(
                          <div className="product"  style={{ width:"263px",minHeight:"15vh" }}key={index}>
                              <div className="product-img">
                              <img src={e.node.product.images[0]} style={{ width:"263px",height:"40vh" }}alt ="Img" />
                            
                                <div className="product-label">
                            
                                  <span className="new">NEW</span>
                                </div>
                              </div>
                              <div className="product-body">
                                <h3 className=""><a href="#"><Link to={e.node.id} style={{  }}>{e.node.product.name.substr(0,22)}....</Link></a></h3>
                                <h4 className="product-price">$ {e.node.unit_amount/100} <del className="product-old-price">$ {e.node.unit_amount/100 + e.node.unit_amount/1000}</del></h4>
                              </div>
                              
                              <div class="product-btns" style={{ display: "flex", justifyContent: "center" }}>
                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to cart</span></button>
                              </div>
                            </div>
                        )
                      }
                    })}
                  </div>
                  <div id="slick-nav-2" className="products-slick-nav" />
                </div>
                {/* /tab */}
              </div>
            </div>
          </div>
          {/* /Products tab & slick */}
        </div>
        {/* /row */}
      </div>
      {/* /container */}
    </div>

    )
  }
  if(!Loading) return <div>loading</div>
  return (
    <Layout>
      
      {A()}
      {hotdeal()}
      {topselling()}
    </Layout>
  )
}

export const query = graphql`
    query {
      allStripePrice {
        edges {
          node {
            id
            product {
              id
              description
              default_price
              images
              name
            }
            unit_amount
          }
        }
      }
    }
`
