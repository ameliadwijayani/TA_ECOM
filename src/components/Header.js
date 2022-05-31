import React from 'react'
import { useStaticQuery, graphql,Link} from "gatsby"

import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import { StaticImage } from "gatsby-plugin-image"
export default function  Header({ searchQuery, setSearchQuery,searchData }) {
    // if (!isAuthenticated()) {
    //     login()
    //     return <p>Redirecting to login...</p>
    // }
    
    const data = useStaticQuery(graphql`
        query HeaderQuery {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        kategori
                    }
                }
            }
        }
    `)
    const [kategori,setKategori]=React.useState(data.allMarkdownRemark.nodes)
    React.useEffect(()=>{
       
    },[])
    const user = getProfile()
    // if(Object.keys(user).length === 0){logout()}
    
  return (
    
    <div>
        <GatsbySeo
            openGraph={{
                type: 'website',
                url: 'http://localhost:8000/',
                title: 'E-com',
                description: 'Coba Ecom TA',
                images: [
                    {
                        url: 'https://www.example.ie/og-image.jpg',
                        width: 800,
                        height: 600,
                        alt: 'Og Image Alt',
                    },
                    {
                        url: 'https://www.example.ie/og-image-2.jpg',
                        width: 800,
                        height: 600,
                        alt: 'Og Image Alt 2',
                    },
                ],
            }}
        />
        {/* TOP HEADER */}
        <div id="top-header">
            <div className="container">
            <ul className="header-links pull-left">
                
              
              
                <li><Link to="/" activeClassName="active" ><i className="fa fa-phone" /> Home</Link></li>
                <li><Link to="/Store" activeClassName="active" ><i className="fa fa-map-marker" /> Store</Link></li>
            </ul>
            <ul className="header-links pull-right">
                <li><a href="/"><i className="fa fa-user-o" /> {user.name}</a></li>
                <li><a
                    href="#logout"
                    onClick={e => {
                        logout()
                        e.preventDefault()
                    }}
                    ><i className="fa fa-user-o" />
                    Log Out
                </a></li>
            </ul>
            </div>
        </div> 
        {/* /TOP HEADER */}
        {/* MAIN HEADER */}
        <div id="header">
            {/* container */}
            <div className="container">
            {/* row */}
            <div className="row">
                {/* LOGO */}
                <div className="col-md-3">
                <div className="header-logo">
                    <a href="#" className="logo">
                    <StaticImage src="./img/logo.png" alt />
                    </a>
                </div>
                </div>
                {/* /LOGO */}
                {/* SEARCH BAR */}
                <div className="col-md-6">
                <div className="header-search">
                    <form
                        action="/Store"
                        method="get"
                        autoComplete="off"
                    >
                        <select className="input-select">
                            {kategori.map((e)=>{
                                return(
                                    
                                    <option value={0}>{e.frontmatter.kategori}</option>
                                )
                            })}
                        </select>
                        <input 
                            value={searchQuery}
                            onInput={(e) => setSearchQuery(e.target.value)}
                            type="text"
                            name="s"
                            className="input" placeholder="Search here" />
                        <button className="search-btn" onClick={()=>{searchData(searchQuery)}}>Search</button>
                    </form>
                </div>
                </div>
                {/* /SEARCH BAR */}
                {/* ACCOUNT */}
                <div className="col-md-3 clearfix">
                <div className="header-ctn">
                    {/* Cart */}
                    <div className="dropdown">
                        
                    
                        
                        <Link to="/Checkout" activeClassName="active" ><a><i className="fa fa-phone" /> <i className="fa fa-shopping-cart" />
                        <span>Your Cart</span></a></Link>
                    <div className="cart-dropdown">
                        <div className="cart-list">
                        <div className="product-widget">
                            <div className="product-img">
                            <StaticImage src="./img/product01.png" alt />
                            </div>
                            <div className="product-body">
                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                            <h4 className="product-price"><span className="qty">1x</span>$980.00</h4>
                            </div>
                            <button className="delete"><i className="fa fa-close" /></button>
                        </div>
                        <div className="product-widget">
                            <div className="product-img">
                            <StaticImage src="./img/product02.png" alt />
                            </div>
                            <div className="product-body">
                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                            <h4 className="product-price"><span className="qty">3x</span>$980.00</h4>
                            </div>
                            <button className="delete"><i className="fa fa-close" /></button>
                        </div>
                        </div>
                        <div className="cart-summary">
                        <small>3 Item(s) selected</small>
                        <h5>SUBTOTAL: $2940.00</h5>
                        </div>
                        <div className="cart-btns">
                        <a href="#">View Cart</a>
                        <a href="#">Checkout  <i className="fa fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                    </div>
                    {/* /Cart */}
                    {/* Menu Toogle */} 
                    <div className="menu-toggle">
                    <a href="#">
                        <i className="fa fa-bars" />
                        <span>Menu</span>
                    </a>
                    </div>
                    {/* /Menu Toogle */}
                </div>
                </div>
                {/* /ACCOUNT */}
            </div>
            {/* row */}
            </div>
            {/* container */}
        </div>
        {/* /MAIN HEADER */}
    </div>

  )
}

