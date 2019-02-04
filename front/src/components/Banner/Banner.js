import React from 'react';
import Food from "../../Assets/food.jpg"
import './Banner.css';
class Banner extends React.Component {
    render() {
        return (
            <div id="bannerId" style={styles}>
                <h1 id="textEV" col-4>Teste o Estilo da vida</h1>
            </div>
        );
    }
}

const styles = {
    width: "100%",
    height: "40vh",
    padding: 0,
                
}


export default Banner;
