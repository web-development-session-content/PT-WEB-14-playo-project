function navbarsidebar(){

    return ` <div id="navbox">

    <div id="navbox_img">
    <a href="index.html">  <img src="https://playo-website.gumlet.io/playo-website-v2/Logo+with+Trademark_Filled.png" height="100%" width="100%"/></a>
    </div>
    
    <div id="navdiv">
    <ul type="none">
        <li class="offer"><a href="#">Offer</a></li>
        <li class="offer"><a href="#">Partner with us</a></li>

        <li>
        <div id="mainmenu">
        <div id="mainm">
        <div id="top1"><img  src="data:image/png;base64,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" height="37"/></div>
        <div><p id="mobnum">9021553726</p></div>
        <div id="down"></div>
       </div>
        <div id="menu">
        <ul type="none">
        <li class="d1"><a href="login_mybooking.html">My Profile</a></li>
        <div id="pline"></div>
        <li class="d2" id="logoutBtn">Logout</li>
        </ul>
        </div>
        
        </div>
        </li>
    
    </ul>
    </div>
   

    </div>


    <!-- bottom part -->

    <div id="Vbox">


    <div id="verticalbox1" >
        <img  src="data:image/png;base64,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" >
        <p id="mob">9021553726</p>
       <div id="line"></div>

       <div id="sidebtn">
     <a href="login_profile.html" >  <div id="profile" >
           <img src="https://playo-website.gumlet.io/playo-website-v2/profile/disable-edit.svg" />
           <p >Profile</p>
       </div></a>
       <a href="login_mybooking.html" > <div id="profile" class="feedback1" id="gg1" >
        <img src="https://playo-website.gumlet.io/playo-website-v2/profile/white-booking.svg" />
        <p style="color:red">My Booking</p>
    </div></a>
    <a id="idr" href="login_feedback.html" > <div id="profile">
        <img src="https://playo-website.gumlet.io/playo-website-v2/profile/disable-feedback.svg" />
        <p>Feedback</p>
    </div></a>
</div>

    </div>

    <div id="verticalbox2">


    </div>

</div>`

}

export default navbarsidebar

 //    <div id="menu">
    //     <ul type="none">
    //     <li><a href="#">My Profile</a></li>
    //     <li><a href="#">Logout</a></li>
    //     </ul>
    //     </div>