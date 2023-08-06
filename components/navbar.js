function navbar(){
    return `<div id="navbar">
                <a id="active" href="index.html">
                    <img id="logo" src="http://web.archive.org/web/20220331095826im_/https://playo-website.gumlet.io/playo-website-v2/logos-icons/Playo+Logo+-+Unfilled.svg?auto=compress,format&q=90" alt="">
                </a>

                <ul id="nav_options">
                    <li><a href="venues.html"><span class="link-btn">Book Venues</span></a></li>
                    <li><a href="activities.html"><span class="link-btn">Activites</span></a></li>
                    <li><a href="blog.html"><span class="link-btn">Blog</span></a></li>
                </ul>
            </div>`;
}

export default navbar;