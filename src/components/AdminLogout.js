import React, { useEffect } from 'react';

function AdminLogout(props) {

    useEffect(() =>{
       localStorage.setItem('admin-status', 'log-out');
        window.location='/'
    })

    return null;
}

export default AdminLogout;