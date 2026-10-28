(function(){
"use strict";
const offers=[
["Salomon Sports","Sportswear & outdoor gear","Find your next adventure.","Explore footwear and gear for running, hiking and days spent outdoors.","Shop outdoor gear ↗","https://c.trackmytarget.com/?a=qjpr0y&i=el31qe","https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1400&q=85","Runner outdoors on a trail"],
["UCOOK","Food & meal inspiration","Make dinner an experience.","Discover fresh ingredients and recipe ideas that bring something new to the table.","Explore meal options ↗","https://c.trackmytarget.com/?a=trdkct&i=el31qe","https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=85","Fresh ingredients and a colourful prepared meal"],
["Faithful to Nature","Natural living & personal care","Make thoughtful choices, every day.","Explore natural beauty, pantry and personal-care finds for a more considered routine.","Explore natural finds ↗","https://c.trackmytarget.com/?a=vpmli3&i=el31qe","https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1400&q=85","Natural skincare and botanical products"],
["Kiwi.com","Travel · Flight searches","Your next journey starts here.","Explore flight options and routes for a future getaway or a trip closer to home.","Find flights ↗","https://afflat3e1.com/trk/lnk/32FF55CE-E574-4B8C-A6CA-5FF529983F86/?o=8338&c=918277&a=537093&k=98D2B7DAE47475705C183138269EAFA4&l=7050","https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=85","Passenger airplane flying above clouds"],
["Saily","Travel · eSIM connectivity","Land ready to connect.","Explore travel eSIM data plans for destinations around the world and check device compatibility.","Explore eSIM plans ↗","https://afflat3e1.com/trk/lnk/32FF55CE-E574-4B8C-A6CA-5FF529983F86/?o=28155&c=918277&a=537093&k=84A4E9BABBD709EFDBA63F25F3CDD275&l=34655","https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=85","Smartphone ready for travel connectivity"],
["Compensair","Travel · Flight disruption","Flight delayed or cancelled?","If a flight was disrupted, check whether your journey may qualify for compensation.","Check my flight ↗","https://afflat3e3.com/trk/lnk/32FF55CE-E574-4B8C-A6CA-5FF529983F86/?o=16819&c=918277&a=537093&k=39E489CBAF5D17565A8CB2708B8BF422&l=29712","https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=85","Passenger airplane in flight"],
["Air Doctor","Travel healthcare","Know where to turn when travelling.","Explore options for finding local doctors abroad, including in-person and video appointments.","Find a doctor ↗","https://afflat3e3.com/trk/lnk/32FF55CE-E574-4B8C-A6CA-5FF529983F86/?o=29713&c=918277&a=537093&k=75B7107DB675EE0D8B219CE35A9CD151&l=33359","https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85","Healthcare professional in a clinic setting"],
["INFOBUS","Travel · Flights, trains and buses","Your next journey starts here.","Compare travel options and explore flights, train tickets and bus connections for your next adventure.","Explore travel options ↗","https://afflat3e3.com/trk/lnk/32FF55CE-E574-4B8C-A6CA-5FF529983F86/?o=26950&c=918277&a=537093&k=40A11865C3F14CE45D8DB4630E23E473&l=28868","https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1400&q=85","Passenger bus ready for a journey"],
["Ultrahuman","Health technology · Sleep and recovery","Get to know your everyday rhythms.","Explore a connected health-tracking ecosystem designed to help you understand patterns in sleep, metabolism and recovery.","Explore health tracking ↗","https://afflat3e3.com/trk/lnk/32FF55CE-E574-4B8C-A6CA-5FF529983F86/?o=31616&c=918273&a=537093&k=43417A7AF09027A673C2B730B6AC4C85&l=37262","https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1400&q=85","Wearable smartwatch used for everyday activity tracking"],
["Plan B Rentals","Travel · Holiday accommodation","Give your rental listing a head start.","Hosts can get 50% off their first three months with code HOST50. Offer runs through November 15; discount is applied at checkout.","List your rental with HOST50 ↗","https://afflat3e3.com/trk/lnk/32FF55CE-E574-4B8C-A6CA-5FF529983F86/?o=32858&c=918277&a=537093&k=F06DA55C8652475E59509D6FFF6EB2FF&l=38753","https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=85","Welcoming holiday rental home with a garden"]
];
const css=[
".wa-affiliate-wrap{width:min(1160px,92%);margin:22px auto 30px;font-family:inherit}",
".wa-affiliate-heading{display:flex;justify-content:space-between;align-items:center;gap:12px;margin:0 0 10px;color:#657064;font-size:.72rem;font-weight:800;letter-spacing:.13em;text-transform:uppercase}",
".wa-affiliate-heading span:last-child{letter-spacing:0;font-weight:600;text-transform:none}",
".wa-affiliate-frame{position:relative;isolation:isolate;overflow:hidden;border-radius:22px;background:#e9e7dc;box-shadow:0 12px 32px #343c3212}",
".wa-affiliate-slide{display:none;min-height:250px;grid-template-columns:1.02fr .98fr;align-items:stretch;position:relative}",
".wa-affiliate-slide.is-active{display:grid;animation:waAdFade .35s ease}",
".wa-affiliate-copy{position:relative;z-index:2;padding:clamp(22px,4vw,48px);display:flex;flex-direction:column;align-items:flex-start;justify-content:center;background:linear-gradient(135deg,#f4f0e6,#e7eadf);color:#343c32}",
".wa-affiliate-kicker{font-size:.7rem;font-weight:850;letter-spacing:.14em;text-transform:uppercase;color:#40503d}",
".wa-affiliate-copy h2{font:700 clamp(1.65rem,3.3vw,2.7rem)/1.08 Georgia,serif;letter-spacing:-.03em;margin:12px 0;color:#343c32}",
".wa-affiliate-copy p{max-width:460px;color:#51594e;line-height:1.6;margin:0 0 18px}",
".wa-affiliate-tag{display:inline-flex;border:1px solid #d7d5c8;border-radius:999px;padding:5px 10px;background:#ffffffb8;color:#5d6558;font-size:.7rem;font-weight:750;margin-bottom:12px}",
".wa-affiliate-cta{display:inline-flex;align-items:center;justify-content:center;background:#40503d;color:#fff!important;text-decoration:none!important;border-radius:999px;padding:11px 17px;font-weight:750;font-size:.9rem;transition:transform .2s ease,background .2s ease}",
".wa-affiliate-cta:hover{transform:translateY(-2px);background:#293729}",
".wa-affiliate-visual{height:100%;min-height:250px;position:relative;display:block;background:linear-gradient(135deg,#dfe5d7,#c6d0bc);overflow:hidden}",
".wa-affiliate-visual img{display:block;width:100%;height:100%;min-height:250px;position:absolute;inset:0;object-fit:cover;object-position:center;transition:transform .55s ease}",
".wa-affiliate-visual:hover img{transform:scale(1.035)}",
".wa-affiliate-controls{display:flex;align-items:center;justify-content:center;gap:12px;margin-top:11px}",
".wa-affiliate-arrow{width:36px;height:36px;border-radius:50%;border:1px solid #cfd3c7;background:#fff;color:#40503d;font-size:1.15rem;cursor:pointer}",
".wa-affiliate-arrow:hover{background:#f4f0e6}",
".wa-affiliate-dots{display:flex;gap:7px;align-items:center;flex-wrap:wrap;justify-content:center}",
".wa-affiliate-dot{width:8px;height:8px;border:0;border-radius:50%;padding:0;background:#c9cec1;cursor:pointer}",
".wa-affiliate-dot[aria-current=true]{background:#40503d;transform:scale(1.25)}",
".wa-affiliate-note{text-align:center;color:#657064;font-size:.72rem;margin:8px 0 0}",
".wa-affiliate-frame.wa-design-panorama .wa-affiliate-slide{min-height:330px;grid-template-columns:1fr}",
".wa-affiliate-frame.wa-design-panorama .wa-affiliate-visual{position:absolute;inset:0;min-height:100%;z-index:0}",
".wa-affiliate-frame.wa-design-panorama .wa-affiliate-visual:after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,#1e2b22ef 0%,#1e2b22b8 48%,#1e2b2230 100%)}",
".wa-affiliate-frame.wa-design-panorama .wa-affiliate-visual img{height:100%;min-height:330px}",
".wa-affiliate-frame.wa-design-panorama .wa-affiliate-copy{background:transparent;color:#fff;min-height:330px;max-width:68%;padding:clamp(26px,5vw,58px)}",
".wa-affiliate-frame.wa-design-panorama .wa-affiliate-copy h2,.wa-affiliate-frame.wa-design-panorama .wa-affiliate-copy p{color:#fff}",
".wa-affiliate-frame.wa-design-panorama .wa-affiliate-kicker{color:#f1e4c8}",
".wa-affiliate-frame.wa-design-panorama .wa-affiliate-tag{background:#ffffffdf;color:#343c32}",
".wa-affiliate-frame.wa-design-panorama .wa-affiliate-cta{background:#f4f0e6;color:#343c32!important}",
".wa-affiliate-frame.wa-design-strip .wa-affiliate-slide{grid-template-columns:1fr;min-height:0}",
".wa-affiliate-frame.wa-design-strip .wa-affiliate-visual{order:-1;min-height:220px;height:clamp(220px,30vw,340px)}",
".wa-affiliate-frame.wa-design-strip .wa-affiliate-visual img{position:absolute;min-height:100%;height:100%}",
".wa-affiliate-frame.wa-design-strip .wa-affiliate-copy{padding:22px clamp(22px,4vw,42px)}",
".wa-affiliate-frame.wa-design-editorial .wa-affiliate-slide{grid-template-columns:1.2fr .8fr}",
".wa-affiliate-frame.wa-design-editorial .wa-affiliate-copy{background:#f8f5ed}",
".wa-affiliate-frame.wa-design-editorial .wa-affiliate-visual{margin:16px 16px 16px 0;border-radius:16px;min-height:230px}",
".wa-affiliate-frame.wa-design-editorial .wa-affiliate-visual img{min-height:230px;border-radius:16px}",
".wa-affiliate-frame.wa-design-reverse .wa-affiliate-slide{grid-template-columns:.85fr 1.15fr}",
".wa-affiliate-frame.wa-design-reverse .wa-affiliate-copy{order:2}",
".wa-affiliate-frame.wa-design-reverse .wa-affiliate-visual{order:1}",
"@keyframes waAdFade{from{opacity:.75;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}",
"@media(max-width:650px){.wa-affiliate-wrap{width:92%;margin:16px auto 24px}.wa-affiliate-frame .wa-affiliate-slide,.wa-affiliate-frame.wa-design-editorial .wa-affiliate-slide,.wa-affiliate-frame.wa-design-reverse .wa-affiliate-slide{grid-template-columns:1fr;min-height:0}.wa-affiliate-frame .wa-affiliate-visual,.wa-affiliate-frame.wa-design-editorial .wa-affiliate-visual{order:-1;margin:0;border-radius:0;min-height:190px;height:190px}.wa-affiliate-frame .wa-affiliate-visual img,.wa-affiliate-frame.wa-design-editorial .wa-affiliate-visual img{position:absolute;height:100%;min-height:100%;border-radius:0}.wa-affiliate-frame .wa-affiliate-copy{order:2;padding:22px}.wa-affiliate-frame.wa-design-panorama .wa-affiliate-slide{min-height:390px}.wa-affiliate-frame.wa-design-panorama .wa-affiliate-copy{max-width:100%;min-height:390px;padding:24px;background:linear-gradient(90deg,#1e2b22d9,#1e2b2275)}.wa-affiliate-frame.wa-design-panorama .wa-affiliate-visual{position:absolute;inset:0;min-height:390px;height:100%}.wa-affiliate-frame.wa-design-panorama .wa-affiliate-visual img{min-height:390px}}",
"@media(prefers-reduced-motion:reduce){.wa-affiliate-slide.is-active{animation:none}.wa-affiliate-visual img,.wa-affiliate-cta{transition:none}}"
].join("\n");
if(!document.getElementById("wa-affiliate-styles")){const style=document.createElement("style");style.id="wa-affiliate-styles";style.textContent=css;document.head.appendChild(style);}
const path=location.pathname.split("/").pop()||"index.html";
const designs=["wa-design-split","wa-design-panorama","wa-design-strip","wa-design-editorial","wa-design-reverse"];
let hash=0;for(let i=0;i<path.length;i++)hash=(hash*31+path.charCodeAt(i))|0;
const design=designs[Math.abs(hash)%designs.length];
const existing=document.getElementById("affiliate-ad-slider");
if(existing){
 existing.classList.add("wa-affiliate-frame",design);
 existing.querySelectorAll(".ad-slide").forEach(function(slide){slide.classList.add("wa-affiliate-slide");const copy=slide.querySelector(".ad-copy");if(copy)copy.classList.add("wa-affiliate-copy");const visual=slide.querySelector(".ad-visual");if(visual)visual.classList.add("wa-affiliate-visual");});
 if(design==="wa-design-panorama")existing.querySelectorAll(".ad-copy h3").forEach(function(title){title.style.color="#fff";});
 const dots=Array.from(document.querySelectorAll(".ad-dot"));
 if(dots.length)dots[Math.floor(Math.random()*dots.length)].click();
 return;
}
if(document.querySelector("[data-wa-affiliate-widget]"))return;
const wrap=document.createElement("section");wrap.className="wa-affiliate-wrap";wrap.setAttribute("data-wa-affiliate-widget","");wrap.setAttribute("aria-label","Sponsored affiliate offers");
wrap.innerHTML='<div class="wa-affiliate-heading"><span>Featured offers</span><span>Sponsored · affiliate links</span></div><div class="wa-affiliate-frame '+design+'" role="region" aria-roledescription="carousel" aria-label="Featured affiliate offers"><div class="wa-affiliate-slides"></div></div><div class="wa-affiliate-controls"><button class="wa-affiliate-arrow" type="button" data-wa-prev aria-label="Previous offer">‹</button><div class="wa-affiliate-dots" role="group" aria-label="Choose an advert"></div><button class="wa-affiliate-arrow" type="button" data-wa-next aria-label="Next offer">›</button></div><p class="wa-affiliate-note">We may earn a commission from qualifying purchases at no extra cost to you.</p>';
const slides=wrap.querySelector(".wa-affiliate-slides"),dots=wrap.querySelector(".wa-affiliate-dots");
offers.forEach((o,i)=>{
 const article=document.createElement("article");article.className="wa-affiliate-slide";article.setAttribute("aria-hidden","true");
 article.innerHTML='<div class="wa-affiliate-copy"><span class="wa-affiliate-tag"></span><div class="wa-affiliate-kicker"></div><h2></h2><p></p><a class="wa-affiliate-cta" target="_blank" rel="sponsored nofollow noopener noreferrer"></a></div><a class="wa-affiliate-visual" target="_blank" rel="sponsored nofollow noopener noreferrer"><img loading="lazy"></a>';
 article.querySelector(".wa-affiliate-tag").textContent=o[1];article.querySelector(".wa-affiliate-kicker").textContent=o[0];article.querySelector("h2").textContent=o[2];article.querySelector("p").textContent=o[3];
 const cta=article.querySelector(".wa-affiliate-cta");cta.href=o[5];cta.textContent=o[4];
 const visual=article.querySelector(".wa-affiliate-visual");visual.href=o[5];visual.setAttribute("aria-label","Explore "+o[0]+" through our affiliate link");
 const img=article.querySelector("img");img.src=o[6];img.alt=o[7];img.loading="eager";
 slides.appendChild(article);
 const dot=document.createElement("button");dot.className="wa-affiliate-dot";dot.type="button";dot.dataset.go=String(i);dot.setAttribute("aria-label","Show "+o[0]+" advert");dot.setAttribute("aria-current","false");dots.appendChild(dot);
});
const pathName=location.pathname.split("/").pop()||"index.html";
if(pathName==="blogs.html"){
 const blogGrid=document.querySelector(".section .grid");
 if(blogGrid){
  const cards=Array.from(blogGrid.children);
  if(cards.length>3){
   const lowerGrid=blogGrid.cloneNode(false);
   cards.slice(3).forEach(card=>lowerGrid.appendChild(card));
   blogGrid.insertAdjacentElement("afterend",wrap);
   wrap.insertAdjacentElement("afterend",lowerGrid);
  }else{
   const section=blogGrid.closest(".section");
   if(section)section.insertAdjacentElement("afterend",wrap);
   else (document.querySelector("main")||document.body).appendChild(wrap);
  }
 }else{
  const hero=document.querySelector(".hero-image-strip")||document.querySelector(".hero");
  if(hero)hero.insertAdjacentElement("afterend",wrap);
  else (document.querySelector("main")||document.body).appendChild(wrap);
 }
}else{
 const main=document.querySelector("main")||document.body;
 const contentSections=Array.from(main.children).filter(el=>!["SCRIPT","STYLE"].includes(el.tagName)&&!el.matches("footer,.site-footer,.financial-ad-strip,[data-wa-financial-widget]"));
 if(contentSections.length>=3){
  contentSections[Math.floor(contentSections.length/2)-1].insertAdjacentElement("afterend",wrap);
 }else{
  const hero=main.querySelector(".hero");
  if(hero)hero.insertAdjacentElement("afterend",wrap);
  else main.insertAdjacentElement("afterbegin",wrap);
 }
}
const allSlides=Array.from(slides.children),allDots=Array.from(dots.children),reduce=window.matchMedia("(prefers-reduced-motion: reduce)");
let current=Math.floor(Math.random()*allSlides.length),timer=null;
function show(n){current=(n+allSlides.length)%allSlides.length;allSlides.forEach((s,i)=>{s.classList.toggle("is-active",i===current);s.setAttribute("aria-hidden",String(i!==current));});allDots.forEach((d,i)=>d.setAttribute("aria-current",String(i===current)));}
function stop(){if(timer){clearInterval(timer);timer=null;}}
function start(){stop();if(!reduce.matches&&!document.hidden)timer=setInterval(()=>show(current+1),7000);}
wrap.querySelector("[data-wa-prev]").addEventListener("click",()=>{show(current-1);start();});
wrap.querySelector("[data-wa-next]").addEventListener("click",()=>{show(current+1);start();});
allDots.forEach(d=>d.addEventListener("click",()=>{show(Number(d.dataset.go));start();}));
wrap.addEventListener("mouseenter",stop);wrap.addEventListener("mouseleave",start);wrap.addEventListener("focusin",stop);wrap.addEventListener("focusout",()=>{if(!wrap.contains(document.activeElement))start();});
document.addEventListener("visibilitychange",()=>{if(document.hidden)stop();else start();});reduce.addEventListener?.("change",start);
show(current);start();

/* Keep the financial-offers carousel separate and at the bottom of each product page. */
if(pathName!=="index.html"&&!document.querySelector("[data-wa-financial-widget]")&&!document.getElementById("financial-ad-slider")){
 const financialOffers=[
  ["LimeLoan","Advertisement · Personal finance","Explore the details before you decide.","Review the provider’s eligibility criteria, fees and repayment terms before submitting an application.","https://c.trackmytarget.com/?a=houb31&i=el31qe","https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85","Person reviewing financial paperwork and a calculator","View offer ↗"],
  ["Lulalend / Lula","Advertisement · Business funding","Looking into business funding?","Explore the provider’s business-funding information and check its current eligibility criteria, costs and repayment conditions.","https://c.trackmytarget.com/?a=yd9acf&i=el31qe","https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85","Small business owners reviewing plans at a desk","View offer ↗"],
  ["Boodle","Advertisement · Finance","Understand the terms first.","Read the offer information carefully and confirm the total cost, repayment schedule and eligibility requirements directly with the provider.","https://c.trackmytarget.com/?a=yde692&i=el31qe","https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85","Person reviewing a payment on a tablet","View offer ↗"],
  ["DebtBusters","Advertisement · Debt solutions","Explore debt-support options.","Learn about debt counselling and available support options. Check the service, fees and implications carefully before making a decision.","https://c.trackmytarget.com/?a=pje5i4&i=el31qe","https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85","Person reviewing paperwork and making a financial plan","View service ↗"]
 ];
 const finance=document.createElement("section");
 finance.className="wa-affiliate-wrap wa-financial-wrap";
 finance.setAttribute("data-wa-financial-widget","");
 finance.setAttribute("aria-label","Financial services and offers");
 finance.innerHTML='<div class="wa-affiliate-heading"><span>Financial services &amp; offers</span><span>Separate sponsored section</span></div><p class="wa-financial-intro">These advertisements are separate from Woelag’s wellness content. Review each provider’s eligibility requirements, fees, terms and conditions carefully before deciding whether to proceed.</p><div class="wa-affiliate-frame wa-financial-frame" role="region" aria-roledescription="carousel" aria-label="Sponsored financial services"><div class="wa-affiliate-slides"></div></div><div class="wa-affiliate-controls"><button class="wa-affiliate-arrow" type="button" data-fin-prev aria-label="Previous financial offer">‹</button><div class="wa-affiliate-dots" role="group" aria-label="Choose a financial advert"></div><button class="wa-affiliate-arrow" type="button" data-fin-next aria-label="Next financial offer">›</button></div><p class="wa-affiliate-note">Advertisement · Woelag may earn a commission if you follow these links. Woelag is not the lender or debt counsellor. Credit is subject to the provider’s assessment and terms; consider your ability to repay before applying.</p>';
 const finStyle=document.createElement("style");
 finStyle.textContent=".wa-financial-wrap{margin-top:42px;padding-top:28px;border-top:1px solid #e4dfd2}.wa-financial-intro{color:#657064;max-width:820px;line-height:1.6;margin:0 0 14px}.wa-financial-frame .wa-affiliate-slide{min-height:250px}.wa-financial-frame .wa-affiliate-copy{background:linear-gradient(135deg,#f8f4e9,#e8ece2)}.wa-financial-frame .wa-affiliate-visual{background:linear-gradient(135deg,#dce5d8,#c8d3c0)}.wa-financial-frame .wa-affiliate-slide:not(.is-active){display:none}.wa-financial-frame .wa-affiliate-slide.is-active{display:grid}";
 document.head.appendChild(finStyle);
 const finSlides=finance.querySelector(".wa-affiliate-slides"),finDots=finance.querySelector(".wa-affiliate-dots");
 financialOffers.forEach((o,i)=>{
  const article=document.createElement("article");article.className="wa-affiliate-slide";article.setAttribute("aria-hidden","true");
  article.innerHTML='<div class="wa-affiliate-copy"><span class="wa-affiliate-tag"></span><div class="wa-affiliate-kicker"></div><h2></h2><p></p><a class="wa-affiliate-cta" target="_blank" rel="sponsored nofollow noopener noreferrer"></a></div><a class="wa-affiliate-visual" target="_blank" rel="sponsored nofollow noopener noreferrer"><img loading="lazy"></a>';
  article.querySelector(".wa-affiliate-tag").textContent=o[1];article.querySelector(".wa-affiliate-kicker").textContent=o[0];article.querySelector("h2").textContent=o[2];article.querySelector("p").textContent=o[3];
  const cta=article.querySelector(".wa-affiliate-cta");cta.href=o[4];cta.textContent=o[7];
  const visual=article.querySelector(".wa-affiliate-visual");visual.href=o[4];visual.setAttribute("aria-label","View "+o[0]+" offer through affiliate link");
  const img=article.querySelector("img");img.src=o[5];img.alt=o[6];img.loading="lazy";
  finSlides.appendChild(article);
  const dot=document.createElement("button");dot.className="wa-affiliate-dot";dot.type="button";dot.dataset.go=String(i);dot.setAttribute("aria-label","Show "+o[0]+" advert");dot.setAttribute("aria-current","false");finDots.appendChild(dot);
 });
 const financialItems=Array.from(finSlides.children),financialDots=Array.from(finDots.children);
 let financialCurrent=0,financialTimer=null;
 function showFinancial(n){financialCurrent=(n+financialItems.length)%financialItems.length;financialItems.forEach((slide,i)=>{slide.classList.toggle("is-active",i===financialCurrent);slide.setAttribute("aria-hidden",String(i!==financialCurrent));});financialDots.forEach((dot,i)=>dot.setAttribute("aria-current",String(i===financialCurrent)));}
 function stopFinancial(){if(financialTimer){clearInterval(financialTimer);financialTimer=null;}}
 function startFinancial(){stopFinancial();if(!reduce.matches&&!document.hidden)financialTimer=setInterval(()=>showFinancial(financialCurrent+1),7500);}
 finance.querySelector("[data-fin-prev]").addEventListener("click",()=>{showFinancial(financialCurrent-1);startFinancial();});
 finance.querySelector("[data-fin-next]").addEventListener("click",()=>{showFinancial(financialCurrent+1);startFinancial();});
 financialDots.forEach(dot=>dot.addEventListener("click",()=>{showFinancial(Number(dot.dataset.go));startFinancial();}));
 finance.addEventListener("mouseenter",stopFinancial);finance.addEventListener("mouseleave",startFinancial);finance.addEventListener("focusin",stopFinancial);finance.addEventListener("focusout",()=>{if(!finance.contains(document.activeElement))startFinancial();});
 document.addEventListener("visibilitychange",()=>{if(document.hidden)stopFinancial();else startFinancial();});
 showFinancial(0);startFinancial();
 const footer=document.querySelector("footer,.site-footer");
 if(footer)footer.insertAdjacentElement("beforebegin",finance);
 else (document.querySelector("main")||document.body).appendChild(finance);
}
})();