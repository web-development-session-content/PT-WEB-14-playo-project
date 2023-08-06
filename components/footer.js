// yo can find css for these footer file here="style/footer.css".
// you have to simply link that stylesheet in your heading part
// for these file make one footer with id="footer" and make innerHtml for imported function
function footer() {
  return `<div class="foot-cont"><div id="infooter">
    <div id="div1">
        <div id="weblogo">
            <a href="index.html"><img src="https://s3.ap-south-1.amazonaws.com/playo-website/company/logonew-playo-03.png" alt="logo" width=100%></a>
        </div>
        <div id="playstore">
            <a href="https://play.google.com/store/apps/details?id=com.techmash.playo">
                <img style="width:25px;" src="https://www.pngkit.com/png/full/14-146203_white-play-png-white-google-play-logo.png" >
            </a>
            <a href="https://apps.apple.com/us/app/playo-local-sports-community/id1018786950?ls=1">
                <img style="width:25px; margin-bottom: 2%;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1010px-Apple_logo_white.svg.png?20220821122232" >
            </a>
        </div>
    </div>
    <div id="div2">
        <a href="about.html"><p>About Us</p></a>
        <a href="partner.html"><p>Partner With Us</p></a>
        <a href="brandact.html"><p>Brand Activations</p></a>
        <a href="corporate.html"><p>Corporate Offerings</p></a>
        <a href="contact.html"><p>contact Us</p></a>
    </div>
    <div id="div3">
        <a href="venues.html"><p>Book Venues</p></a>
        <a href="activities.html"><p>Activities</p></a>
        <a href="blog.html"><p>Blog</p></a>
        <a href="faq.html"><p>FAQ's</p></a>
    </div>
    <div id="div4">
        <a href="https://www.facebook.com/PlayoApp/"><p>Facebook</p></a>
        <a href="https://twitter.com/playoApp"><p>Twitter</p></a>
        <a href="https://www.instagram.com/playoapp/"><p>Instagram</p></a>
        <a href="https://www.linkedin.com/company/playo"><p>LinkdIn</p></a>
    </div>
    
</div>
<div class="low-cont">
<div id="copyright">
            <p style="margin: 0;">©2022 TechMash Solutions Private Limited.<span> All Rights Reserved.</span></p>
        </div>
        <div id="loweritems">
        <a href="faq.html"><p>FAQs</p></a>
        <a href=""><p>Privacy POlicy</p></a>
        <a href=""><p>Terms Of Service</p></a>
        <a href=""><p>Cancellation & Refund Policy</p></a>
        <a href=""><p>Careers</p></a>
        <a href=""><p id="hiring">We're Hiring!</p></a>
    </div>
</div>
</div>`;
}

export default footer;
