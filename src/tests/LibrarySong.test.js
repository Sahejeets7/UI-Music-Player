// // tests/LibrarySong.spec.js
// import {test, expect} from '@playwright/test';

// test.describe('LibrarySong Component', () => {
//   test.beforeEach(async ({page}) => {
//     // Mock data to be used in the test
//     const mockSongs = [
//       {
//         id: 1,
//         name: 'Song 1',
//         artist: 'Artist 1',
//         cover: 'cover1.jpg',
//         active: false,
//       },
//       {
//         id: 2,
//         name: 'Song 2',
//         artist: 'Artist 2',
//         cover: 'cover2.jpg',
//         active: false,
//       },
//     ];

//     // Mock the local storage or any other setup you need before each test
//     await page.addInitScript(
//       ({mockSongs}) => {
//         window.localStorage.setItem('songs', JSON.stringify(mockSongs));
//       },
//       {mockSongs},
//     );

//     await page.goto('http://localhost:3000'); // Adjust the URL to your app's URL
//   });

//   test('renders correctly with given props', async ({page}) => {
//     const songElement = await page.locator('.library-song:has-text("Song 1")');

//     await expect(songElement).toBeVisible();
//     await expect(songElement.locator('h3')).toHaveText('Song 1');
//     await expect(songElement.locator('h4')).toHaveText('Artist 1');
//     await expect(songElement.locator('img')).toHaveAttribute(
//       'src',
//       'cover1.jpg',
//     );
//   });

//   test('calls setCurrentSong and setSongs when clicked', async ({page}) => {
//     const songElement = await page.locator('.library-song:has-text("Song 1")');
//     await songElement.click();

//     // Verify if the setCurrentSong and setSongs actions were triggered
//     const localStorageSongs = await page.evaluate(() =>
//       JSON.parse(localStorage.getItem('songs')),
//     );
//     const currentSong = await page.evaluate(() =>
//       JSON.parse(localStorage.getItem('currentSong')),
//     );

//     expect(currentSong.name).toBe('Song 1');
//     expect(currentSong.artist).toBe('Artist 1');
//     expect(localStorageSongs[0].active).toBe(true);
//     expect(localStorageSongs[1].active).toBe(false);
//   });

//   test('plays audio when clicked if isPlaying is true', async ({page}) => {
//     // Mock the playAudio function to observe its behavior
//     await page.addInitScript(() => {
//       window.playAudio = jest.fn();
//     });

//     const songElement = await page.locator('.library-song:has-text("Song 1")');
//     await songElement.click();

//     // Check if playAudio was called
//     const playAudioCalled = await page.evaluate(
//       () => window.playAudio.mock.calls.length > 0,
//     );
//     expect(playAudioCalled).toBe(true);
//   });
// });
