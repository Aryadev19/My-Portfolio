var options = {
    strings: [
      ,
      "I am a <span>Programmer</span>",
      "I am a <span>Developer</span>",
      "I am a <span>Coder</span>",
    ],
    typeSpeed: 40,
    backspeed: 20,
    showCursor: true,
    loop: true,
  };
  
  var typed = new Typed("#typed", options);
  
  const p1 = document.querySelector(".p1");
  const p2 = document.querySelector(".p2");
  const p3 = document.querySelector(".p3");

  p1.onclick = ()=>{
    window.location.href="http://roasted-potato.vercel.app/"
  }

  p2.onclick = ()=>{
    window.location.href="http://pok-dex-blush.vercel.app/";
  };

  p3.onclick = ()=>{
    window.location.href="https://factomania.vercel.app/";
  }