const header=document.getElementById('header');
  addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>40),{passive:true});
  const btn=document.getElementById('menuBtn'),links=document.getElementById('navlinks');
  btn.addEventListener('click',()=>links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
  const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  const ptabs=document.querySelectorAll('.prod-tab'),prods=document.querySelectorAll('.prod');
  ptabs.forEach(t=>t.addEventListener('click',()=>{ptabs.forEach(x=>x.classList.remove('active'));t.classList.add('active');const c=t.dataset.cat;prods.forEach(p=>{p.style.display=(c==='todos'||p.dataset.cat===c)?'':'none';});}));
