import React from "react"
import ReactDOM from "react-dom/client"
import restaurantList from "./Restaurantapi"
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

const RestaurantCard=({
    name,
    locality,
    cuisines,
    areaName,
    cloudinaryImageId,
    sla,
    costForTwoString,
    avgRating,
  })=>{
        return (
            <div className="res-card">
             <img className="res-img"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
              <h3>{name}</h3>
              <h4>{cuisines.join(',')}</h4>
              <h4>{locality +" "+areaName}</h4>
              <span>
                <h4>
                  <i class="fa-solid fa-star"></i>
                  {avgRating}
                </h4>
                <h4>{sla.slaString}</h4>
                <h4>{costForTwoString}</h4>
              </span>
            </div>
          );
};
 
const Body=()=>{
    return( 
        <div className="body">
            <div className="search">Search Bar</div>
            <div className="res-container">
           { restaurantList.map((restaurant)=>{
                return <RestaurantCard
                key={restaurant.data.id}
                {...restaurant.data}/>
            })}
                
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

