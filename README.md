# Semantus Web Application
This is the React.js based Web Application for "Semantus". Semantus is a guessing game where players have to guess a given word based on semantic similarities. The project is split into Django Server and Web Application, connected via Django REST Framework.

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
