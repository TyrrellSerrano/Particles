 # Particles

This computer app is a simple game designed to be played by two people. 

Interaction:
Using a  ps4 controller, one player uses any of the face buttons (square, circle, etc.) to fire particles at the other player. These pink and orange particles are aimed using the left joystick. The other player uses the mouse to controll the sphere and avoid the particles. As the mouse-player gets hit, the sphere will start to dissapear. When the sphere is gone, the game is over. To start, open "Particles" in max & select your desired connected controller.

Scripting:
While this application could have been built purely in Max, I chose to use Javascript to create Max objects & control the interactions. My code creates a window, a rendering context, and an object fixed to the the mouse's position (using Max's Jitter/OpenGL context). The code then generates particles at opposite corners of the screen (using Jitter/OpenGL commands) and sends them in random directions (on screen) at random speeds. The code checks for collision between particles and the mouse player (by calculating polar distance between the objects). Everytime there is a collission, the mouse player loses a lifepoint (visually represented with the mouse player becoming more transparent). When lifepoints are depleted, the code outputs a "1" which is sent to Max's "Bang" object. This Bang is connected to a text object which populates a "Game Over" message in our window whenever the bang receives "1". The code also allows for PS4 controller input. The face buttons create additional particles that can be aimed with the Joystick.

Developer & Designer: Tyrrell Serrano (Solo project)

To do:
Particles aren't functioning correctly (fixed)
And circle button isn't consistent. (fixed)
Sound isn't playing (fixed)
Collision isn't consistent, player two and player one can 
collide freely. (fixed)
