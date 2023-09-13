import { Link } from "react-router-dom";
import ItemCount from "../itemCount";
import "../itemCount/itemCount.css"
import React from "react";

export default function Item({product}) {
          const onAdd =(quantity)=>{
                    if(quantity>0) {
                              alert(`añadiste ${quantity} unidades de ${product.title}!`);
          }else {alert("Para añadir, sumá al menos 1 producto!")}}
          return (
                    < div className="container">
                                        <div className="mb-5 row">
                              <div className="card product col-12 shadow  mb-5 rounded">
                                        <img className="img mt-0 pt-0" src={product.image} width={125} alt=""/>
                                        <Link to="/Description/descriptionId" className="h4 text-decoration-none"><h4>{product.title}</h4></Link>
                                        <span className="" style={{color:"red"}}> <strong>{product.price}</strong></span>
                                        <span> <ItemCount initial={0} stock ={10} onAdd={onAdd}/> </span> 
                                        </div>                                          
                              </div>
                    </div>
          );
}

