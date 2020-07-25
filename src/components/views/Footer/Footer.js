import React from 'react'

function Footer() {
    return (
        <div style={{
            height: '60px', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem',
            backgroundColor:'rgb(233, 233, 233)', marginTop:'60px'
        }}>
           <p>Email : jkyun01@gmail.com</p>
           <p style={{marginLeft:'100px'}}>
               GitHub : 
               <a href="https://github.com/jeonjaekyun">https://github.com/jeonjaekyun</a>
           </p>
        </div>
    )
}

export default Footer
