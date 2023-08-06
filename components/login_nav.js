function loginNavbar() {
  return `  <div id="explorenavbar">
    <div id="logodiv">
      <img
        id="logo"
        src="https://playo-website.imgix.net/company/logo1.png?auto=compress,format"
        alt="playo logo"
      />
    </div>

    <div id="nav2div">
    <svg
    id="pplogo"
    class="hidden md:block"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="16" fill="#BCD0DC"></circle>
    <path
      d="M16.0089 8C17.5908 8.00176 19.1366 8.47244 20.451 9.35256C21.7654 10.2327 22.7894 11.4827 23.3936 12.9447C23.9977 14.4066 24.1549 16.0149 23.8452 17.5662C23.5355 19.1174 22.7729 20.5421 21.6537 21.66C20.5345 22.7779 19.1091 23.539 17.5575 23.8469C16.0059 24.1549 14.3978 23.9959 12.9365 23.3902C11.4752 22.7844 10.2263 21.759 9.34763 20.4436C8.46897 19.1282 8 17.5819 8 16C8.00058 14.9488 8.2082 13.9081 8.611 12.9372C9.0138 11.9663 9.60389 11.0842 10.3476 10.3413C11.0913 9.59844 11.974 9.00933 12.9454 8.6076C13.9167 8.20588 14.9577 7.99942 16.0089 8Z"
      fill="white"
    ></path>
    <path
      d="M10.305 17.1999C10.0087 15.9312 10.1463 14.5997 10.6959 13.4184C11.2455 12.2371 12.1753 11.2741 13.3367 10.6836C13.5709 11.9501 13.4048 13.2581 12.8615 14.4259C12.3182 15.5937 11.4247 16.5633 10.305 17.1999V17.1999Z"
      fill="#BCD0DC"
    ></path>
    <path
      d="M18.4365 10.5803C17.724 10.2513 16.9524 10.0695 16.168 10.0457C15.3836 10.0218 14.6024 10.1565 13.8712 10.4416C14.1631 11.866 13.9897 13.3466 13.3764 14.6651C12.7631 15.9835 11.7424 17.07 10.4648 17.7644C10.8145 18.7957 11.4469 19.7081 12.2899 20.3976C12.5489 20.7561 12.6918 21.1853 12.6995 21.6276C12.6455 22.166 12.5338 22.6971 12.3665 23.2117C12.8547 23 13.3298 22.759 13.7891 22.4901C14.1995 22.2471 14.5791 21.9554 14.9197 21.6215C16.0156 21.8262 17.1471 21.7129 18.1807 21.2951C17.88 19.8724 18.0478 18.3905 18.6591 17.0711C19.2607 15.7678 20.2589 14.6881 21.511 13.9861C21.2548 13.2404 20.8503 12.5542 20.322 11.9689C19.7936 11.3836 19.1523 10.9112 18.4365 10.5803Z"
      fill="#BCD0DC"
    ></path>
    <path
      d="M21.6773 14.5586C21.9722 15.8163 21.8413 17.1363 21.3052 18.3115C20.769 19.4868 19.858 20.451 18.715 21.0527C18.4803 19.797 18.6389 18.4994 19.1691 17.3372C19.6992 16.1749 20.5752 15.2046 21.6773 14.5586Z"
      fill="#BCD0DC"
    ></path>
  </svg>
      <p id="myBtn" class="loginp">Login/Signup</p>
      <img
        id="dropdownarrow"
        src="https://playo-website.gumlet.net/playo_functional/Icons/arrow_light.svg"
        alt="arrow"
      />
    </div>

    <!--    popupwindow -->
    <div id="modal_container">
      <div id="modal">
        <img
          id="close"
          src="./images/close-icon.png"
          alt=""
        />

        <div id="login_left_div">
          <img
            width="100%"
            src="https://playo-website.gumlet.net/icons/login-graphics.png?auto=compress,format"
            alt=""
          />
        </div>
        <div id="login_right_div">
          <p id="entermobile">Enter Your Mobile Number</p>

          <div id="user_phone_div">
            <div>
              <div id="countrySpan">
                <span>
                  <div id="selectCallingCode">
                    <span
                      style="font-size: 14px; color: #424242"
                      id="rem1"
                      >IND</span
                    >
                    <span
                      style="font-size: 14px; color: #424242"
                      id="rem2"
                      >+91</span
                    >
                    <img
                      id="countryDrop"
                      src="https://s3.ap-south-1.amazonaws.com/playo-website/booking/selectCountry.svg"
                      alt="dropdown"
                    />
                  </div>
                </span>
              </div>
            </div>
            <span>
              <input
                id="input"
                type="number"
                placeholder="Mobile Number *"
                value=""
              />
              <hr
                style="margin-top: -1px; margin-left: -65%; width: 220%"
              />
            </span>
          </div>

          <button id="sendOTP" style="font-size: 1em">SEND OTP</button>
          <button id="giveOTP" style="font-size: 1em">Enter OTP</button>
          <button id="sign-in-google">Sign In With Google</button>
        </div>
      </div>
    </div>
  </div>`;
}
export default loginNavbar;
