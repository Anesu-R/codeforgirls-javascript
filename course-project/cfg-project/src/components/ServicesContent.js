import React, { Component } from 'react';

import Services1 from './images/service/s1.jpg';
import Servicei1 from './images/service/i1.png';
import Services2 from './images/service/s2.jpg';
import Servicei2 from './images/service/i2.png';
import Services3 from './images/service/s3.jpg';
import Servicei3 from './images/service/i3.png';
import Services4 from './images/service/s4.jpg';
import Servicei4 from './images/service/i4.png';
import Services5 from './images/service/s5.jpg';
import Servicei5 from './images/service/i5.png';
import Services6 from './images/service/s6.jpg';
import Servicei6 from './images/service/i6.png';

class ServicesContent extends Component {
    render() {
        return (
            <div class="container">
                <div class="row first-row">
                    <div class="col-md-4 col-sm-6">
                        <div class="service-wrapper wow fadeInLeft" >
                            <span class="caption"><img src={Services1} alt="image"/></span>

                            <div class="content-wrapper">
                                <span class="icon"><img src={Servicei1} alt="image"/></span>

                                <h3><a href="#">Vegetable Gardening</a></h3>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do eiusmod tempor incididun ut labore et dolore.</p>

                                <a href="#" class="link pull-right">Read More</a>
                            </div> 
                        </div> 
                    </div>

                    <div class="col-md-4 col-sm-6">
                        <div class="service-wrapper wow fadeInLeft" data-wow-delay="0.2s">
                            <span class="caption"><img src={Services2} alt="image"/></span>

                            <div class="content-wrapper">
                                <span class="icon"><img src={Servicei2} alt="image"/></span>

                                <h3><a href="#">Tree Surgery</a></h3>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do eiusmod tempor incididun ut labore et dolore.</p>

                                <a href="#" class="link pull-right">Read More</a>
                            </div> 
                        </div> 
                    </div>

                    <div class="col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3">
                        <div class="service-wrapper wow fadeInLeft" data-wow-delay="0.3s">
                            <span class="caption"><img src={Services3} alt="image"/></span>

                            <div class="content-wrapper">
                                <span class="icon"><img src={Servicei3} alt="image"/></span>

                                <h3><a href="#">Garden Clearence</a></h3>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do eiusmod tempor incididun ut labore et dolore.</p>

                                <a href="#" class="link pull-right">Read More</a>
                            </div> 
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4 col-sm-6">
                        <div class="service-wrapper wow fadeInLeft" data-wow-delay="0.4s">
                            <span class="caption"><img src={Services4} alt="image"/></span>

                            <div class="content-wrapper">
                                <span class="icon"><img src={Servicei4} alt="image"/></span>

                                <h3><a href="#">Vegetable Gardening</a></h3>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do eiusmod tempor incididun ut labore et dolore.</p>

                                <a href="#" class="link pull-right">Read More</a>
                            </div> 
                        </div> 
                    </div>

                    <div class="col-md-4 col-sm-6">
                        <div class="service-wrapper wow fadeInLeft" data-wow-delay="0.5s">
                            <span class="caption"><img src={Services5} alt="image"/></span>

                            <div class="content-wrapper">
                                <span class="icon"><img src={Servicei5} alt="image"/></span>

                                <h3><a href="#">Tree Surgery</a></h3>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do eiusmod tempor incididun ut labore et dolore.</p>

                                <a href="#" class="link pull-right">Read More</a>
                            </div> 
                        </div> 
                    </div>

                    <div class="col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3">
                        <div class="service-wrapper wow fadeInLeft" data-wow-delay="0.6s">
                            <span class="caption"><img src={Services6} alt="image"/></span>

                            <div class="content-wrapper">
                                <span class="icon"><img src={Servicei6} alt="image"/></span>

                                <h3><a href="#">Garden Clearence</a></h3>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do eiusmod tempor incididun ut labore et dolore.</p>

                                <a href="#" class="link pull-right">Read More</a>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServicesContent;
