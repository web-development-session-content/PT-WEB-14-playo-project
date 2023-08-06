
// yo can find css for these footer file here="style/footer.css".
// you have to simply link that stylesheet in your heading part
// for these file make one footer with id="footer" and make innerHtml for imported function
function footer()
{
    return `<div id="infooter">
    <div id="div1">
        <div id="weblogo">
        <img class="footer_logo" src="https://web.archive.org/web/20210501134628im_/https://playo-website.imgix.net/logo/playo-logo-footer-website.png?auto=format,compress&amp;h=100" alt="logo">
        </div>
        <div id="playstore">
            <a href="https://play.google.com/store/apps/details?id=com.techmash.playo">
            <img src="https://web.archive.org/web/20210501134628im_/https://playo-website.imgix.net/icons/download-android.png?auto=format,compress" alt="Google-play">
            </a>
            <a href="https://apps.apple.com/us/app/playo-local-sports-community/id1018786950?ls=1">
            <img src="https://web.archive.org/web/20210501134628im_/https://playo-website.imgix.net/icons/download-ios.png?auto=format,compress" alt="Apple-store">
            </a>
        </div>
        <div id="copyright">
            <p>©2022 TechMash Solutions Private Limited.<span> All Rights Reserved.</span></p>
        </div>
        <div id="loweritems">
            <a href="faq.html"><p>FAQs</p></a>
            <a href=""><p>Privacy Policy</p></a>
            <a href=""><p>Terms of Service</p></a>
            <a href=""><p>Cancellation & Refund Policy</p></a>
            <a href=""><p>Careers</p></a>
            <a href=""><p id="hiring">We're Hiring!</p></a>
        </div>
    </div>
    <div id="div2">
        <a href="about.html"><p>About Us</p></a>
        <a href="partner.html"><p>Partner With Us</p></a>
        <a href="brandact.html"><p>Brand Activations</p></a>
        <a href="corporate.html"><p>Corporate Offerings</p></a>
        <a href="contact.html"><p>Contact Us</p></a>
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
        <a href="https://www.linkedin.com/company/playo"><p>Linkedin</p></a>
    </div>
</div>`
}

export default footer 