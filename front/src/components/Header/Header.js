import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div style={styles} >
                <div class="row">
                    <div class="col-md-4 col-sm-4 col-lg-4  ">
                        <button type="button" class="btn btn-dark">Lorem Ipsum Dolor</button>
                    </div>

                        <div class="col-sm-2">
                            <span>LOREM IPSUM LINK1</span>
                        </div>
                        <div class="col-sm-2">
                            <span>Link2</span>
                        </div>
                        <div class="col-sm-2">
                            <span>LOREM IPSUM LINK 3</span>
                        </div>
                        <div class="col-sm-2">
                            <span>LOREM IPSUM LINK 4</span>
                        </div>
                    
                </div>
            </div >
        );
    }
}

const styles = {
    width: "90%",
    height: "8vh",
    margin: 0,
    padding: 0,
    background: "white",
}


export default Header;
