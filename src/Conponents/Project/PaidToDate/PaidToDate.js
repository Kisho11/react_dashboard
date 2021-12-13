import React from "react";
import "./PaidToDate.css"



const Paid = () => {
    return (
        <div className="paid_to_date">
            <p className="paid_to_date_head">Paid to Date</p>
            <p className="paid_to_date_amount">$2800</p>
            <p className="paid_to_date_last">last Updated</p>
            <p className="paid_to_date_date">21 Dec 2021</p>
            <div className="paid_to_date_line"></div>

        </div>
    );
}

export default Paid