import React from "react";
import "./General.css"
import { Row, Col, Divider } from 'antd';



const General = () => {
    return (
        <div className="general" style={{ backgroundColor: "" }}>
            <div className="general_line">General</div>

            <div className="General_to_date_line"></div>
            <div className="general_head">
                <div className="general_amount">
                    Name
                </div>
                <div className="general_last">
                    Jason Andree
                </div></div>

            <div className="general_head">
                <div className="general_amount">
                    Secondary Applicant name 
                </div>
                <div className="general_last">
                    Jason Hughes
                </div></div> <div className="general_head">
                <div className="general_amount">
                    Joined date
                </div>
                <div className="general_last">
                    Patrick Ferrara
                </div></div> <div className="general_head">
                <div className="general_amount">
                    Signup method
                </div>
                <div className="general_last">
                    Self signed
                </div></div> <div className="general_head">
                <div className="general_amount">
                    Status
                </div>
                <div className="general_last_green">
                    Active
                </div></div> <div className="general_head">
                <div className="general_amount">
                    Loi
                </div>
                <div className="general_last_green">
                    Signed
                </div></div>
                <br/>
        </div>
    );
}

export default General