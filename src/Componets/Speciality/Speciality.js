import React from 'react';
import "./Speciality.sass";
import { Imags1, Imags2, Imags3, Imags4, Imags5, Imags6} from "./ImagsGlobal";
import { S_1, S_2, S_3, S_4, S_5, S_6} from "./ImagsGlobal";

function Speciality(props) {
    return (
        <>
            <section className="speciality" id="Speciality">
                <h1 className="heading">our <span>Speciality</span></h1>
                <div className="box-container">
                    <div className="box">
                        <img src={Imags1} alt="" className="image"/>
                        <div className="content">
                            <img src={S_1} alt="Error"/>
                            <h3>Lorem ipsum dolor.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium architecto
                                cumque deleniti deserunt doloremque expedita fugit iure laudantium minus modi nihil nobis
                                optio quod rerum temporibus, veniam voluptatem voluptatibus?</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={Imags2} alt="" className="image"/>
                        <div className="content">
                            <img src={S_2} alt="Error"/>
                            <h3>Lorem ipsum dolor.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium architecto
                                cumque deleniti deserunt doloremque expedita fugit iure laudantium minus modi nihil nobis
                                optio quod rerum temporibus, veniam voluptatem voluptatibus?</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={Imags3} alt="" className="image"/>
                        <div className="content">
                            <img src={S_3} alt="Error"/>
                            <h3>Lorem ipsum dolor.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium architecto
                                cumque deleniti deserunt doloremque expedita fugit iure laudantium minus modi nihil nobis
                                optio quod rerum temporibus, veniam voluptatem voluptatibus?</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={Imags4} alt="" className="image"/>
                        <div className="content">
                            <img src={S_4} alt="Error"/>
                            <h3>Lorem ipsum dolor.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium architecto
                                cumque deleniti deserunt doloremque expedita fugit iure laudantium minus modi nihil nobis
                                optio quod rerum temporibus, veniam voluptatem voluptatibus?</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={Imags5} alt="" className="image"/>
                        <div className="content">
                            <img src={S_5} alt="Error"/>
                            <h3>Lorem ipsum dolor.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium architecto
                                cumque deleniti deserunt doloremque expedita fugit iure laudantium minus modi nihil nobis
                                optio quod rerum temporibus, veniam voluptatem voluptatibus?</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={Imags6} alt="" className="image"/>
                        <div className="content">
                            <img src={S_6} alt="Error"/>
                            <h3>Lorem ipsum dolor.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium architecto
                                cumque deleniti deserunt doloremque expedita fugit iure laudantium minus modi nihil nobis
                                optio quod rerum temporibus, veniam voluptatem voluptatibus?</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Speciality;