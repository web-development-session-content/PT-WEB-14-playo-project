function navbar(){
    return `<div id="navbar">
                <a id="active" href="index.html">
                <img src="https://web.archive.org/web/20210501134628im_/https://playo-website.imgix.net/logo/playo-logo-header-website.png?auto=compress,format&amp;q=90">
                </a>

                <ul id="nav_options">
                    <li><a href="venues.html"><span class="link-btn" id="book" >Book Venues</span></a></li>
                    <li><a href="activities.html"><span class="link-btn">Activities</span></a></li>
                    <li><a href="blog.html"><span class="link-btn">Blog</span></a></li>
                </ul>
            </div>`;
}

export default navbar;