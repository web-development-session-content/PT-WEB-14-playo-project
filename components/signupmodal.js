function signinmodal() {
  return `<div id="modal">
    <img id="close" src="https://playo-website.gumlet.io/playo-website-v2/logos-icons/cross.svg"
        alt="">

    <div id="login_left_div">
        <img width="100%"
            src="https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Ficons%2Flogin-graphics.png%3Fauto%3Dcompress%2Cformat&w=384&q=75"
            alt="">
    </div>
    <div id="login_right_div">
        <p id="entermobile">Enter Your Mobile Number</p>

        <div id="user_phone_div">
            <div>
                <div id="countrySpan">
                    <span>
                        <div id="selectCallingCode">
                            <span style="font-size: 14px; color: #424242;" id="rem1">IND</span>
                            <span style="font-size: 14px; color: #424242;" id="rem2">+91</span>
                            <img id="countryDrop"
                                src="https://s3.ap-south-1.amazonaws.com/playo-website/booking/selectCountry.svg"
                                alt="dropdown">
                        </div>
                    </span>
                </div>
            </div>
            <span>
                <input id="input" type="number" placeholder="Mobile Number *" value="">
                <hr style="margin-top: -1px; margin-left: -65%; width: 220%;">
            </span>

        </div>

        <button id="sendOTP" style="font-size: 1em;">SEND OTP</button>
        <button id="giveOTP" style="font-size: 1em;">Enter OTP</button>
    </div>
</div>`;
}

export default signinmodal;
