Athena Nexus
Athena Nexus is a collaborative project aimed at building an advanced Discord bot along with a powerful web dashboard for managing the bot. This project leverages Node.js, Express.js, and Discord.js for the backend, with a frontend planned to be developed using modern web technologies like Vue.js or React.js.

Features
Discord Bot: A bot built with Discord.js that can be added to servers to perform various tasks.
Web Dashboard: A user-friendly interface for managing bot features, settings, and viewing statistics.
GitHub Integration: Automated deployment using GitHub Webhooks ensures that every update to the main branch triggers a pull and auto-restart on the VPS.

Project Structure
discord-bot: Contains the main Discord bot logic.
discord-backend: Manages the backend services, including the OAuth2 integration and webhook listener for auto-deployment.
discord-frontend: The planned web dashboard that will allow users to manage the bot.

Credits
This project is a collaborative effort by:
ItzDusty
Jakubi
Zeca

Technologies Used
Node.js
Express.js
Discord.js
PM2 (Process Manager for Node.js)
GitHub Webhooks (for automatic deployment)
Nginx (for hosting the web dashboard and routing)
