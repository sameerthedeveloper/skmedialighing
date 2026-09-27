'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  ['Home', '/'], ['About', '/about'], ['Products', '/products'], ['Videos', '/videos'],
  ['Events', '/events'], ['Gallery', '/gallery'], ['Contact', '/contact']
];

export function Header({ active = '' }) {
  const [open, setOpen] = useState(false);
  return <header className="absolute inset-x-0 top-0 z-20 flex h-20 items-center border-b border-white/20 px-5 text-white md:h-24 md:px-10">
    <Link href="/" className="w-36 shrink-0" aria-label="SK Media Lighting home"><img src="/images/Logo.png" alt="SK Media Lighting" className="h-auto w-full" /></Link>
    <button onClick={() => setOpen(!open)} className="ml-auto inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.14em] lg:hidden" aria-expanded={open} aria-controls="site-nav"><span className="grid gap-1"><i className="h-px w-6 bg-white" /><i className="h-px w-6 bg-white" /></span>Menu</button>
    <nav id="site-nav" className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-20 flex-col border-b border-white/10 bg-ink px-5 py-5 lg:static lg:ml-auto lg:mr-auto lg:flex lg:flex-row lg:items-center lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0`}>
      {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className={`border-b border-white/10 py-3 text-xs font-bold uppercase tracking-[.12em] transition lg:border-0 lg:p-0 ${active === href ? 'text-signal' : 'text-white/70 hover:text-white'}`}>{label}</Link>)}
    </nav>
    <Link href="/contact" className="ml-6 hidden items-center gap-3 border border-white/50 px-4 py-3 text-[10px] font-extrabold uppercase tracking-[.1em] transition hover:-translate-y-0.5 hover:bg-white hover:text-ink lg:inline-flex">Start a project <span className="text-base text-signal">↗</span></Link>
  </header>;
}

export function Footer() {
  return <footer className="bg-ink px-6 py-12 text-white md:px-12 xl:px-28"><div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-[1fr_auto]"><div><Link href="/" className="text-3xl font-extrabold tracking-[-.09em]">SK<span className="text-signal">•</span>MEDIA</Link><p className="mt-2 text-[10px] uppercase tracking-[.1em] text-white/55">High performance &amp; brightness.</p></div><div className="flex gap-6 text-[10px] font-bold uppercase tracking-[.1em]"><Link className="hover:text-signal" href="/gallery">Gallery</Link><Link className="hover:text-signal" href="/contact">Contact</Link></div><p className="border-t border-white/15 pt-6 text-[10px] uppercase tracking-[.1em] text-white/55 md:col-span-2">© {new Date().getFullYear()} SK Media Lighting</p></div></footer>;
}

export function Eyebrow({ children, dark = false }) {
  return <p className={`mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.13em] ${dark ? 'text-zinc-500' : ''}`}><span className="h-px w-7 bg-current" />{children}</p>;
}

export function PageHero({ active, eyebrow, title, image = '/images/generated/stage-hero.png' }) {
  return <><Header active={active} /><section className="relative isolate overflow-hidden bg-ink px-6 pb-20 pt-40 text-white md:px-12 md:pb-28 md:pt-48 xl:px-28"><img src={image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" /><div className="absolute inset-0 -z-10 bg-black/45" /><div className="mx-auto max-w-[1440px]"><Eyebrow>{eyebrow}</Eyebrow><h1 className="text-[clamp(3.7rem,8vw,8.2rem)] font-bold leading-[.9] tracking-[-.07em]">{title}</h1></div></section></>;
}
