import { v4 as uuidv4 } from 'uuid';

function chillHop() {
  return [
    {
      name: 'Beaver Creek',
      cover:
        'https://cms.chillhop.com/media/1095/squarel4a03d3bcc979a6fc894b95ce39d00e0909d1d3f0.jpg',
      artist: 'Aso, Middle School, Aviino',
      audio:
        'https://pixabay.com/music/acoustic-group-morning-garden-acoustic-chill-15013/',
      color: ['#205950', '#2ab3bf'],
      id: uuidv4(),
      active: true,
    },
    {
      name: 'Daylight',
      cover:
        'https://cdn.prod.website-files.com/5fc4bca9bd65e8f2bf87f576/63fba7bd3efb7261d24add42_Square-2%201-p-500.webp',
      artist: 'Aiguille',
      audio:
        'https://pixabay.com/music/beats-good-night-lofi-cozy-chill-music-160166/',
      color: ['#EF8EA9', '#ab417f'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Keep Going',
      cover:
        'https://cms.chillhop.com/media/77075/squareld9736ad4c1782864c32ff9eef792c8d09a01e825.jpg',
      artist: 'Swørn',
      audio: 'https://pixabay.com/music/upbeat-chill-beats-185843/',
      color: ['#CD607D', '#c94043'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Nightfall',
      cover:
        'https://cms.chillhop.com/media/621/squarel774a0958326fec3fd21e32a500287729179d12de.jpg',
      artist: 'Aiguille',
      audio: 'https://pixabay.com/music/beats-chill-lofi-316579/',
      color: ['#EF8EA9', '#ab417f'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Reflection',
      cover:
        'https://cms.chillhop.com/media/6816/squarelff35dede32321a8aa0953809812941bcf8a6bd35.jpg',
      artist: 'Swørn',
      audio: 'https://pixabay.com/music/upbeat-upbeat-background-music-315196/',
      color: ['#CD607D', '#c94043'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Under the City Stars',
      cover:
        'https://cms.chillhop.com/media/69928/squarele3a51ef1515665232dae9c9d02d3689d2e7611ff.jpg',
      artist: 'Aso, Middle School, Aviino',
      audio:
        'https://pixabay.com/music/beats-lazy-day-stylish-futuristic-chill-239287/',
      color: ['#205950', '#2ab3bf'],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
