import React from "react";
import Logo from '../../assets/styles/img/logo.png' 

function HeaderReport(props) {
    return(
        <div className='w-100 bg-color-brand p-2 d-flex rounded align-items-center justify-content-center'>
            <div className='col-9 d-flex ps-2 flex-column'>
                <h3 className='text-white'>{props.title}</h3>
                <h4 className='text-white'>{props.subtitle}</h4>
            </div>
            <div className='col-3 d-flex ps-2 flex-column align-items-end'>
                <img src={Logo}></img>
            </div>
        </div>
    );
}

export default HeaderReport;