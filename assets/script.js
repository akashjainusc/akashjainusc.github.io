// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('mobile-menu-btn');
  const panel = document.getElementById('mobile-panel');
  const open = document.getElementById('menu-open');
  const close = document.getElementById('menu-close');
  if(btn && panel){
    btn.addEventListener('click', ()=>{
      const hidden = panel.classList.toggle('hidden');
      open.classList.toggle('hidden');
      close.classList.toggle('hidden');
      // toggle aria-expanded
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
    });
  }

  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href && href.startsWith('#')){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
        // close mobile after click
        if(panel && !panel.classList.contains('hidden')){
          panel.classList.add('hidden');
          open.classList.remove('hidden');
          close.classList.add('hidden');
        }
      }
    });
  });
});
