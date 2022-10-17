import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../Test";
import Nav from "./Nav";
import Offers from "./Offers";

function Main() {
  const [ search , setSearch] = useState("");
  var navigate = useNavigate();

  var openrest = (item) =>{
    navigate('/restrauntpage',{  state: {Details:item } })
  }
  var printWhole =  () =>{
    return(<>
      {data.restaurants.map((item,index) => (<>
        <div id="c">
            <div className="product-details">
              <h2>{item.name}</h2>
              <br></br>

              <p className="information">
                <b>Find Near: </b>
                {item.neighborhood},<br /> <br />
                <b>At: </b>
                {item.address},<br />
                <b>What You'll Find: </b>
                {item.cuisine_type}
              </p>

              <div className="control">
                <button
                  className="btn5"
                  onClick={() => openrest(item)}
                  id={item.id}
                >
                  Book&nbsp;and&nbsp;Visit
                </button>
              </div>
            </div>

            <div className="product-image">
              <img src={item.photograph} alt=".." />

              <div className="info">
                <h2> Top Reviews By</h2>
                {Object.values(item.reviews).map((data) => (
                  <h2> {data.name} </h2>
                ))}
              </div>
            </div>
          </div>
        
        </>))}</>)
  }
  
  var printSearch = (itemSearched) =>{
    var tempProductArr = [];
    data.restaurants.map((item) => {
      if(item.name.toLowerCase().includes(itemSearched.toLowerCase())){
        tempProductArr = [...tempProductArr,item];
      }
    })
    if(tempProductArr.length === 0){
      return(<>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQpJnnPzhDYwOTr9S8quxVfMhbjcWiD9Haw&usqp=CAU" alt="..." />
      </>)
    }
    return(
      <>
      {tempProductArr.map((item,index) => (<>
        <div id="c">
            <div className="product-details">
              <h2>{item.name}</h2>
              <br></br>

              <p className="information">
                <b>Find Near: </b>
                {item.neighborhood},<br /> <br />
                <b>At: </b>
                {item.address},<br />
                <b>What You'll Find: </b>
                {item.cuisine_type}
              </p>

              <div className="control">
                <button
                  className="btn5"
                  onClick={() => openrest(item)}
                  id={item.id}
                >
                  Book&nbsp;and&nbsp;Visit
                </button>
              </div>
            </div>

            <div className="product-image">
              <img src={item.photograph} alt=".." />

              <div className="info">
                <h2> Top Reviews By</h2>
                {Object.values(item.reviews).map((data) => (
                  <h2> {data.name} </h2>
                ))}
              </div>
            </div>
          </div>
      </>))}
      </>
    )
  }

  return (
    <>
      <Nav />
      <Offers />
      <hr
        style={{
          border: "1px solid #B27B60",
          width: "70%",
          marginLeft: "15%",
          marginTop: "3%",
        }}
      />
      <h2> Search for what you want??</h2>
      <input
        type="text"
        id="searchInput"
        placeholder="Search for your favourite restaurants here..."
        onChange={(event) => setSearch(event.target.value)}
      />
      <div className="restaurantContainer">
      {(search) ? printSearch(search):printWhole()}
        {/* {data.restaurants.map((item) => (

        ))} */}
      </div>
      <hr
        style={{
          border: "1px solid #B27B60",
          width: "70%",
          marginLeft: "15%",
          marginTop: "3%",
          marginBottom: "3%",
        }}
      />
    </>
  );
}

export default Main;
// var printSearch = (itemSearched) =>{
//   var tempProductArr = [];
//   productCredentials.map((item) => {
//     if(item.name.toLowerCase().includes(itemSearched.toLowerCase())){
//       tempProductArr = [...tempProductArr,item];
//     }
//   })
//   if(tempProductArr.length === 0){
//     return(<>
//     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQpJnnPzhDYwOTr9S8quxVfMhbjcWiD9Haw&usqp=CAU" alt="..." />
//     </>)
//   }
//   return(
//     <>
//     {tempProductArr.map((item,index) => (<>
//     <div className='individualDiv'>
//       <img src={item.image} alt="///" style={{width:"100%"}}/>
//       <div className='productSDetails'>
//         <h3 style={{fontFamily: "'Roboto Serif', serif"}}>{item.name}({item.category})</h3>
//         <h4 style={{fontFamily: "'Roboto Serif', serif"}}>Previous Price: <span style={{color:"grey" , textDecoration:"line-through" , fontFamily: "'Roboto Serif', serif"}}>&#8377; {item.markedPrice} </span></h4>
//         <h4 style={{fontFamily: "'Roboto Serif', serif"}}>Discounted Price: <span style={{ fontFamily: "'Roboto Serif', serif"}}>&#8377; {item.sellingPrice} </span></h4>
//         <button onClick={() => addtoCart(item)}>Add To Cart</button>
//       </div>
//     </div>
//     </>))}
//     </>
//   )
// }