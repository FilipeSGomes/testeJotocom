import React from 'react';
import './Footer.css';
class Footer extends React.Component {
    render() {
        return (


            <div style={styles} class="row">


                <div class="col-sm-2 ">
                   
                </div>
                <div class="col-sm-4 container aling-self-center">
                     
                </div>

                <div class="col-sm-6 align-self-center">
                    <h1 id= "footerBS">Boa Sorte!</h1>
                </div>




            </div>
        );
    }
}

const styles = {
    width: '100%',
    height: "60vh",
    background: "grey"
  
}

export default Footer;
