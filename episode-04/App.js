import React from "react"
import ReactDOM from "react-dom/client"
/**
 * Header
 *  -logo
 *  -home
 *  -navitems
 * Body
 *  -search bar
 *  -resturent container
 *      -restaurant card
 *          -img
 *          -name,star,cusines,delivary time,offers
 *     
 * Footer
 *  -copyright
 *  -location
 *  -contact details
 */

const Header=()=>{
    return(
        <div className="header">
             <div className="logo">
                 <img className="logo-image"src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg"/>
             </div>
             <div className="nav-items">
                 <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                 </ul>
             </div>
        </div>
    )
}

const RestaurantCard=(props)=>{
        return (
            <div className="res-card">
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vxkh5wd0ndljsq8pd8ir"/>
              <h2>{props.Name}</h2>
              <h4>{props.Cusine}</h4>
              <h4>{props.area}</h4>
              <span>
                <h4>
                  <i class="fa-solid fa-star"></i>
                  {props.Rating
                  }
                  {<br/>}
                  {props.Time}
                </h4>
              </span>
            </div>
          );
}
 
const Body=()=>{
    return( 
        <div className="body">
            <div className="search">Search Bar</div>
            <div className="res-container">
                <RestaurantCard
                Name="mehfil"
                area="JNTU colony"
                Cusine="biryani"
                Rating="5 star"
                Time="30 mins"
                />
                <RestaurantCard
                Name="Lucky"
                area="Miapur"
                Cusine="biryani,chinese"
                Rating="4.5 star"
                Time="40 mins"
                />
                <RestaurantCard
                Name="Swadh"
                Cusine="biryani"
                Rating="5 star"
                area="Nizampet"
                Time="10 mins"
                />
                
            </div>
        </div>
    )
}

 const AppLayout=()=>{
    return(
        <div className='app'>
           <Header/>
           <Body/>
        </div>
    )
 }

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)

