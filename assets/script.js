// Mobile nav toggle and smooth anchor scrolling
// Use this file to update menu open/close behavior or to add additional page interactions.
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
      // toggle aria-expanded for accessibility state
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
    });
  }

  // Smooth scroll for internal anchors; update if you want to add custom offset behavior
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
