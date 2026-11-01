(function(){
var t=document.querySelector('.toggle'),m=document.getElementById('menu');
if(t&&m){t.addEventListener('click',function(){var o=m.classList.toggle('open');t.setAttribute('aria-expanded',o)});
m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('open');t.setAttribute('aria-expanded','false')}});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&m.classList.contains('open')){m.classList.remove('open');t.setAttribute('aria-expanded','false');t.focus()}})}
var f=document.getElementById('enquiry');
if(f){f.addEventListener('submit',function(e){e.preventDefault();
var g=function(id){return f.elements[id].value.trim()};
var body='Name: '+g('name')+'\nCompany: '+g('company')+'\nEmail: '+g('email')+'\nPhone: '+g('phone')+'\n\nWhat I am looking to achieve:\n'+g('goal')+'\n\nMy challenge:\n'+g('challenge');
window.location.href='mailto:info@reforbix.com?subject='+encodeURIComponent('Enquiry from '+(g('name')||'website'))+'&body='+encodeURIComponent(body)})}
var links=[].slice.call(document.querySelectorAll('.menu a[href^="#"]'));
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){links.forEach(function(a){a.removeAttribute('aria-current')});var a=document.querySelector('.menu a[href="#'+en.target.id+'"]');if(a)a.setAttribute('aria-current','true')}})},{rootMargin:'-40% 0px -55% 0px'});
links.forEach(function(a){var s=document.querySelector(a.getAttribute('href'));if(s)io.observe(s)})}
})();
