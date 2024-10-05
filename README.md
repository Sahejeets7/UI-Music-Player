This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

The error message `ReferenceError: IntersectionObserver is not defined` indicates that the `IntersectionObserver` API is being used in your code, but it is not available in the current environment. This typically happens when running tests in a Node.js environment, which does not have browser APIs like `IntersectionObserver`.

### Steps to Fix the Issue:

1. **Polyfill `IntersectionObserver`**: Add a polyfill for `IntersectionObserver` in your test setup.
2. **Mock `IntersectionObserver`**: Mock the `IntersectionObserver` in your test files.

### Example Fix:

#### 1. Polyfill `IntersectionObserver`:

You can add a polyfill for `IntersectionObserver` in your test setup file. If you are using Jest, you can add this to your Jest setup file (e.g., `setupTests.js` or `jest.setup.js`).

```javascript
// jest.setup.js
global.IntersectionObserver = class {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};
```

#### 2. Mock `IntersectionObserver`:

Alternatively, you can mock `IntersectionObserver` directly in your test files.

```javascript
// Example test file
beforeAll(() => {
  global.IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});
// interface IntersectionObserverMock {
  //   observe: jest.Mock;
  // }

  // const windowLocation: Partial<Value<Window>> & { IntersectionObserver?: IntersectionObserverMock } = {
  //   IntersectionObserver: {
  //     observe: jest.fn(),
  //   },
  // };
```

### Explanation:

- **Polyfill `IntersectionObserver`**: This approach adds a global `IntersectionObserver` class with empty methods (`observe`, `unobserve`, `disconnect`). This ensures that any code using `IntersectionObserver` will not throw an error during tests.
- **Mock `IntersectionObserver`**: This approach mocks `IntersectionObserver` in the test file itself, ensuring that the tests can run without errors.

By adding a polyfill or mock for `IntersectionObserver`, you can resolve the `ReferenceError` and ensure that your tests run successfully in a Node.js environment.

- Type string trivially inferred from a string literal, remove type annotation.eslint@typescript-eslint/no-inferrable-types



-  ISSUES: 
1. Race condition bw play and pause
2. no gracefull error handling for nw error scenario
3. 
