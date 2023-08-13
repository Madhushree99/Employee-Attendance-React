import React, { useEffect } from 'react';

function EmpLogout(props) {

    useEffect(() =>{
        sessionStorage.setItem('emp-status', 'log-out');
        sessionStorage.removeItem('empid');
        window.location='/'
    })

    return null;
}

export default EmpLogout;