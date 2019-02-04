import React from 'react';
import Food4 from '../../Assets/food4.jpg';
import Food3 from '../../Assets/food3.jpg';
import './Carousel.css';

class Carousel extends React.Component {
    render() {
        return (
            <div style={styles}>
                <div style={styles} id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div id="food4" class="carousel-item active" style={imageFood}>

                        </div>
                        <div id="food3" class="carousel-item" style={imageFood}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    width: "100%",
    height: "56vh",
}

const imageFood = {
    height: "56vh",
    width: "100%"
}

export default Carousel;
