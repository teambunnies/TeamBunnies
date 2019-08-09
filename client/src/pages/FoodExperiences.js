import React from "react";
import "./food.css";
import Nav from "../components/Nav";

function FoodExperiences() {
    return (
        <>
            <Nav />

            <section class="container">
                <div class="leftContainer">
                    <h3>  10 Must Try Foods in Chicago </h3> <hr></hr><br></br>
                    <section class="pizza">
                        <h4> 1. Deep Dish Pizza</h4>
                        <img src="/assets/images/pizza.jpg" height="300" width="400"></img>
                        <p><br></br> Deep Dish Pizza was invented in 1943 and is the most popular dish associated with the city. <br></br>
                            It consists of a thick pan baked crust, vegetables, meat, tomato sauce and cheese.</p>
                    </section>
                    <section class="hotdogs">
                        <h4> 2. Chicago Style Hot Dogs</h4>
                        <img src="/assets/images/hotdog.jpg" height="300" width="400"></img>
                        <p><br></br>The hot dog is topped with mustard, chopped white onions, bright green sweet pickle relish, a dill pickle spear, tomato slices or wedges, pickled sport peppers and a dash of celery salt. </p>
                    </section>
                    <section class="pierogis">
                        <h4> 3. Pierogis</h4>
                        <img src="/assets/images/pierogi.jpg" height="300" width="400"></img>
                        <p><br></br>Pierogi are filled dumplings of Central and Eastern European origin, made by wrapping unleavened dough around a savory or sweet filling and cooking in boiling water, or pan-frying. </p>
                    </section>
                    <section class="italianbeef">
                        <h4> 4. Italian Beef</h4>
                        <img src="/assets/images/italianbeef.jpg" height="300" width="400"></img>
                        <p><br></br>An Italian beef is a sandwich, originating in Chicago, composed of thin slices of seasoned roast beef, simmered and served au jus on a long Italian-style roll. The sandwich's history dates back at least to the 1930s. </p>
                    </section>
                    <section class="tamales">
                        <h4> 5. Tamales</h4>
                        <img src="/assets/images/tamales.jpg" height="300" width="400"></img>
                        <p><br></br>A tamale is a traditional Mesoamerican dish, probably from modern-day Mexico, made of masa or dough, which is steamed in a corn husk or banana leaf. </p>
                    </section>
                    <section class="burgers">
                        <h4> 6. Burgers</h4>
                        <img src="/assets/images/burger.jpg" height="300" width="400"></img>
                        <p><br></br> </p>
                    </section>
                    <section class="tacos">
                        <h4> 7. Tacos</h4>
                        <img src="/assets/images/taco.jpg" height="300" width="400"></img>
                        <p><br></br> </p>
                    </section>
                    <section class="churros">
                        <h4> 8. Churros</h4>
                        <img src="/assets/images/churros.jpg" height="300" width="400"></img>
                        <p><br></br> </p>
                    </section>
                    <section class="gelato">
                        <h4> 9. Gelato</h4>
                        <img src="/assets/images/gelato.jpg" height="300" width="400"></img>
                        <p><br></br> </p>
                    </section>
                    <section class="popcorn">
                        <h4> 10. Popcorn</h4>
                        <img src="/assets/images/popcorn.jpg" height="300" width="400"></img>
                        <p><br></br></p>
                    </section>
                </div>
                <div class="rightContainer">
                    <h3> Where You Can Find it: </h3> <hr></hr><br></br>
                    <section class="giordanos">
                        <h4> Giordano's</h4>
                        <p><br></br>With locations all around Chicago, you can easily stop by and try your first deep dish pizza.
                        They offer a small, medium and large size pizza to choose from.</p>
                        <h5> Average Price of a Deep Dish Pizza: </h5>
                        <p> Small- $18.65</p>
                        <p> Medium- $23.30</p>
                        <p> Large- $27.65</p>
                        <a href="https://giordanos.com/">Visit their website</a> <br></br>
                        <a href="https://giordanos.com/locations/">Locations</a>
                    </section>
                    <section class="devildawgs">
                        <h4> Devil Dawgs </h4>
                        <p><br></br>Devil Dawgs came to Chicago in 2010 and started out of a 2 car garage. The spot quickly became a favorite and they
                        now have 3 locations with a 4th opening soon.</p>
                        <h5> Average Price of a Hot Dog: </h5>
                        <p> $5.00 - $6.50</p>
                        <a href="https://www.devildawgs.com/">Visit their website</a> <br></br>
                        <a href="https://www.devildawgs.com/store-locator/">Locations</a>
                    </section>
                    <section class="pierogiheaven">
                        <h4> Pierogi Heaven </h4>
                        <p><br></br>Pierogi Heaven is located in downtown Chicago with a single location. They serve many Polish dishes and pride themselves
                        on serving the best Pierogi in town.</p>
                        <h5> Average Price of Pierogies: </h5>
                        <p> 6 pieces- $6.99</p>
                        <p> 9 pieces- $9.87</p>
                        <p> 12 pieces- $13.16</p>
                        <h5>Location:</h5>
                        <p>169 N Wells St, Chicago, IL 60606</p>
                        <a href="http://www.pierogiheaven.com/index.html">Visit their website</a> <br></br>
                    </section>
                    <section class="alsbeef">
                        <h4> Al's Italian Beef</h4>
                        <p><br></br>The Italian Beef Sandwich was created by Al Ferrari in 1938 during The Great Depression when meat was scarce and had to be
                        sliced thinly. Al's family began selling the sandwiches and it soon turned into a business.</p>
                        <h5> Average Price of a Sandwich: </h5>
                        <p> Little Beef - $6.15</p>
                        <p> Regular Beef - $7.35</p>
                        <p> Big Beef - $9.75</p>
                        <a href="https://www.alsbeef.com/">Visit their website</a> <br></br>
                        <a href="https://www.alsbeef.com/locations.html">Locations</a>
                    </section>
                    <section class="elmilagro">
                        <h4> El Milagro Tortilla</h4>
                        <p><br></br>El Milagro Tortilla is a single location family-owned Mexican restaurant in Pilsen. They're known around town for
                        their big portions and quality tastes of Latin America.
                        </p>
                        <h5> Average Price of a Tamale: </h5>
                        <p>$3.00 - $5.00</p>
                        <h5> Location:</h5>
                        <p>1927 S Blue Island Ave, Chicago, IL 60608</p>
                    </section>
                    <section class="aucheval">
                        <h4> Au Cheval</h4>
                        <p><br></br>Au Cheval is a diner-style restaurant with a passion for eggs and a variety of items on their menu. The cheeseburger is their signature
                        dish and to make it even more special, you can add an egg to your burger for $1.00 extra.</p>
                        <h5> Average Price of a Burger: </h5>
                        <p> Single Cheeseburger- $12.95</p>
                        <p> Double Cheeseburger- $14.95</p>
                        <a href="http://auchevaldiner.com/chicago/">Visit their website</a> <br></br>
                        <a href="http://auchevaldiner.com/chicago/contact-hours/">Locations</a>
                    </section>
                    <section class="brokenenglish">
                        <h4> Broken English Taco Pub</h4>
                        <p><br></br>Located in three of Chicago's most vibrant neighborhoods - The Loop, Old Town and Lincoln Park. Broken English combines a unique take on Mexican
                        street style tacos, refreshing beverages, eclectic music, and vivid artwork created by local talent.</p>
                        <h5> Average Price of Tacos(2 per order): </h5>
                        <p> Two Tacos- $6.00-$9.00</p>
                        <a href="https://www.tacopub.com/">Visit their website</a> <br></br>
                        <a href="https://www.tacopub.com/">Locations</a>
                    </section>
                    <section class="xoco">
                        <h4> Xoco</h4>
                        <p><br></br>Xoco, pronounced “SHO-ko” is the Aztec word for “little sister.” But there’s nothing little about Xoco’s bold Mexican marketplace flavors.
                        Open early and closing late, this café offers contemporary expressions of Mexico’s most beloved food and snacks</p>
                        <h5> Average Price of a Churro: </h5>
                        <p> $1.60 each / 3 for $4.00</p>
                        <a href="https://www.rickbayless.com/restaurants/xoco/">Visit their website</a> <br></br>
                        <a href="https://www.rickbayless.com/restaurants/xoco/">Locations</a>
                    </section>
                    <section class="amorino">
                        <h4> Amorino</h4>
                        <p><br></br>Amorino originates straight from Italy. Their gelato is made with fresh fruits and never artificial flavors. Each gelato 
                        flavor is organic and vegan friendly. </p>
                        <h5> Average Price of Gelato: </h5>
                        <p> $5.00-$10.00</p>
                        <a href="https://www.amorino.com/fr/index.html">Visit their website</a> <br></br>
                        <a href="https://www.amorino.com/fr/boutique/chicago-north-state.115.html">Locations</a>
                    </section>
                    <section class="garrettpopcorn">
                        <h4> Garrett Popcorn</h4>
                        <p><br></br>Garrett Popcorn started in 1949 and has expanded as they've grown in popularity.  Every batch is handmade throughout the day </p>
                        <h5> Average Price of Gelato: </h5>
                        <p> $5.00-$10.00</p>
                        <a href="https://www.amorino.com/fr/index.html">Visit their website</a> <br></br>
                        <a href="https://www.amorino.com/fr/boutique/chicago-north-state.115.html">Locations</a>
                    </section>












                </div>



            </section>


        </>

    );
}

export default FoodExperiences;