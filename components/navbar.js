function navbar(){
    return `<div id="navbar">
                <a id="active" href="index.html">
                    <img id="logo" src="https://playo-website.gumlet.io/playo-website-v2/Logo+with+Trademark_Filled.png" alt="logo+img">
                </a>

                <ul id="nav_options">
                    <li><a href="venues.html"><span class="link-btn">Book Venues</span></a></li>
                    <li><a href="activities.html"><span class="link-btn">Activites</span></a></li>
                    <li><a href="blog.html"><span class="link-btn">Blog</span></a></li>
                </ul>
            </div>`;
}

/** 
 * CSS for navbar is included in index.css file , if we want you can use from there.
 */

export default navbar;