import React from 'react';
import "./Home.sass";
import HomeImg from "../../assest/images/home-img.png";

function Home(props) {
    return (
        <>
            <section className="home" id="home">
                <div className="content">
                    <h3>Lorem ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto deleniti dolores
                        dolorum explicabo fugiat magni, nihil nisi numquam, optio quis tempora. Et praesentium, veniam?
                        Eos maxime nemo nesciunt quaerat quia quo, repudiandae veniam. Aperiam deserunt distinctio et
                        fugit inventore! Consequuntur dolorem eaque nam nisi non repellat tempora ut voluptatem?</p>
                    <a href="#" className="btn">Oreder now</a>
                </div>
                <div className="image">
                    <img src={HomeImg} alt="Error"/>
                </div>
            </section>
        </>
    );
}

export default Home;