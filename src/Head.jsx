import './App.css';
import React from 'react';

class Header extends React.Component{
  constructor(prop){
    super(prop);
  } 
  
  componentDidMount(){
    var menu_icon = document.getElementById("menu_icon");
  function menu_toggle(){
    var out_nav =  document.getElementById("out_nav");
    if(out_nav.style.display==="block"){
         out_nav.style.display="none";
         menu_icon.src = process.env.PUBLIC_URL+"./polytechnic/menu.png";
       }
       else{
         out_nav.style.display="block";    
         out_nav.style.position="relative";
         out_nav.style.top="-18px";
         menu_icon.src = process.env.PUBLIC_URL+"./polytechnic/cross_mark.png";
     }
  }
  
   
  var search_bar_width = ()=>{
    var s_bar = document.getElementById('search_bar');
    if(window.innerWidth > 840 && window.innerWidth < 1150 ){
      s_bar.style.width = 240+"px";
    }
    else{
     s_bar.style.width = window.innerWidth-1021+"px";
    }
  }
   setInterval(search_bar_width,100);
  menu_icon.addEventListener('click',menu_toggle);




  var menu_ani = document.getElementsByClassName('menu_ani');
  
  var out_nav =  document.getElementById("out_nav");
  for(let i = 0;i<menu_ani;i++){
    menu_ani[i].addEventListener('click',()=>{
      if(window.innerWidth<840){
      out_nav.style.display = 'none';
      menu_icon.src = process.env.PUBLIC_URL+"./polytechnic/menu.png";
      }
    })
  }
  
  var jmi_ani = document.getElementById('central');

  var jmi_str = "(A Central University)";
  var i = 0;
  var j = 0;
  jmi_ani.style.height = 10+"px";
  jmi_ani.style.color = "green";
  jmi_ani.textContent = "";
  function ani_end_jamia(){
    jmi_ani.textContent+=jmi_str[i];
     i++;
  }
  setInterval(()=>{
     if(i!==jmi_str.length-1){
       ani_end_jamia();
     }else{
       i = 0;
       jmi_ani.textContent = ""
      j++;
      if(j%2!==0){
        jmi_str = "   (NAAC Accredited '\A\' Grade)   ";
      }else{
        jmi_str = "   (A Central University)   ";
      }
     }
  },100)
  


  function search_google(){
     var search_text = document.getElementById('search_bar');
    if(search_text.value!=""){

       window.open("https://www.google.com/search?q=jmi+polytechnic+"+search_text.value,'_blank');
    } 
  }
 document.getElementById('srch_btn').addEventListener('click',search_google);
  

}

render(){
  return (
    <div>
          <header className='header'>
      <li id="menu">
        <img src={process.env.PUBLIC_URL+"/polytechnic/menu.png"} alt="" id="menu_icon" height="30px" width="35px" /> 
        <span id="menu_text" > MENU </span>
       </li>
<div className="out_nav" id="out_nav">
  
  <div className="nav">

    <ul>
      <li className="menu_ani"> HOME </li>
      <li className="menu_ani" id="abt"> ABOUT  </li>
      <li className="menu_ani" > NEWS    </li>
      <li className="menu_ani"> CONTACT </li>
      <li> <input type="search" placeholder="Search" className="search_bar" id="search_bar"/>  </li>
      <li>  <input type="button" className="submit_button" id="srch_btn" /> </li>
    </ul>
  </div>
</div>

</header>

    </div>
  )
  }
}
