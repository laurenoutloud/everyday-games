# Add A New Game
(***Note:*** to do this the game must already exist as a React component that can be installed as a dependency)

1. Fork the project 
2. Add and install your component as a dependency in [package.json](/package.json)
3. Import your component to [gameData.js](/src/gameData.js) and add it to the GAME_DATA object using the following template:
```json 

{
        "id": "n", 
        "name": "Game",
        "route": "game",
        "description": "Game description!", 
        "component" : <Game/>
    }

```
(***Note:*** *n* should be the next available number and the description should end with an exclamation mark) 

4. Submit a pull request to the dev branch with your game 

Your game will be publised to https://laurenoutloud.github.io/everyday-games once it is approved and merged!
