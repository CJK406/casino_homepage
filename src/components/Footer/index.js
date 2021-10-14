import React from "react";
import footerlogo from "../../img/footer_logo.png";
import social from "../../img/social.png";
import "./index.css";

export default function Footer() {
    return (
        <div className="footer">
            <div className="newsletter">
                <p>Newsletter</p>
                <input type="text" placeholder="Enter Email Address" />
                <button>
                    SUBMIT<i class="fas fa-arrow-right"></i>
                </button>
            </div>
            <p>
                Please subscribe to our newsletter to get the latest news from
                us.
            </p>
            <div className="footer-item">
                <div>
                    <img src={footerlogo} alt="logo" />
                    <p>
                        Atari stands firmly in support of financial freedom and
                        the
                        <br />
                        liberty that blockchain provides globally for anyone to
                        vlountarily
                        <br />
                        participate in a permissionless and decentralized
                        network.
                    </p>
                </div>
                <div>
                    <p>Quick Links</p>
                    <ul>
                        <li>Home</li>
                        <li>Vision</li>
                        <li>About</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <p>Address</p>
                        <p>292 Main Street GX11 1AA Gibator</p>
                    </div>
                    <div>
                        <p>Email</p>
                        <p>token@atari.com</p>
                    </div>
                </div>
                <div>
                    <p>Follow Us</p>
                    <img src={social} alt="logo" />
                </div>
            </div>
            <div className="policy top-p">
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
                <p>Risk Factors</p>
                <p>Regulatory Oversight</p>
                <p>Atari Token Disclaimer</p>
            </div>
            <div className="policy bottom-p">
                <p>AML/CFT Policy</p>
                <p>Atari Token Improvement Policy</p>
                <p>Cookie Policy</p>
            </div>
            <div className="copyright">
                <p>Copyright@2021 Atari Chain, Limited. All rights Reserved.</p>
                <p>
                    Atari and the Atari logo are trademarks owned by Atari
                    Interactive,Inc. All other trademarks are the property of
                    their respective owners
                </p>
            </div>
        </div>
    );
}
