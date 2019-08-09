import React from "react";
import "./style.css";

function Parallax() {
    return (
        <>
            <div class="img1">
                <div class="ptext">
                    <span class="border">
                        Discover Chicago 
                </span>
                <button type="button" class="btn btn-outline-dark"> Login | Create Account</button>
                </div>
            </div>
            <section class="section section-light">
                <h2> About <hr></hr> </h2>
                <p>Welcome to Chiology! Doesn't matter where you're coming from or where you're going, our mission is to help you find adventures in Chi-town! <br></br>
                    Not sure what foods to try? Where to explore? Or the best neighborhoods to hang out at? Well here on our website you have access to all that information.
                    </p> 
            </section>
            <div class="img2">
                <div class="ptext">
                    <span class="">
                    </span>
                </div>
            </div>
            <section class="section section-light">
                <h2> Our Services </h2>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores odit incidunt minima recusandae beatae
                    iure reprehenderit dolores, voluptas itaque nemo, facilis excepturi dicta vitae dolorem, ipsam reiciendis
            dolore explicabo quis.</p>
            </section>

            <div class="img3">
                <div class="ptext">
                    <span class="">
                    </span>
                </div>
            </div>



        </>

    );
}

export default Parallax;