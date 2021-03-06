import React from "react";
import { Link } from 'react-router-dom'
import "./style.css";

function Parallax() {
    return (
        <>
            <div class="img1">
                <div class="ptext-parallax">
                    <span class="border-parallax">
                        Discover Chicago 
                     </span>
                     <div className="buttons">
            <Link to="/register" className="btn btn-secondary">Sign Up</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
          </div>
                </div>
            </div>
            <section class="section section-light-parallax">
                <h2 class="animated infinite bounce delay-2s"> About <hr /></h2>
                <p>Welcome to Odyssey! Doesn't matter where you're coming from or where you're going, our mission is to help you with your adventures in Chi-town! <br />
                    Not sure what foods to try? Where to explore? Or the best neighborhoods to hang out at? Our goal at Odyssey is to help you assimilate to the Chicago culture <br />
                     by providing you with the best places to check out.
                    </p> 
            </section>
            <div class="img2">
                <div class="ptext-parallax">
                    <span class="">
                    </span>
                </div>
            </div>
            <section class="section section-light-parallax">
                <h2> What We Offer <hr /></h2>
                <p> On our website you have access to the best foods and experiences to try here in Chicago. We also have a gallery that's created using a social media API <br />
                that allows you to explore the most recent posts from the city's residents and visitors. If you're here from a different country, we provide locations of enclaves, <br />
                consulates and areas where specific languages are most commonly spoken to help you feel at home. </p>
            </section>
            <div class="img3">
                <div class="ptext-parallax">
                    <span class="">
                    </span>
                </div>
            </div>

        </>
    );
}

export default Parallax;