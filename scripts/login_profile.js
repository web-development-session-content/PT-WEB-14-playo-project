function profile() {
  return ` <div id="profile_img"><img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" style="width: 100px;" /></div>
    
    <div id="inputbox"> <input  class="firstname" type="text" placeholder="First Name*">
     <input  class="lastname" type="text" placeholder="Last Name*" >
     <div id="logo">
         <p id="mobile">IND</p>
         <p id="pp1">+91</p>
     <i id="pp2" class="fas fa-sort-down"></i>
         <p id="pp3">9021553726</p>
     </div>
     <input  class="email" type="text" placeholder="Email*">
    
     <div id="buttons">
     <button id="save" >SAVE</button>
     <button id="reset">RESET</button>
    </div>
    
    </div>`;
}

export default profile;
