
// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{threshold:0.18});

document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));

function openBooking(){document.getElementById('bookingModal').style.display='flex';document.getElementById('bookingModal').setAttribute('aria-hidden','false');}
function closeBooking(){document.getElementById('bookingModal').style.display='none';document.getElementById('bookingModal').setAttribute('aria-hidden','true');}

// floating shapes
for(let i=0;i<6;i++){
  const s=document.createElement('div');
  s.className='floating-shape';
  s.style.left=(Math.random()*100)+'%';
  s.style.background='rgba(26,115,232,0.06)';
  s.style.animationDuration=(12+Math.random()*8)+'s';
  document.body.appendChild(s);
}
