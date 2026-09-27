(function () {
  const page = document.body.dataset.page || '';
  const navigation = [
    ['Home', 'HOME.html', 'home'], ['About', 'ABOUT.html', 'about'], ['Products', 'ALBUMS.HTML', 'products'],
    ['Videos', 'VIDEOS.HTML', 'videos'], ['Events', 'EVENTS.HTML', 'events'], ['Gallery', 'GALLERY.HTML', 'gallery'], ['Contact', 'CONTACT.HTML', 'contact']
  ];
  const links = navigation.map(([label, href, key]) => `<a class="block border-b border-white/10 py-3 text-xs font-bold uppercase tracking-[.12em] transition lg:border-0 lg:p-0 ${page === key ? 'text-signal' : 'text-white/70 hover:text-white'}" href="${href}">${label}</a>`).join('');
  document.getElementById('siteHeader').innerHTML = `
    <div class="absolute inset-x-0 top-0 z-20 flex h-20 items-center border-b border-white/20 px-5 text-white md:h-24 md:px-10">
      <a href="HOME.html" class="w-36 shrink-0" aria-label="SK Media Lighting home"><img src="images/Logo.png" alt="SK Media Lighting" class="h-auto w-full object-contain"></a>
      <button id="menuButton" class="ml-auto inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.14em] lg:hidden" aria-expanded="false" aria-controls="siteNav"><span class="grid gap-1"><i class="h-px w-6 bg-white"></i><i class="h-px w-6 bg-white"></i></span> Menu</button>
      <nav id="siteNav" class="absolute left-0 right-0 top-20 hidden border-b border-white/10 bg-ink px-5 py-5 lg:static lg:ml-auto lg:mr-auto lg:flex lg:items-center lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0" aria-label="Main navigation">${links}</nav>
      <a href="CONTACT.HTML" class="ml-6 hidden items-center gap-3 border border-white/50 px-4 py-3 text-[10px] font-extrabold uppercase tracking-[.1em] transition hover:-translate-y-0.5 hover:bg-white hover:text-ink lg:inline-flex">Start a project <span class="text-base text-signal">↗</span></a>
    </div>`;
  const footer = document.getElementById('siteFooter');
  if (footer) footer.innerHTML = `<div class="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-[1fr_auto]"><div><a href="HOME.html" class="text-3xl font-extrabold tracking-[-.09em]">SK<span class="text-signal">•</span>MEDIA</a><p class="mt-2 text-[10px] uppercase tracking-[.1em] text-white/55">High performance &amp; brightness.</p></div><div class="flex gap-6 text-[10px] font-bold uppercase tracking-[.1em]"><a class="hover:text-signal" href="GALLERY.HTML">Gallery</a><a class="hover:text-signal" href="CONTACT.HTML">Contact</a></div><p class="border-t border-white/15 pt-6 text-[10px] uppercase tracking-[.1em] text-white/55 md:col-span-2">© <span id="year"></span> SK Media Lighting</p></div>`;
  const button = document.getElementById('menuButton');
  const nav = document.getElementById('siteNav');
  button.addEventListener('click', () => { const open = button.getAttribute('aria-expanded') === 'true'; button.setAttribute('aria-expanded', String(!open)); nav.classList.toggle('hidden', open); });
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}());
