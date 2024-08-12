import {server} from 'msw'; // Import your mock handlers
import {beforeAll, afterEach, afterAll} from 'jest';

Object.defineProperty(window, 'origin', {
  value: '',
  writable: true,
  // configurable: true,
});

// Establish API mocking before all tests
beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'error',
  }),
);

// Reset any request handlers after each test
afterEach(() => server.resetHandlers());

// Clean up the server after all tests are run
afterAll(() => server.close());
