<!-- TODO SECTION _____________________________ -->

# TODO

- [x] Add appropriate readme boilerplate
- [x] Add complete readme details
- [ ] Add examples
- [ ] abstract cache manager to new npm package

<!-- MAIN SECTION INTRO _____________________________ -->

# Web-Window-Manager

<a href="https://www.loom.com/share/641344bac18a415f90c983d9a3c2352a">
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/641344bac18a415f90c983d9a3c2352a-with-play.gif">
  </a>

A Window Manger for managing the creation and deletion of windows/tabs within a web based application.

<!-- BADGES SECTION _____________________________ -->

## Badges

[![npm version](https://img.shields.io/npm/v/npm.svg)](https://npm.im/npm)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Release](https://github.com/Tarmstrong95/component-test-helper/actions/workflows/release-package.yml/badge.svg)](https://github.com/Tarmstrong95/component-test-helper/actions/workflows/release-package.yml)

<div id="top"></div>

<hr/>

<!-- TABLE OF CONTENTS SECTION _____________________________ -->

## Table Of Contents

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<hr/>

<!-- ABOUT SECTION _____________________________ -->

## About The Project

This package allows developers to build applications that can open windows/tabs at an infinite depth (theoretically) and close all windows/tabs, based on some "event", that are "children" of the window/tab that triggered the event. This solves the problem some web applications have with persistence and ensuring all children are closed given various edge cases.

- EVENT: a button click, hot key, or anything else (fully customizable)
- CHILDREN: a window/tab that was opened by a given window/tab

<!-- BUILT WITH SECTION _____________________________ -->

### Built With

- [TypeScript](https://www.typescriptlang.org/)
- [Lodash](https://lodash.com/)

<!-- GETTING STARTED SECTION _____________________________ -->

<hr/>

## Getting Started

To get started with the `Web-Window-Manager`, you will need to have the following prerequisites installed:

- Node.js
- [npm](https://www.npmjs.com/) (comes with Node.js)

Once you have these prerequisites installed, you can proceed to install the Web-Window-Manager package using npm:

```bash
npm i web-window-manager
```

After installing the package, you can import and use it in your project as shown in the Usage section above.

<hr/>

<!-- USAGE SECTION _____________________________ -->

## Usage

Import the Web-Window-Manager file into your entry file (e.g. app.tsx in a React project):

```typescript
import 'web-window-manager'
```

Replace any window.open() calls in your code with window.windowManager.open():

```typescript
// Before
window.open('https://www.example.com', '_blank')

// After
window.WindowManager.openWindow({ link: '/some-link', name: `some-name` })
```

This will use the Web-Window-Manager to open the new window/tab, allowing you to track and manage it within your application.

Add a simple React button with an `onClick` prop that calls `window.windowManager.recursivelyCloseChildren()` with a label of `"Logout"`:

```javascript
import 'web-window-manager'

function App() {
  return (
    // NOTE: you must call it from an arrow function in this context because
    // this function expects a number parameter or undefined
    <button onClick={() => window.windowManager.recursivelyCloseChildren()}>
      Logout
    </button>
  )
}
```

When the user clicks the "Logout" button, this will close all child windows/tabs that were opened by the current window/tab.

For more detailed usage instructions and examples, please see the `Web-Window-Manager` documentation [examples](https://github.com/Tarmstrong95/WindowManger/tree/main/src/examples).

_See the [open issues](https://github.com/Tarmstrong95/WebWindowManager/issues) for a full list of proposed features (and known issues)._

<hr/>

<!-- ROADMAP SECTION _____________________________ -->

## Roadmap

- The Web-Window-Manager package is still in development, and the following features are planned for future releases:

  - Abstract the cache manager to a separate npm package
  - Add more detailed examples
  - usage instructions in the readme
  - make window details customizable

<hr/>

<!-- CONTRIBUTING SECTION _____________________________ -->

## Contributing

If you would like to contribute to the development of the Web-Window-Manager package, please follow these steps:

1. Fork the repository
2. Create a new branch for your changes (e.g. feature/new-feature)
3. Make your changes and commit them to your branch
4. Push your branch to your forked repository
5. Open a new pull request from your branch to the master branch of the original repository

<hr/>
<!-- LICENSE SECTION _____________________________ -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<hr/>
<!-- CONTACT SECTION _____________________________ -->
## Contact

Me - [@Triston08227721](https://twitter.com/Triston08227721) - triston95strong@gmail.com

Project Link: [https://github.com/Tarmstrong95/WebWindowManager](https://github.com/Tarmstrong95/WebWindowManager)

<!-- MARKDOWN LINKS & IMAGES -->

### Acknowledgments

- [Shields.io](https://shields.io/) for providing the badges used in the readme.
- [Lodash](https://lodash.com/) for providing the utility functions used in the package.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Tarmstrong95/WebWindowManager.svg?style=for-the-badge
[contributors-url]: https://github.com/Tarmstrong95/WebWindowManager/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Tarmstrong95/WebWindowManager.svg?style=for-the-badge
[forks-url]: https://github.com/Tarmstrong95/WebWindowManager/network/members
[stars-shield]: https://img.shields.io/github/stars/Tarmstrong95/WebWindowManager.svg?style=for-the-badge
[stars-url]: https://github.com/Tarmstrong95/WebWindowManager/stargazers
[issues-shield]: https://img.shields.io/github/issues/Tarmstrong95/WebWindowManager.svg?style=for-the-badge
[issues-url]: https://github.com/Tarmstrong95/WebWindowManager/issues
[license-shield]: https://img.shields.io/github/license/Tarmstrong95/WebWindowManager.svg?style=for-the-badge
[license-url]: https://github.com/Tarmstrong95/WebWindowManager/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/triston95strong
