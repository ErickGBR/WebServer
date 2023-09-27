# WebServer with Express and HBS (Handlebars)

This is a simple WebServer project built with Express.js and HBS (Handlebars) view engine. The server is designed to serve HTML, CSS, and JavaScript files, and it demonstrates server-side rendering using HBS templates.

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (which includes npm)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/ErickGBR/WebServer.git
   ```

2. Navigate to the project directory:

   ```bash
   cd WebServer
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server using nodemon (which automatically restarts the server when you make changes):

   ```bash
   npm start
   ```

2. Open a web browser and visit `http://localhost:3000` to see the server in action.

## Project Structure

- `index.js`: The entry point of the application.
- `views/`: Contains HBS templates for rendering HTML content.
- `public/`: Stores static files such as CSS and JavaScript.
- `routes/`: Define the routes and route handling logic.

## Server-Side Rendering

This WebServer utilizes the HBS (Handlebars) view engine for server-side rendering. You can find example templates in the `views/` directory, which are used to render HTML dynamically on the server.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a branch for your contribution.
3. Make your changes and ensure that everything works.
4. Submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Thank you for using this WebServer with Express and HBS! If you have any questions or suggestions, please feel free to contact us.

**Author:** Erick Burgos
**Email:** erickburgos1519@gmail.com
