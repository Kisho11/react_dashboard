import React from "react";
import "./Payment.css"



const payment = () => {
    return (
        <div className="payment" style={{ backgroundColor: "" }}>
            <div className="payment_line">payment</div>

            <div className="payment_to_date_line"></div>
            <div className="payment_head">
                <div className="payment_amount">
                    Payment Frequency
                </div>
                <div className="payment_last">
                    
                </div></div>
                <div className="payment_head_data">
                <div className="payment_data">
               Monthly
                </div>
                <div className="payment_last" style={{paddingLeft:250}}>
                    <button className="payment_btn">Request to change</button>
                </div></div>
                <div className="payment_head">
                <div className="payment_amount">
                    Payment Frequency
                </div>
                <div className="payment_last">
                    
                </div></div>
                <div className="payment_head_data">
                <div className="payment_data">
               Monthly
                </div>
                <div className="payment_last" style={{paddingLeft:250}}>
                    <button className="payment_btn">Request to change</button>
                </div></div>
                <br/>
        </div>
    );
}

export default payment