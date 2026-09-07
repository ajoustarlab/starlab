/* ============================================================
   STAR Lab — shared behavior (loaded on every page)
   ============================================================ */

/* ---------- LANGUAGE TOGGLE ----------
   How it works:
   - Any element with data-en / data-ko attributes shows the text
     for the current language.
   - Elements with class "only-en" / "only-ko" are shown/hidden.
   - The choice is saved in the browser (localStorage) so it
     persists across pages and visits.
   Default language is English.
------------------------------------------------------------- */
(function(){
  const KEY = 'starlab-lang';
  function apply(lang){
    document.documentElement.setAttribute('lang', lang);
    // swap text for elements carrying both languages
    document.querySelectorAll('[data-en]').forEach(el=>{
      const val = el.getAttribute('data-'+lang);
      if(val !== null && val !== undefined) el.innerHTML = val;
    });
    // show/hide language-specific blocks
    document.querySelectorAll('.only-en').forEach(el=>el.style.display = lang==='en'?'':'none');
    document.querySelectorAll('.only-ko').forEach(el=>el.style.display = lang==='ko'?'':'none');
    // update toggle buttons
    document.querySelectorAll('.lang-toggle button').forEach(b=>{
      b.classList.toggle('active', b.dataset.lang===lang);
    });
    try{ localStorage.setItem(KEY, lang); }catch(e){}
  }
  function current(){
    try{ return localStorage.getItem(KEY) || 'en'; }catch(e){ return 'en'; }
  }
  // expose for buttons
  window.setLang = apply;
  // init on load
  document.addEventListener('DOMContentLoaded', function(){
    apply(current());
    document.querySelectorAll('.lang-toggle button').forEach(b=>{
      b.addEventListener('click', ()=>apply(b.dataset.lang));
    });
  });
})();

/* ---------- MOBILE MENU ---------- */
function toggleMenu(){
  const nl = document.getElementById('nl');
  if(nl) nl.classList.toggle('open');
}

/* ---------- HERO SCATTER (home page only) ---------- */
function drawHeroScatter(){
  const c = document.getElementById('scatter');
  if(!c) return;
  const x = c.getContext('2d');
  function draw(){
    const r = window.devicePixelRatio || 1;
    const w = c.clientWidth, h = c.clientHeight;
    c.width = w*r; c.height = h*r; x.setTransform(r,0,0,r,0,0);
    x.clearRect(0,0,w,h);
    const pts = [];
    function gauss(){let u=0,v=0;while(!u)u=Math.random();while(!v)v=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(6.283*v);}
    function cluster(cx,cy,n,s,hue){for(let i=0;i<n;i++){
      const a=Math.random()*6.283, rad=Math.abs(gauss())*s;
      pts.push({x:cx+Math.cos(a)*rad, y:cy+Math.sin(a)*rad*0.7, hue});
    }}
    cluster(w*0.30,h*0.42,150,w*0.11,0);
    cluster(w*0.68,h*0.60,150,w*0.11,1);
    x.strokeStyle='rgba(127,191,200,.35)'; x.lineWidth=1.5;
    x.beginPath(); x.moveTo(w*0.12,h*0.72); x.lineTo(w*0.88,h*0.30); x.stroke();
    pts.forEach(p=>{
      x.beginPath(); x.arc(p.x,p.y,2.2,0,6.283);
      x.fillStyle = p.hue ? 'rgba(127,191,200,.75)' : 'rgba(200,210,225,.55)';
      x.fill();
    });
  }
  draw();
  let t; window.addEventListener('resize',()=>{clearTimeout(t);t=setTimeout(draw,150);});
}
document.addEventListener('DOMContentLoaded', drawHeroScatter);
