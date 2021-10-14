import React from "react";
import game1 from "../../img/game1.png";
import game2 from "../../img/game2.png";
import game3 from "../../img/game3.png";
import graph from "../../img/graph.png";
import coin from "../../img/coin.png";
import review from "../../img/review.png";
import jackImg from "../../img/jack.png";
import patner from "../../img/patner.png";
import Slider from "react-slick";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextField from "@mui/material/TextField";
import Footer from "../../components/Footer";

export default function AllGame() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                },
            },
        ],
    };

    var dashsettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                },
            },
        ],
    };
    return (
        <div className="all-game">
            <div className="sign">
                <a href="#">Login In</a>
                <a href="#">Sign Up</a>
            </div>
            <div className="top-game">
                <div className="left">
                    <p>Atari Casino</p>
                    <p>Lorem Ipsum</p>
                    <p>
                        We are building the token that will power the future of
                        the <br />
                        interactive entertainment industry
                    </p>
                    <div className="game-list">
                        <div>
                            <img src={game1} alt="game" />
                            <p>
                                3500 + <br />
                                Games
                            </p>
                        </div>
                        <div>
                            <img src={game2} alt="game" />
                            <p>
                                Full blockchain <br />
                                own Game
                            </p>
                        </div>
                        <div>
                            <img src={game3} alt="game" />
                            <p>
                                Submit your
                                <br />
                                Games
                            </p>
                        </div>
                    </div>
                    <p>Become a casino owner!</p>
                </div>
                <div className="right"></div>
            </div>
            <div className="signup">
                <button>Sign Up</button>
            </div>
            <div className="game-showcase">
                <Slider {...settings}>
                    <div className="each-img">
                        <p>ATARI CASINO</p>
                        <p>
                            Atari
                            <br />
                            Roulette
                        </p>
                    </div>
                    <div className="each-img number">
                        <p>NEW CRYPTO GAME</p>
                        <p>
                            Lucky
                            <br />
                            Numbers
                        </p>
                    </div>
                    <div className="each-img dice">
                        <p>ATARI CASINO</p>
                        <p>
                            Atari
                            <br />
                            Dice
                        </p>
                    </div>
                    <div className="each-img">
                        <p>ATARI CASINO</p>
                        <p>
                            Atari
                            <br />
                            Roulette
                        </p>
                    </div>
                </Slider>
            </div>
            <div className="pop-game">
                <div className="left">
                    <div className="top">
                        <p>Atari Casino</p>
                        <p>Lorem Ipsum</p>
                        <p>
                            We are building the token that will power the
                            <br />
                            future of the interactive entertainment industry
                        </p>
                    </div>

                    <div className="bottom">
                        <img src={jackImg} alt="jack" />
                        <p>Total Jackpots</p>
                        <p>5.34546 ATARI</p>
                        <button>
                            All games<i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
                <div className="right">
                    <div>
                        <div className="block"></div>
                        <div className="block"></div>
                        <div className="block"></div>
                        <div className="block"></div>
                    </div>

                    <div>
                        <div className="block"></div>
                        <div className="block"></div>
                        <div className="block"></div>
                        <div className="block"></div>
                    </div>
                    <div>
                        <div className="block"></div>
                        <div className="block"></div>
                        <div className="block"></div>
                        <div className="block"></div>
                    </div>
                </div>
                <div className="huge">
                    <p>MORE THAN 3500 GAMES</p>
                    <p>Huge variety of slots</p>
                    <div>
                        <div className="slot-group">
                            <div className="slot"></div>
                            <div className="slot"></div>
                            <div className="slot"></div>
                            <div className="slot"></div>
                            <div className="slot"></div>
                            <div className="slot"></div>
                        </div>

                        <div className="slot-group">
                            <div className="slot"></div>
                            <div className="slot"></div>
                            <div className="slot"></div>
                            <div className="slot"></div>
                            <div className="slot"></div>
                            <div className="slot"></div>
                        </div>
                        <div className="slot-group">
                            <div className="slot"></div>
                            <div className="slot"></div>
                            <div className="slot"></div>
                            <div className="slot"></div>
                            <div className="slot"></div>
                            <div className="slot"></div>
                        </div>
                    </div>
                    <button>All games</button>
                </div>
            </div>
            <div className="winner">
                <p>Our Winner</p>
                <div>
                    <div className="winner-list">
                        <div className="header">
                            <p>Last winners</p>
                        </div>
                        <div className="content">
                            <div>
                                <div className="avatar"></div>
                                <div className="detail">
                                    <p>User324234</p>
                                    <p>0.00002 ATRI</p>
                                    <a href="#">Poker</a>
                                </div>
                            </div>
                            <div>
                                <div className="avatar"></div>
                                <div className="detail">
                                    <p>User324234</p>
                                    <p>0.00002 ATRI</p>
                                    <a href="#">Poker</a>
                                </div>
                            </div>
                            <div>
                                <div className="avatar"></div>
                                <div className="detail">
                                    <p>User324234</p>
                                    <p>0.00002 ATRI</p>
                                    <a href="#">Poker</a>
                                </div>
                            </div>
                            <div>
                                <div className="avatar"></div>
                                <div className="detail">
                                    <p>User324234</p>
                                    <p>0.00002 ATRI</p>
                                    <a href="#">Poker</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="winner-list">
                        <div className="header">
                            <p>Big winners</p>
                        </div>
                        <div className="content">
                            <div>
                                <div className="avatar"></div>
                                <div className="detail">
                                    <p>User324234</p>
                                    <p>0.00002 ATRI</p>
                                    <a href="#">Poker</a>
                                </div>
                            </div>
                            <div>
                                <div className="avatar"></div>
                                <div className="detail">
                                    <p>User324234</p>
                                    <p>0.00002 ATRI</p>
                                    <a href="#">Poker</a>
                                </div>
                            </div>
                            <div>
                                <div className="avatar"></div>
                                <div className="detail">
                                    <p>User324234</p>
                                    <p>0.00002 ATRI</p>
                                    <a href="#">Poker</a>
                                </div>
                            </div>
                            <div>
                                <div className="avatar"></div>
                                <div className="detail">
                                    <p>User324234</p>
                                    <p>0.00002 ATRI</p>
                                    <a href="#">Poker</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="winner-list">
                        <div className="header">
                            <p>Jackpots</p>
                        </div>
                        <div className="content">
                            <div>
                                <div className="avatar"></div>
                                <div className="detail">
                                    <p>User324234</p>
                                    <p>0.00002 ATRI</p>
                                    <a href="#">Poker</a>
                                </div>
                            </div>
                            <div>
                                <div className="avatar"></div>
                                <div className="detail">
                                    <p>User324234</p>
                                    <p>0.00002 ATRI</p>
                                    <a href="#">Poker</a>
                                </div>
                            </div>
                            <div>
                                <div className="avatar"></div>
                                <div className="detail">
                                    <p>User324234</p>
                                    <p>0.00002 ATRI</p>
                                    <a href="#">Poker</a>
                                </div>
                            </div>
                            <div>
                                <div className="avatar"></div>
                                <div className="detail">
                                    <p>User324234</p>
                                    <p>0.00002 ATRI</p>
                                    <a href="#">Poker</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="coin">
                <div className="left">
                    <p>Atari Casino</p>
                    <p>Lorem Ipsum</p>
                    <p>
                        We are building the token that will power the <br />
                        future of the interactive entertainment industry
                    </p>
                </div>
                <div className="right">
                    <img src={coin} />
                </div>
            </div>

            <div className="dashboard">
                <p>Dashboard</p>
                <Slider {...dashsettings}>
                    <div className="g-img">
                        <div>
                            <p>356k</p>
                            <p>ACCOUNTS</p>
                        </div>
                        <img src={graph} alt="graph" />
                        <p>456 453 Users</p>
                    </div>
                    <div className="g-img">
                        <div>
                            <p>356k</p>
                            <p>ACCOUNTS</p>
                        </div>
                        <img src={graph} alt="graph" />
                        <p>456 453 Users</p>
                    </div>
                    <div className="g-img">
                        <div>
                            <p>356k</p>
                            <p>ACCOUNTS</p>
                        </div>
                        <img src={graph} alt="graph" />
                        <p>456 453 Users</p>
                    </div>
                    <div className="g-img">
                        <div>
                            <p>356k</p>
                            <p>ACCOUNTS</p>
                        </div>
                        <img src={graph} alt="graph" />
                        <p>456 453 Users</p>
                    </div>
                    <div className="g-img">
                        <div>
                            <p>356k</p>
                            <p>ACCOUNTS</p>
                        </div>
                        <img src={graph} />
                        <p>456 453 Users</p>
                    </div>
                </Slider>
                <div className="review">
                    <p>Ratings & Reviews</p>
                    <img src={review} alt="review" />
                </div>
            </div>
            <div className="more">
                <div>
                    <p>
                        Atari CEO Fred Chesnais joins <br />
                        Yahoo Finance Live to discuss
                        <br />
                        the gaming company's launch
                        <br />
                        of their new...
                    </p>
                    <button className="btn-more">
                        READ MORE<i class="fas fa-arrow-right"></i>
                    </button>
                </div>
                <div>
                    <p>
                        Uunder CEO Fred Chesnais, Atari is a company with just
                        28.
                        <br />
                        That's pretty small for the oldest brand in video
                        games...
                    </p>
                    <button className="btn-more">
                        READ MORE<i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
            <div className="patner">
                <p>Our Patners</p>
                <img src={patner} alt="patner" />
            </div>
            <div className="touch">
                <p>Get In Touch!</p>
                <div>
                    <TextField
                        required
                        id="standard-required"
                        label="Enter Name"
                        variant="standard"
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Enter Email"
                        variant="standard"
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="standard-required"
                        label="Enter Subject"
                        variant="standard"
                        className="w-100"
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="standard-required"
                        label="Message"
                        variant="standard"
                        className="w-100"
                    />
                </div>
                <button>
                    SUBMIT<i class="fas fa-arrow-right"></i>
                </button>
            </div>

            <Footer />
        </div>
    );
}
