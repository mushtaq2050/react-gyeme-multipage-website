import React from 'react'
import "./Values.css"
import { IoDiamondOutline } from "react-icons/io5";
import { BiSolidCrown } from "react-icons/bi";
import { valuedata } from './Valuesdata';

const Values = () => {
  return (
    <div className='container'>
      <div className="value-container">
        <div className="value-img-container">
     <img src="/images/t.jpg" alt="" />
        </div>
        <div className="value-text-container">
            <div className="top-value-text">
                <span className='svg-value-container'>
        <IoDiamondOutline/>
        </span>
            <span className='values-heading'>Our Values</span>
            </div>
            <div className="value-card-container">
                {
                  valuedata.map((item,i)=>(
                    <div className="value-card">
                        <span className='svg-value-container-card'>
                        <BiSolidCrown/>
                        </span>
                        <span className='inner-value-text'>
                        <span className='value-name'>{item.neme}</span>
                        <span className='value-detail'>{item.datail}</span>
                        </span>
                    </div>
                  ))
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Values
