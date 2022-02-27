function navbar(){
    return `
    <div id="navbar">
        <div id="nav-a" onclick = "window.location.href = './index.html'">
            <img src="https://bit.ly/3nBvG0c" alt="" id="img" width="">
        </div>
        <div id="nav-b">
            <div>
            <select>
                <option value="">Products</option>
                <option value="">Suppliers</option>
            </select>
            </div>
            <div>

                <input type="search" id="search" placeholder="What are you looking for..">
            </div>
            <div>
                <button>Search</button>
            </div>
        </div>
        <div id="nav-c" onmouseover="windOpen()" onmouseout="windClose()">
            <p><i class="fa fa-user-o fa-2x"></i></p>
            <div id="navbar-signin-logo">
                <p>Sign up <br> Sign in</p>
            </div>



            <div class="flag" id="wind">
                <p>Welcome back!</p>
                <button onclick = "window.location.href = './signin.html'"
                >Sign In</button>
                <button onclick = "window.location.href = './signUp.html'">Join Free</button>

                <br>
                <div class="Openedslide">
                    <div></div>
                    <div>Continue with:</div>
                    <div></div>
                </div>
                <br>
                <div class="facebook-icon">
                    <i class="fab fa-facebook-square fa-2x"></i>&nbsp;
                <i class="fab fa-google fa-2x"></i>&nbsp;
                <i class="fab fa-linkedin fa-2x"></i>&nbsp;
                <i class="fab fa-twitter fa-2x"></i>&nbsp;<br>
                </div>
                <h6>By Sliding to Continue with or Create My account , <br> I agree to<a href="index.html">alibaba.com Policy</a> </h6>
                <h2 style="color: black;">My Alibaba</h2>
                </div>
        </div>
        <div id="nav-d">
            <i class="far fa-envelope fa-2x"></i>
            <p>message</p>
        </div>
        <div id="nav-e">
            <i class="fab fa-jedi-order fa-2x"></i>
            <p>orders</p>
        </div>
        <div id="nav-f" onclick = "window.location.href = './shoppingcart.html'">
        <p id="cartCount">x</p>
        <i class="fas fa-shopping-cart fa-2x"></i>
            <p>cart</p>
        </div>
    </div>
    <div id="bot-nav">
        <div>
            <div id="left_first"><i class="fa-solid fa-list"></i>
                Categories    <i class="fa-solid fa-angle-up"></i>
                <!-- </div> -->
                <div id="menu">
                  
                        <div><a href="#">Machinery / Vehicles & Accessories </a>
                            <!-- <ul>
                                <li><a href="#">Agricultural Machinery & Equipment</a></li>
                                <li><a href="#">Apparel & Textile Machinery</a></li>
                                <li><a href="#">cuilding Material Machinery</a></li>
                                <li><a href="#">Chemical & Pharamaceutical Machinery</a></li>
                            </ul>-->
                        </div>
                        <div><a href="./electronics.html">Consumer Electronics / Home Appliances </a>
                            <!-- <ul>
                                <li><a href="#">Blockchain Miners</a></li>
                                <li><a href="#">Camera,Photo & Accessories</a></li>
                                <li><a href="#">Chargers,Batteries & Power Supplies</a></li>
                            </ul> -->
                        </div>
                        <div><a href="#">Apparel / Fashion Accessories /Timepieces,Jewelry</a>
                            <!-- <ul>
                                <li><a href="#">Men's Clothing</a></li>
                                <li><a href="#">women's Clothing</a></li>
                                <li><a href="#">Sportswear</a></li>
                                <li><a href="#">Garments & Processing Accessories</a></li>
                                <li><a href="#">Wedding Apparel & Accessories</a></li>
                                <li><a href="#">Made In Italy</a></li>
                                <li><a href="#">View More</a></li>
                            </ul> -->
                        </div>
                        <div><a href="#">Lights & Lighting / Construction & Real Estate</a>
                            <!-- <ul>
                                <li><a href="#">Commercial & industrial Lighting</a></li>
                                <li><a href="#">healthcare Lighting</a></li>
                                <li><a href="#">Holiday Lighting</a></li>
                                <li><a href="#">Indoor Lighting</a></li>
                                <li><a href="#">Landscape Lighting</a></li>
                            </ul> -->
                        </div>
                        <div><a href="#">Home & Garden / Furniture</a>
                            <!-- <ul>
                                <li><a href="#">Kitchen & Tabletop</a></li>
                                <li><a href="#">Garden supplies</a></li>
                                <li><a href="#">Pet Products</a></li>
                                <li><a href="#">Home Storage & Organisation</a></li>
                                <li><a href="#">Household & Organisation</a></li>
                            </ul> -->
                        </div>
                        <div><a href="#">Fabric & Textiles Raw Material / Home Textiles</a>
                            <!-- <ul>
                                <li><a href="#">Down & Feather</a></li>
                                <li><a href="#">Fabric</a></li>
                                <li><a href="#">Fiber</a></li>
                                <li><a href="#">Fur</a></li>
                                <li><a href="#">Leather</a></li>
                            </ul> -->
                        </div>
                        <div><a href="#">Beauty & Personal Care / Health & Medical</a>
                            <!-- <ul>
                                <li><a href="#">Baby Care</a></li>
                                <li><a href="#">Bath Supplies</a></li>
                                <li><a href="#">Beauty Equipment</a></li>
                                <li><a href="#">Body Art</a></li>
                                <li><a href="#"> False Eye slashes </a></li>
                            </ul> -->
                        </div>
                        <div><a href="#">Packaging & Printing / Office & School Supplies</a>
                            <!-- <ul>
                                <li><a href="#">Sub Menu 1</a></li>
                                <li><a href="#">Sub Menu 2</a></li>
                                <li><a href="#">Sub Menu 3</a></li>
                                <li><a href="#">Sub Menu 4</a></li>
                                <li><a href="#">Sub Menu 5</a></li>
                            </ul> -->
                        </div>
                        <div><a href="#">Electrical Equipment & Supplies</a>
                            <!-- <ul>
                                <li><a href="#">Sub Menu 1</a></li>
                                <li><a href="#">Sub Menu 2</a></li>
                                <li><a href="#">Sub Menu 3</a></li>
                                <li><a href="#">Sub Menu 4</a></li>
                                <li><a href="#">Sub Menu 5</a></li>
                            </ul> -->
                        </div>
                        <div><a href="#">Tools & Hardware / Security & Protection / Fabrication Service</a>
                            <!-- <ul>
                                <li><a href="#">Sub Menu 1</a></li>
                                <li><a href="#">Sub Menu 2</a></li>
                                <li><a href="#">Sub Menu 3</a></li>
                                <li><a href="#">Sub Menu 4</a></li>
                                <li><a href="#">Sub Menu 5</a></li>
                            </ul> -->
                        </div>
                </div>
            </div>
            <div>
                Ready to Ship
            </div>
            <div>
                Personal Protective E...
            </div>
            <div>
                Trade Shows
            </div>
            <div id="blogslide">
                Buy Central <i class="fa-solid fa-angle-up"></i>

                <!-- <div class="blogSlidenew">
                     <h2>Blog</h2><h2>Submit RFQ</h2>
                </div> -->
            </div>
            <div>
                Sell on Alibaba <i class="fa-solid fa-angle-up"></i>
            </div>
            <div>
                Help <i class="fa-solid fa-angle-up"></i>
            </div>
        </div>
        <div>
            <div>
                English USD <i class="fa-solid fa-angle-up"></i>
            </div>
            <div>
                Ship to: <img src="https://cdn-icons-png.flaticon.com/512/555/555526.png" width="22px" height="15px"><i class="fa-solid fa-angle-up"></i>
            </div>
        </div>
    </div>`
}

export default navbar;