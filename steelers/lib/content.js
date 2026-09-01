export const art = {
  home: {
    src: '/art/home-fluid.jpg',
    alt: 'Composição abstrata em preto e branco com superfícies onduladas',
    position: 'center 48%',
    mobilePosition: '48% center',
  },
  band: {
    src: '/art/band-fluid-square.jpg',
    alt: 'Textura abstrata quadrada formada por linhas orgânicas',
    position: 'center',
    mobilePosition: 'center 42%',
  },
  music: {
    src: '/art/music-waves.jpg',
    alt: 'Faixas horizontais onduladas em preto e cinza',
    position: 'center',
    mobilePosition: '52% center',
  },
  live: {
    src: '/art/live-grid.jpg',
    alt: 'Grid em perspectiva atravessado por ondas abstratas',
    position: 'center',
    mobilePosition: '58% center',
  },
  contact: {
    src: '/art/contact-polyhedra.jpg',
    alt: 'Poliedros entre superfícies onduladas em preto e branco',
    position: 'center',
    mobilePosition: '51% center',
  },
}

export const band = {
  name: 'Sign Steelers',
  instagram: 'https://www.instagram.com/signsteelers/',
  spotify: 'https://open.spotify.com/artist/5ipDa4Bo9qGij1dWTHkigd',
  spotifyEmbed:
    'https://open.spotify.com/embed/artist/5ipDa4Bo9qGij1dWTHkigd?utm_source=generator&theme=0',
  statement: 'Noma vera, silta corum. Vela notum per astra.',
  about:
    'Luma feris nocta velum. Arca sona triva, mona per alis e forma nula. Vetra corum sinala, turva lenta, prisma fora.',
  production: 'Gus Maia & Rob J. Janser',
  label: 'Tumbleweed Records',
}

export const members = [
  { name: 'Gustavo Maia', role: 'Guitarra e voz' },
  { name: 'Gabriel Silveira', role: 'Guitarra' },
  { name: 'Sergio Maximo', role: 'Baixo e voz' },
  { name: 'Rafael Laterça', role: 'Bateria' },
]

export const navItems = [
  { href: '/banda', index: '01', label: 'Banda' },
  { href: '/sons', index: '02', label: 'Sons' },
  { href: '/shows', index: '03', label: 'Ao vivo' },
  { href: '/contato', index: '04', label: 'Contato' },
]

export const releases = [
  {
    title: 'One Night',
    type: 'Single',
    year: 2022,
    plays: '5.233',
    cover: '/one-night.jpg',
  },
  {
    title: 'Cold Yellow Sun',
    type: 'Single',
    year: 2022,
    plays: '2.294',
    cover: '/cold-yellow-sun.jpg',
  },
]

export const homeSections = [
  {
    href: '/banda',
    index: '01',
    label: 'Vetra noma',
    text: 'Cora silta per nova. Lume arca, fera nula e prisma alto.',
    image: art.band,
  },
  {
    href: '/sons',
    index: '02',
    label: 'Noxa lume',
    text: 'Vela soma, triva nocta. Aris lenta per forma e sinal.',
    image: art.music,
  },
  {
    href: '/shows',
    index: '03',
    label: 'Sona fora',
    text: 'Turva corum, prisma vera. Noma alis e vetra mona.',
    image: art.live,
  },
  {
    href: '/contato',
    index: '04',
    label: 'Arca prism',
    text: 'Noxa vetra, lumen alis. Cora forma per nova e silta.',
    image: art.contact,
  },
]
