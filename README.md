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
    <a href="https://trivia-challenge-game.herokuapp.com">View Demo</a>
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
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot][product-screenshot]

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
    - There are always 10 stars (If the number of questions is less or greater than 10, the score is held as a percentage of the total.) 
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

Clone the repo
   ```sh
   git clone https://github.com/jaron93/Trivia-Challenge.git
   ```
 Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

Run game
   ```sh
   npm start
   ```


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Jarosław Nazaruk - jaroslaw.nazaruk@gmail.com

Project Link: [https://github.com/jaron93/Trivia-Challenge](https://github.com/jaron93/Trivia-Challenge)

<p align="right">(<a href="#top">back to top</a>)</p>

[product-screenshot]: images/screen.png
