var E=function(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
// ===== YOUR LINKS: change these first =====
var GH='https://github.com/AtinshayAwasthi',LI='https://www.linkedin.com/in/atinshay-awasthi',ML='mailto:atinshayawasthi@gmail.com';
function A(u,t){return '<a href="'+u+'" target="_blank" rel="noopener noreferrer">'+t+'</a>'}
function tags(a){return a.map(function(t){return '<span class="tag">'+E(t)+'</span>'}).join('')}
function ul(a){return '<ul>'+a.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul>'}

// ===== YOUR CONTENT: edit about, skills, projects, experience, education, achievements, contact =====
var S={
about:function(){return '<h3>About</h3>Software Engineer (B.E. CSE, DevOps, 2026) who builds and deploys full-stack apps. I design REST APIs with Node.js and MongoDB, ship them with Docker, Kubernetes and AWS, and have solved 150+ DSA problems in C++. Two internships (Full Stack and DevOps), 10+ hackathons, GATE 2026 (CS) qualified.'},
skills:function(){return '<h3>Web</h3>'+tags(['HTML','CSS','JavaScript','React.js','Node.js','Express.js','REST APIs','Microservices'])+
'<h3>Databases</h3>'+tags(['MongoDB','Supabase','SQL'])+
'<h3>DevOps & Cloud</h3>'+tags(['Linux','Docker','Kubernetes','AWS EC2','S3','IAM','VPC','CloudWatch','EKS'])+
'<h3>Core</h3>'+tags(['C++','DSA','OOP','SDLC','Computer Networks','Operating Systems','Git','GitHub'])},
projects:function(){return '<h3>Projects</h3>'+P.f()+P.e()+'<br>All code: '+A(GH,'github.com/AtinshayAwasthi')},
experience:function(){return '<h3>DevOps Summer Intern, Celebal Technologies</h3><span class="dim">Remote, Jun 2025 to Aug 2025</span>'+
ul(['Completed structured DevOps and cloud modules, labs and assignments.','Built a capstone project on application deployment and automation.','Hands-on with cloud infrastructure and Linux.'])+TH(['c1'],'Internship certificate (tap to enlarge)')+
'<h3>Full Stack Developer Intern, Kraf Technologies</h3><span class="dim">Remote, Apr 2025 to Jun 2025</span>'+
ul(['Worked on frontend and backend of the Krafcool production website.','Built and improved features under senior developers, following the SDLC.','Debugged issues and improved site performance.'])+TH(['c2'],'Internship certificate (tap to enlarge)')},
education:function(){return '<h3>Chandigarh University, Punjab</h3>B.E. Computer Science Engineering (DevOps)<br><span class="dim">2022 to 2026, CGPA 7.67</span>'},
achievements:function(){return '<h3>Achievements</h3>'+ul(['Qualified GATE 2026 (CS)','Participated in 10+ hackathons','Solved 150+ DSA problems'])+'<h3>Hackathon moments</h3>'+TH(['hk3','hk2','hk1','hk4','hk5'],'Hack-O-Octo 2.0 and Kraf Think 2025 (tap to enlarge)')},
contact:function(){return '<h3>Contact</h3>'+ul(['Email: '+A(ML,'atinshayawasthi@gmail.com'),'Phone: <a href="tel:+918827517175">+91 8827517175</a>','LinkedIn: '+A(LI,'linkedin.com/in/atinshay-awasthi'),'GitHub: '+A(GH,'github.com/AtinshayAwasthi')])+'<h3>On LinkedIn</h3><a class="shot sm" href="'+LI+'" target="_blank" rel="noopener noreferrer"><img src="'+G.li.s+'" alt="Atinshay Awasthi LinkedIn profile"></a>'+CF()}
};
var ORDER=['about','skills','projects','experience','education','achievements','contact'];

var term=document.getElementById('term');
var hist=[],hi=0;
function line(html,cls){var d=document.createElement('div');d.className=cls||'ln';d.innerHTML=html;term.appendChild(d);return d}
function out(html){var d=line(html,'out');if(cmdRow&&cmdRow.querySelector('input'))term.insertBefore(d,cmdRow)}
var cmdRow;
function prompt(){
  cmdRow=document.createElement('div');cmdRow.className='cmd';
  cmdRow.innerHTML='<span class="p">guest@atinshay:~$</span><input id="in" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Type a command">';
  term.appendChild(cmdRow);
  var inp=cmdRow.querySelector('input');
  inp.addEventListener('keydown',onKey);
  inp.focus({preventScroll:true});
  term.scrollTop=term.scrollHeight;
}
function help(){return '<h3>Commands</h3>'+ul(ORDER.map(function(c){return '<b>'+c+'</b>'}).concat(['<b>resume</b> : recruiter view (plain layout)','<b>download</b> : my resume as a PDF','<b>deploy</b> : watch my CI/CD pipeline ship me to your team','<b>neofetch</b> : quick system info','<b>theme</b> : switch light/dark','<b>clear</b> : clean the screen']))+'<span class="dim">Tip: Tab autocompletes, Up arrow repeats. Or tap a button below.</span>'}
function run(raw){
  var c=raw.trim().toLowerCase();
  var cmdLine=cmdRow.querySelector('input');
  cmdRow.innerHTML='<span class="p">guest@atinshay:~$</span> '+E(raw);
  if(c){hist.push(raw);hi=hist.length}
  if(!c){}
  else if(c==='clear'){term.innerHTML=''}
  else if(c==='help'||c==='?'){out(help())}
  else if(S[c]){out(S[c]())}
  else if(c==='resume'||c==='recruiter'){setRV(true)}
  else if(c==='theme'){toggleTheme()}
  else if(c==='download'){react('download');dl().then(prompt);return}
    else if(c==='deploy'){react('deploy');deploy();return}
  else if(c==='neofetch'){out(nf())}
  else if(c==='whoami'){out('Atinshay Awasthi, Full Stack & DevOps engineer. Fresher, ready to ship.')}
  else if(c==='ls'){out(ORDER.map(function(x){return x}).join('&nbsp;&nbsp;'))}
  else if(c.indexOf('sudo')===0){out('<span class="p">Permission granted.</span> Offer letter loading... just email me: '+A(ML,'atinshayawasthi@gmail.com'))}
  else{out('command not found: <b>'+E(c)+'</b>. Type <b>help</b> to see what works.')}
  if(c)react(c);prompt();
}
function onKey(e){
  var inp=e.target;
  if(e.key==='Enter'){run(inp.value)}
  else if(e.key==='ArrowUp'){if(hi>0){hi--;inp.value=hist[hi]}e.preventDefault()}
  else if(e.key==='ArrowDown'){if(hi<hist.length-1){hi++;inp.value=hist[hi]}else{hi=hist.length;inp.value=''}e.preventDefault()}
  else if(e.key==='Tab'){
    e.preventDefault();var v=inp.value.toLowerCase();if(!v)return;
    var all=ORDER.concat(['help','resume','theme','clear','whoami','ls','deploy','neofetch','download']);
    var m=all.filter(function(x){return x.indexOf(v)===0});if(m.length===1)inp.value=m[0];
  }
}
// quick command buttons
var chips=document.getElementById('chips');
ORDER.concat(['deploy','download','help']).forEach(function(c){
  var b=document.createElement('button');b.type='button';b.textContent=c;
  b.onclick=function(){if(document.body.classList.contains('rv'))return;var i=cmdRow&&cmdRow.querySelector('input');if(i){i.value=c;run(c)}};
  chips.appendChild(b);
});
// recruiter view
function buildPlain(){
  var h='<h1>Atinshay Awasthi</h1><div class="dim">Full Stack & DevOps Engineer · '+A(ML,'atinshayawasthi@gmail.com')+' · '+A(LI,'LinkedIn')+' · '+A(GH,'GitHub')+'</div>';
  ['about','projects','experience','skills','education','achievements','contact'].forEach(function(k){
    var t=S[k]().replace(/^<h3>[^<]*<\/h3>/,'');
    h+='<h2>'+k.charAt(0).toUpperCase()+k.slice(1)+'</h2>'+t;
  });
  document.getElementById('plainIn').innerHTML=h;
}
var rvBtn=document.getElementById('rv');
function setRV(on){
  document.body.classList.toggle('rv',on);
  rvBtn.setAttribute('aria-pressed',on);
  rvBtn.textContent=on?'Terminal view':'Recruiter view';
  if(on)buildPlain();else{var i=cmdRow&&cmdRow.querySelector('input');if(i)i.focus()}
}
rvBtn.onclick=function(){setRV(!document.body.classList.contains('rv'))};
function toggleTheme(){
  var r=document.documentElement,dark=r.getAttribute('data-theme')==='dark'||(!r.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme: dark)').matches);
  r.setAttribute('data-theme',dark?'light':'dark');
}
document.getElementById('th').onclick=toggleTheme;
term.addEventListener('click',function(e){if(e.target.closest('form,a'))return;var i=cmdRow&&cmdRow.querySelector('input');if(i&&!getSelection().toString())i.focus({preventScroll:true})});


var FU='https://findit-lost-found.vercel.app/',EU='https://effisphere.vercel.app/';
// ===== GALLERY: add a photo to assets/img and a line here (s = file, c = caption) =====
var G={
 "hk3": {
  "s": "assets/img/hk3.webp",
  "c": "Hack-O-Octo 2.0, Chandigarh University"
 },
 "hk2": {
  "s": "assets/img/hk2.webp",
  "c": "Hack-O-Octo 2.0, Chandigarh University",
  "p": "50% 45%"
 },
 "hk1": {
  "s": "assets/img/hk1.webp",
  "c": "Team presentation at Hack-O-Octo 2.0"
 },
 "hk4": {
  "s": "assets/img/hk4.webp",
  "c": "Working session at a hackathon, Chandigarh University"
 },
 "hk5": {
  "s": "assets/img/hk5.webp",
  "c": "Kraf Think 2025 Hackathon"
 },
 "c1": {
  "s": "assets/img/c1.webp",
  "c": "Internship certificate, Celebal Technologies (DevOps)",
  "p": "top"
 },
 "c2": {
  "s": "assets/img/c2.webp",
  "c": "Internship certificate, Kraf Technologies (Full Stack)",
  "p": "50% 25%"
 },
 "li": {
  "s": "assets/img/li.webp",
  "c": "LinkedIn profile"
 }
};
function TH(a,l){return '<span class="dim">'+l+'</span><div class="thumbs">'+a.map(function(k){var g=G[k];return '<button type="button" class="th" data-k="'+k+'" aria-label="View: '+g.c+'"><img src="'+g.s+'" alt="'+g.c+'" style="object-position:'+(g.p||'center')+'"></button>'}).join('')+'</div>'}
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.th'),lb=document.getElementById('lb');
if(b){var g=G[b.dataset.k],im=lb.querySelector('img');im.src=g.s;im.alt=g.c;lb.querySelector('p').textContent=g.c;lb.hidden=false;document.getElementById('lbx').focus();return}
if(e.target.id==='lb'||e.target.id==='lbx')lb.hidden=true});
addEventListener('keydown',function(e){if(e.key==='Escape')document.getElementById('lb').hidden=true});
function SH(s,u,d,a){return '<a class="shot" href="'+u+'" target="_blank" rel="noopener noreferrer"><div class="bf"><i></i><i></i><i></i><span>'+d+'</span><em>LIVE</em></div><img src="'+s+'" alt="'+a+'"></a>'}
addEventListener('pointermove',function(e){var s=e.target.closest&&e.target.closest('.shot');if(s){var b=s.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;s.style.transform='perspective(800px) rotateY('+(x*8)+'deg) rotateX('+(-y*8)+'deg) scale(1.02)'}});
document.addEventListener('pointerout',function(e){var s=e.target.closest&&e.target.closest('.shot');if(s)s.style.transform=''});
function scr(el,t,cb){var n=0,g='!<>-_[]{}=+*^?#01',id=setInterval(function(){n+=.6;el.textContent=t.split('').map(function(c,i){return c===' '||i<n?c:g[Math.floor(Math.random()*g.length)]}).join('');if(n>=t.length){clearInterval(id);el.textContent=t;if(cb)cb()}},35)}
function CF(){return '<h3>Send me a message</h3><form class="cf"><input name="n" placeholder="Your name" required aria-label="Your name"><input name="e" type="email" placeholder="Your email" required aria-label="Your email"><textarea name="m" rows="4" placeholder="Your message" required aria-label="Your message"></textarea><button type="submit">Send message</button><div class="cfs dim" role="status"></div></form>'}
document.addEventListener('submit',function(e){var f=e.target;if(!f.classList.contains('cf'))return;e.preventDefault();var d=new FormData(f);
var u=ML+'?subject='+encodeURIComponent('Portfolio message from '+d.get('n'))+'&body='+encodeURIComponent(d.get('m')+'\n\nFrom: '+d.get('n')+' ('+d.get('e')+')');
window.open(u,'_blank');f.querySelector('.cfs').textContent='Opening your email app with the message ready. If nothing opens, write to atinshayawasthi@gmail.com.'});
var P={
f:function(){return '<h3>FindIt: Lost & Found Web Platform</h3>'+SH('assets/img/findit.webp',FU,'findit-lost-found.vercel.app','FindIt home page')+'One searchable place where people report lost items, browse found ones and recover them.<h3>What it does</h3>'+ul(['Report, browse and recover items','JWT login with registration, protected routes and encrypted passwords','Search and filter by category, location, date range and keyword','Image uploads through Cloudinary','Responsive UI with Tailwind CSS and Shadcn/UI'])+'<h3>How it fits together</h3>React front end, then an Express REST API, then MongoDB. Images live on Cloudinary and JWT guards the private routes.<br>'+tags(['React','Node.js','Express.js','MongoDB','Tailwind','Cloudinary'])+'<br>'+A(FU,'Open live demo')+' | '+A(GH,'Code on GitHub')},
e:function(){return '<h3>EffiSphere: Employee Monitoring Platform</h3>'+SH('assets/img/effisphere.webp',EU,'effisphere.vercel.app','EffiSphere login page')+'Attendance and monitoring for hybrid and remote teams, built around GPS geofencing.<h3>What it does</h3>'+ul(['Automatic check-in and check-out inside a 200 m GPS geofence, to stop time theft','Separate admin and employee dashboards with role-based access','Real-time location tracking, heatmaps and analytics','Designed to scale for hybrid and remote workforces'])+'<h3>How it fits together</h3>React front end on Supabase, with the browser Geolocation API feeding the geofence checks.<br>'+tags(['React','Supabase','Tailwind','Geolocation API'])+'<br>'+A(EU,'Open live demo')+' | '+A(GH,'Code on GitHub')}
};
function dl(){var a=document.createElement('a');a.href='assets/Atinshay_Awasthi_Resume.pdf';a.download='Atinshay_Awasthi_Resume.pdf';document.body.appendChild(a);a.click();a.remove();out('<span class="p">Resume download started.</span>');return Promise.resolve()}
document.getElementById('dl').onclick=dl;

// living background: skills as a network that reacts to the pointer
(function(){var c=document.getElementById('bg'),x=c.getContext('2d'),W,H,N=[],m={x:-999,y:-999},words=['React','Node','MongoDB','Docker','K8s','AWS','Linux','C++','Git','SQL','JWT','EKS'];
function rs(){W=c.width=innerWidth;H=c.height=innerHeight}rs();addEventListener('resize',rs);
for(var i=0;i<46;i++)N.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,w:i<words.length?words[i]:''});
addEventListener('pointermove',function(e){m.x=e.clientX;m.y=e.clientY});
function f(){x.clearRect(0,0,W,H);var cl=getComputedStyle(document.documentElement).getPropertyValue('--cyan').trim();x.strokeStyle=cl;x.fillStyle=cl;x.font='12px monospace';
N.forEach(function(a,i){a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1;
var dx=a.x-m.x,dy=a.y-m.y,d=Math.hypot(dx,dy);if(d<120&&d>0){a.x+=dx/d*1.6;a.y+=dy/d*1.6}
x.globalAlpha=.5;x.beginPath();x.arc(a.x,a.y,2,0,6.3);x.fill();if(a.w){x.globalAlpha=.5;x.fillText(a.w,a.x+6,a.y-6)}
for(var j=i+1;j<N.length;j++){var b=N[j],e=Math.hypot(a.x-b.x,a.y-b.y);if(e<130){x.globalAlpha=(1-e/130)*.25;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}});
requestAnimationFrame(f)}
if(!matchMedia('(prefers-reduced-motion: reduce)').matches)f()})();

function nf(){return '<b style="color:var(--amber)">atinshay</b>@portfolio<br><span class="dim">----------------------</span><br><b>Role</b>: Full Stack / DevOps Engineer<br><b>Uni</b>: Chandigarh University, B.E. CSE 2026<br><b>Stack</b>: React, Node, Express, MongoDB, Supabase<br><b>Cloud</b>: Docker, Kubernetes, AWS (EKS, EC2, S3)<br><b>Lang</b>: JavaScript, C++, SQL<br><b>Uptime</b>: 2 internships, 10+ hackathons, 150+ DSA<br><b>Status</b>: <span class="p">Open to work</span>'}
function deploy(){var st=['Checking out <b>main</b>','npm ci && npm test: <span class="p">all passed</span>','docker build -t atinshay/portfolio .','docker push atinshay/portfolio:latest','kubectl apply -f k8s/','kubectl rollout status deploy/atinshay','Health check: 200 OK'],i=0;
var box=line('<b>pipeline #2026 started</b>','out');
(function n(){if(i<st.length){box.insertAdjacentHTML('beforeend','<br><span class="p">✔</span> '+st[i]);i++;term.scrollTop=term.scrollHeight;setTimeout(n,550)}else{box.insertAdjacentHTML('beforeend','<br><br><b class="p">Deployed: a new engineer is live on your team.</b> '+A(ML,'Say hi'));prompt()}})()}

function typeTo(el,t,cb){var i=0;(function n(){el.textContent=t.slice(0,++i);if(i<t.length)setTimeout(n,26);else if(cb)cb()})()}
function intro(){var s=line('','ln dim');typeTo(s,'$ ssh guest@atinshay.dev',function(){line('<span class="p">Connection established.</span>');intro2()})}
function intro2(){var d=line('','ln');d.style.cssText='font-size:1.6em;font-weight:700;color:var(--amber)';
scr(d,"Hi, I'm Atinshay Awasthi.",function(){var e=line('','ln dim');typeTo(e,'I build full-stack apps, then ship them with Docker, Kubernetes and AWS.',function(){out(nf());out('Type <b>projects</b> to see what I built, <b>deploy</b> to watch my pipeline run, or <b>help</b> for everything else.');prompt();greet()})})}

// Byte, the companion robot
var byteEl=document.getElementById('byte'),bb=document.getElementById('bb'),bot=document.getElementById('bot'),arm=document.getElementById('arm'),eyes=document.getElementById('eyes'),mo=document.getElementById('mo'),bOff=false,bt1,mt,idle,VIS={},tn=0,ck=0;
var M1='M27 37 Q32 40 37 37',M2='M28 36 Q32 43 36 36';
var R={about:"That is the short version of the story.",skills:"React and Node on the front, Docker and Kubernetes on the back.",projects:"Both projects are live. Tap a screenshot to open them.",experience:"Two internships. The certificates are tappable.",education:"B.E. CSE, class of 2026, CGPA 7.67.",achievements:"Peek at the hackathon photos below.",contact:"Say hi with the form. It opens your email app.",deploy:"Pipeline time. Watch it go green.",download:"Fetching the resume for you.",neofetch:"Fancy system info, right?",theme:"Lights switched.",clear:"Fresh screen.",help:"Start with projects. It is my favorite.",ls:"Same list, less typing.",whoami:"That is my boss.",sudo:"Access granted. I will vouch for him.",resume:"Recruiter view on. I will stay quiet here."};
var TIPS=["Fun fact: 10+ hackathons and counting.","He qualified GATE 2026 in CS.","Try deploy. It is my favorite command.","He has solved 150+ DSA problems in C++.","Both projects are live. Open them from projects.","Psst. He is open to work."];
function say(s){if(bOff||document.body.classList.contains('rv'))return;clearTimeout(bt1);clearInterval(mt);bb.textContent=s;bb.classList.add('on');arm.classList.add('wv');var n=0;mt=setInterval(function(){mo.setAttribute('d',n++%2?M1:M2);if(n>Math.min(s.length,36)){clearInterval(mt);mo.setAttribute('d',M1)}},110);bt1=setTimeout(function(){bb.classList.remove('on');arm.classList.remove('wv')},Math.max(4000,s.length*55))}
function react(c){var k=c.indexOf('sudo')===0?'sudo':c;VIS[k]=1;say(R[k]||"Hmm, I do not know that one. Type help.")}
function nudge(){clearTimeout(idle);idle=setTimeout(function(){var q=ORDER.concat(['deploy']).filter(function(k){return !VIS[k]});say(q.length?"Psst. Have you tried "+q[0]+" yet?":"You have seen it all. Want to say hi? Try the contact form.");nudge()},30000)}
function greet(){byteEl.classList.add('in');pos();setTimeout(function(){say("Hi! I am Byte, Atinshay's robot. Tap me anytime. Type projects to start.")},700);nudge()}
function pos(){byteEl.style.bottom=(document.getElementById('chips').offsetHeight+12)+'px'}
addEventListener('resize',pos);
addEventListener('pointermove',function(e){var r=bot.getBoundingClientRect(),dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2),d=Math.hypot(dx,dy)||1,k=Math.min(d/80,1)*2.6;eyes.setAttribute('transform','translate('+(dx/d*k)+' '+(dy/d*k*.8)+')')});
(function bl(){var es=document.querySelectorAll('#eyes .eye');es.forEach(function(x){x.classList.add('bk')});setTimeout(function(){es.forEach(function(x){x.classList.remove('bk')})},130);setTimeout(bl,3200+Math.random()*2600)})();
['keydown','pointerdown'].forEach(function(v){addEventListener(v,nudge)});
bot.onclick=function(){ck++;if(ck%6===0){bot.classList.add('sp');setTimeout(function(){bot.classList.remove('sp')},900);say("Whoa, dizzy! Okay okay.");return}say(TIPS[tn++%TIPS.length])};
document.getElementById('bt').onclick=function(){bOff=!bOff;byteEl.style.display=bOff?'none':'';this.textContent=bOff?'Byte: off':'Byte: on';this.setAttribute('aria-pressed',!bOff)};

var BL=['[ OK ] Booting atinshay-os 2026.1 (B.E. CSE, DevOps)','[ OK ] Mounting /dev/skills: React, Node, MongoDB, C++','[ OK ] Starting docker.service','[ OK ] Pulling image atinshay/full-stack:latest','[ OK ] kubectl rollout status deployment/portfolio','[ OK ] Connecting to AWS EKS cluster ... done','[ OK ] Loading 2 internships, 10+ hackathons, 150+ DSA problems','[WARN] Humor module enabled','Ready. Welcome.'];
function boot(){var bo=document.getElementById('boot'),bl=document.getElementById('bl'),pb=document.getElementById('pb'),i=0;
function done(){if(bo.dataset.d)return;bo.dataset.d=1;bo.classList.add('off');setTimeout(function(){bo.remove()},700);intro()}
bo.onclick=done;addEventListener('keydown',done,{once:true});
(function s(){if(bo.dataset.d)return;if(i<BL.length){var d=document.createElement('div');d.textContent=BL[i];if(BL[i].indexOf('[WARN]')===0)d.className='w';bl.appendChild(d);i++;pb.style.width=(i/BL.length*100)+'%';setTimeout(s,380)}else setTimeout(done,600)})()}
if(matchMedia('(prefers-reduced-motion: reduce)').matches){document.getElementById('boot').remove();intro()}else boot();
