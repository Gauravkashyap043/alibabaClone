function navbar(){
    return `
    <div id="nav">
        <a href="./index.html"><img src="https://bit.ly/3nBvG0c" alt="" /></a>
        <div id="srch">
            <select>
                <option value="">Products</option>
                <option value="">Suppliers</option>
            </select>
            <input id="search" type="search" placeholder="What are you looking for. . . " />
            <!-- <i class="fas fa-camera fa-2x "></i> -->
            <button>Search</button>
        </div>
        <div id="icns">
            <a href="#">
                <div id="asign">
                    <div style="color: black;" id="onblock"><br><br>
                        <h3>Welcome back!</h3>
                        <button onclick = "window.location.href = './signin.html'">Sign In</button><br><br>
                        <button onclick = "window.location.href = './signUp.html'">Join Free</button><br><br>
                        _______Continue With_______ <br><br>
                      <i class="fab fa-facebook-square fa-2x"></i>&nbsp;
                      <i class="fab fa-google fa-2x"></i>&nbsp;
                      <i class="fab fa-linkedin fa-2x"></i>&nbsp;
                      <i class="fab fa-twitter fa-2x"></i>&nbsp;<br>
                      <h6>By Sliding to Continue with or Create My account , <br> I agree to<a href="index.html">alibaba.com Policy</a> </h6>
                        <h2 style="color: black;">My Alibaba</h2>
                        _____________________________________
                         Manage RFQ <br>
                         Orders <br>
                         Favorites <br>
                         Accounts <br>
                         ___________ <br>
                         Submit RFQ
                    </div>
                    <div id="navbar-signin-logo"><i class="far fa-user fa-2x ">&nbsp</i>Sign In</div>
                </div>
            </a>

            <a href="message.html">
                <div id="asign">
                    <div id="msghover">
                        <h3>Unread message reminder</h3><br>
                        <p>we will Remind you  here when you there is<br> new message. please login to view </p><br>
                        <button>Sign In</button><br>
                        New User? Please  <a href="signup.html">register</a>& Start your Business today!
                    </div>
                    <i class="far fa-envelope fa-2x"></i>
                </div>
            </a>
            <a href="orders.html">
                <div id="asign">
                    <div id="orderhover">
                        <h3>Trade Assurance</h3>
                        <p>Protect your alibaba.com orders</p><br>
                        <p>Trade Assurance Ensures:</p><br>
                        <p>Product Quality</p><br>
                        <button>Order With Trade Assurance </button>
                    </div>
                    <i class="fab fa-jedi-order fa-2x"></i>
            </a>
        </div>
        <a href="./shoppingcart.html">
            <div id="asign">
                <i class="fas fa-shopping-cart fa-2x"></i>
            </div>
        </a>
    </div>
    </div>
    <div id="secnav">
        <div id="left">
            <a href="/#">
                <div id="left_first">
                    Categories
                    <!-- </div> -->
                    <div id="menu">
                        <ul>
                            <li><a href="#">Machinery / Vehicles & Accessories </a>
                                <ul>
                                    <li><a href="#">Agricultural Machinery & Equipment</a></li>
                                    <li><a href="#">Apparel & Textile Machinery</a></li>
                                    <li><a href="#">Building Material Machinery</a></li>
                                    <li><a href="#">Chemical & Pharamaceutical Machinery</a></li>
                                </ul>
                            </li>
                            <li><a href="./electronics.html">Consumer Electronics / Home Appliances </a>
                                <ul>
                                    <li><a href="#">Blockchain Miners</a></li>
                                    <li><a href="#">Camera,Photo & Accessories</a></li>
                                    <li><a href="#">Chargers,Batteries & Power Supplies</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Apparel / Fashion Accessories /Timepieces,Jewelry,Eyewear</a>
                                <ul>
                                    <li><a href="#">Men's Clothing</a></li>
                                    <li><a href="#">women's Clothing</a></li>
                                    <li><a href="#">Sportswear</a></li>
                                    <li><a href="#">Garments & Processing Accessories</a></li>
                                    <li><a href="#">Wedding Apparel & Accessories</a></li>
                                    <li><a href="#">Made In Italy</a></li>
                                    <li><a href="#">View More</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Lights & Lighting / Construction & Real Estate</a>
                                <ul>
                                    <li><a href="#">Commercial & industrial Lighting</a></li>
                                    <li><a href="#">healthcare Lighting</a></li>
                                    <li><a href="#">Holiday Lighting</a></li>
                                    <li><a href="#">Indoor Lighting</a></li>
                                    <li><a href="#">Landscape Lighting</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Home & Garden / Furniture</a>
                                <ul>
                                    <li><a href="#">Kitchen & Tabletop</a></li>
                                    <li><a href="#">Garden supplies</a></li>
                                    <li><a href="#">Pet Products</a></li>
                                    <li><a href="#">Home Storage & Organisation</a></li>
                                    <li><a href="#">Household & Organisation</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Fabric & Textiles Raw Material / Home Textiles</a>
                                <ul>
                                    <li><a href="#">Down & Feather</a></li>
                                    <li><a href="#">Fabric</a></li>
                                    <li><a href="#">Fiber</a></li>
                                    <li><a href="#">Fur</a></li>
                                    <li><a href="#">Leather</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Beauty & Personal Care / Health & Medical</a>
                                <ul>
                                    <li><a href="#">Baby Care</a></li>
                                    <li><a href="#">Bath Supplies</a></li>
                                    <li><a href="#">Beauty Equipment</a></li>
                                    <li><a href="#">Body Art</a></li>
                                    <li><a href="#"> False Eye slashes </a></li>
                                </ul>
                            </li>
                            <li><a href="#">Packaging & Printing / Office & School Supplies</a>
                                <ul>
                                    <li><a href="#">Sub Menu 1</a></li>
                                    <li><a href="#">Sub Menu 2</a></li>
                                    <li><a href="#">Sub Menu 3</a></li>
                                    <li><a href="#">Sub Menu 4</a></li>
                                    <li><a href="#">Sub Menu 5</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Electrical Equipment & Supplies</a>
                                <ul>
                                    <li><a href="#">Sub Menu 1</a></li>
                                    <li><a href="#">Sub Menu 2</a></li>
                                    <li><a href="#">Sub Menu 3</a></li>
                                    <li><a href="#">Sub Menu 4</a></li>
                                    <li><a href="#">Sub Menu 5</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Tools & Hardware / Security & Protection / Fabrication Service</a>
                                <ul>
                                    <li><a href="#">Sub Menu 1</a></li>
                                    <li><a href="#">Sub Menu 2</a></li>
                                    <li><a href="#">Sub Menu 3</a></li>
                                    <li><a href="#">Sub Menu 4</a></li>
                                    <li><a href="#">Sub Menu 5</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>

            <a href="">
                <div id="lefta">
                    Ready to Ship
                </div>
            </a>
            <a href="">
                <div id="lefta">
                    Personal Protective
                </div>
            </a>
            <a href="">
                <div class="drop">
                    Buyer central
                    <div class="sub_drop">
                        <span style="display: flex;">
                            <div>
                                <p>Blog </p>
                                <p>Trade Assurance</p>
                                <p>Letter Of Credit</p>
                            </div>
                            <div>
                                <p>&nbsp;&nbsp; Submit RFQ</p>
                                <p>&nbsp;&nbsp;Suppliers By Regions</p>
                            </div>
                        </span>
                    </div>

                </div>
            </a>
            <a href="">
                <div class="drop">
                    sell on Alibaba
                    <div class="sub_drop">
                        <span style="display: flex;">
                            <div>
                                <p>For Global Seller </p>
                                <p>For Chinese Seller</p>
                                <p>Partner Program</p>
                            </div>
                            <div>
                                <p>&nbsp;&nbsp; Submit RFQ</p>
                                <p>&nbsp;&nbsp;Suppliers By Regions</p>
                            </div>
                        </span>
                    </div>
                </div>
            </a>
            <a href="">
                <div class="drop">Help
<div class="sub_drop">
    <span style="display: flex;">
        <div>
            <p>for Buyers </p>
            <p>For Suppliers</p>
            <p>Submit a Dispute</p>
            <p>Report IPR Infringement</p>
            <p></p>
        </div>
    </span>
</div>
                </div>
            </a>
        </div>
        <div id="right">
            <div class="drop">Get the App</div>|
            <div class="drop">English-INR</div>|
            <div class="drop">Ship To: </div>
        </div>
    </div>`
}

export default navbar;