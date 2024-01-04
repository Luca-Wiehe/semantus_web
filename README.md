# Semantus Web Application
This is the React.js based Web Application for "Semantus". Semantus is a guessing game where players have to guess a given word based on semantic similarities. The project is split into Django Server and Web Application, connected via Django REST Framework.

## Preview
To gain some insights into the Web Application, check out the following Screenshots:

<div style="display: grid; grid-template-columns: repeat(2, 1fr); grid-gap: 20px; justify-content: center; text-align: center;">
  <div>
    <img width="300" alt="preview-1" src="https://github.com/Luca-Wiehe/semantus_web/assets/85710000/38c395ad-e100-49e1-ac2e-01aa911d3830">
    <br>
    <em>Screenshot 1: Login Mechanism using Firebase Auth</em>
  </div>
  <br>
  <div>
    <img width="300" alt="preview-2" src="https://github.com/Luca-Wiehe/semantus_web/assets/85710000/ccbc85fb-92fc-4cc4-b12f-4a8383be0842">
    <br>
    <em>Screenshot 2: Game Preview</em>
  </div>
  <br>
  <div>
    <img width="300" alt="Screenshot 2024-01-04 at 00 56 42" src="https://github.com/Luca-Wiehe/semantus_web/assets/85710000/69332841-2f16-4b9a-82d2-fb2e28a06ae9">
    <br>
    <em>Screenshot 3: Multiplayer Game Mode</em>
  </div>
  <br>
  <div>
    <img width="300" alt="Screenshot 2024-01-04 at 00 58 13" src="https://github.com/Luca-Wiehe/semantus_web/assets/85710000/d0f007cd-c93d-445d-9bec-370b8a56a08e">
    <br>
    <em>Screenshot 4: Friend List</em>
  </div>
  


</div>


## Project Description

### Motivation for Application
I loved playing the English version of "Semantle", a game where players guess a word based on semantic similarities on a daily basis. This game, however, is not available in German which was my motivation for implementing it on my own. Semantus uses several NLP approaches that I learned throughout my studies. Additionally, it is the first time that I am able to implement a larger project with a full client-server architecture on my own. 

### Choice of Tech Stack
The Web Application uses React.js as a framework. Reasons for choosing React.js include:
+ Component-based architecture: To achieve a unified look-and-feel across pages, reusable components are crucial
+ State Management: In synchronized multiplayer games, UI needs to update continuously based on changes in the game state
+ Library Support: React.js has a large developer base which allows using externally implemented libraries reliably

### Repository Structure

`/public/`: Contains resources (e.g. images/.txt files)

`/src/`: Contains source code
+ `/src/api/`: API calls for communication with Semantus Server
+ `/src/components/`: Reusable UI Components
+ `/src/pages/`: UI for pages of the website
+ `/src/constants/`: Constants (in particular Strings that are used across the website)
+ `/src/styles/`: CSS Styles for UI Components and UI Pages
+ `/src/utils/`: Registration and Authentication Mechanisms
