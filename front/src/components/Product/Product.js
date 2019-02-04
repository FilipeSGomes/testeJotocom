import React from 'react';
import './Product.css';
class Product extends React.Component {
    render() {
        return (
           
                <div  style={styles}  class="row">
                    <div class="col-sm align-self-center">
                        <h1>Lorem Ipsum</h1>
                        <p>lorem ipsum dolor sit amet, 
                        consectetur adipiscing eli</p>
                    </div>
                    <div class="col-sm align-self-center">
                        <p> Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                             nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident,
                             sunt in culpa qui officia deserunt mollit
                              anim id est laborum.</p>
                    </div>
                </div>
       
    
        );
    }
}

const styles = {
    color: "white",
    height: "64vh",
    width: '100%',
    background: "black",
    
   
}

export default Product;
