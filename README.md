<div id="top"></div>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jaron93/Trivia-Challenge">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Trivia Challenge Game</h3>

  <p align="center">
    <br />
    <a href="https://github.com/jaron93/Trivia-Challenge">View Demo</a>
    ·
    <a href="https://github.com/jaron93/Trivia-Challenge/issues">Report Bug</a>
    ·
    <a href="https://github.com/jaron93/Trivia-Challenge/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
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
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

<h2 align="center">This is a simple skills evaluation project showing my current skills in using React.</h3>
<br>

### A small game with only three screens:

1. **Start Screen:**
  * Choose the difficulty level
  * Enter the number of questions (The maximum number of queries to the API is *50*, entering more will not increase the number of questions in the session.)
  * Selecting an option and the number of questions is required, otherwise the Play Game button is inactive.
  
2. **Game Screen:**
  - The game displays: 
    - current category
    - selected difficulty level. (The documentation does not include any information on this, therefore the level is displayed.)
    - progress Bar (The bar is replenished as a percentage of the total)
    - current question
    - two options to choose from true or false
   - Selecting one of the options will generate another question or take you to the result screen.
   - The close button will redirect the user to the home page and restore the initial state. (No information in the documentation)
   
3. **Result Screen:**
  - Score information:
    - There are always 10 stars (If the number of questions is less than or greater than 10, the score is held as a percentage of the total.) 
  - Result Question:
    - a list of questions in the order of the story with the score 
    - added scrolling generated questions with mask on edges.
  - Play Again button will redirect the user to the game screen and take into account the same difficulty level and number of questions.
  - The close button will redirect the user to the home page and restore the initial state.

<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

* [React.ts](https://create-react-app.dev/docs/adding-typescript/)
* [React Router V6](https://reactrouter.com/docs/en/v6/getting-started/overview)
* [Redux toolkit](https://redux-toolkit.js.org)
* [Sass](https://sass-lang.com)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jaron93/Trivia-Challenge.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [] Feature 1
- [] Feature 2
- [] Feature 3
    - [] Nested Feature

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Jarosław Nazaruk - jaroslaw.nazaruk@gmail.com

Project Link: [https://github.com/jaron93/Trivia-Challenge](https://github.com/jaron93/Trivia-Challenge)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[product-screenshot]: images/screen.png
