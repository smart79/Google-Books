## 📚 Book Search App

    A React-based application that allows users to search for books using the Google Books API, save favorite books to a MongoDB database, and view saved books in a clean, user-friendly interface.

Google Book Search

# 🚀 Live Demo: https://google-books-kj3m.onrender.com

📂 Repository: https://github.com/smart79/Google-Books
📧 Contact: https://stephenmartinez.dev/contact.html
📖 Overview

Google Book Search is a full-stack MERN (MongoDB, Express, React, Node.js) application that lets users:

    🔍 Search for books using the Google Books API.
    ⭐ Save favorite books to a MongoDB Atlas database.
    📖 View and remove saved books.
    🎨 Enjoy a fully responsive UI for seamless experience across devices.

This project demonstrates strong skills in React development, API integration, database management, and deployment.

# 📂 Project Structure

/google-books
│── /client # Frontend (React)
│ │── /public # Static assets
│ │── /src # Main source files
│ │ │── /components # Reusable React components
│ │ │── /pages # App pages (Search, Saved Books)
│ │ │── App.js # Main app component
│ │ │── index.js # React DOM entry point
│── /server # Backend (Node.js, Express)
│ │── /models # MongoDB Schema
│ │── /routes # Express API routes
│ │── /controllers # API logic
│ │── server.js # Express server entry
│── package.json # Project metadata & dependencies
│── .env # Environment variables
│── README.md # This file

# 🛠 Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/smart79/Google-Book-Search.git
cd Google-Book-Search

2️⃣ Install Dependencies

npm install
cd client
npm install

3️⃣ Set Up Environment Variables

Create a .env file in the root and add:

MONGODB_URI=your-mongodb-connection-string
PORT=3001

4️⃣ Start the Application

npm run dev

    Frontend runs on: http://localhost:3000
    Backend runs on: http://localhost:3001

# 💡 Technologies Used

Technology Purpose
React.js Frontend UI, Component-based architecture
Google Books API Fetch book data
Node.js & Express.js Backend server & API handling
MongoDB & Mongoose Database for saving books
Render Deployment platform
Bootstrap / CSS Responsive design
Axios Handling API requests
React Router Page navigation
dotenv Environment variables
🛠 Features & Functionality

#🔍 Book Search

    Users enter a keyword, and the app fetches results using the Google Books API.
    Displays book title, author, description, and a thumbnail image.

⭐ Save Favorite Books

    Users can save books to their MongoDB database.
    Book data is stored using Mongoose schemas.

📖 View & Remove Saved Books

    A separate page lists all saved books.
    Users can remove books from their saved list.

📱 Mobile Responsive

    Uses CSS Flexbox & Media Queries for optimal mobile experience.

🔬 Algorithms & API Logic
📚 Google Books API Call

Fetches book data based on user input:

axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
.then(res => setBooks(res.data.items))
.catch(err => console.log(err));

📦 Saving a Book (MongoDB)

Stores book data in the database:

router.post("/api/books", async (req, res) => {
try {
const book = new Book(req.body);
await book.save();
res.json(book);
} catch (err) {
res.status(500).json({ error: err.message });
}
});

🗑️ Deleting a Saved Book

router.delete("/api/books/:id", async (req, res) => {
try {
await Book.findByIdAndDelete(req.params.id);
res.json({ message: "Book deleted successfully" });
} catch (err) {
res.status(500).json({ error: err.message });
}
});

## 🚀 Future Enhancements

🔹 User Authentication – Allow users to create accounts & manage their saved books.
🔹 Pagination – Improve performance when searching large datasets.
🔹 Dark Mode – Toggle between light/dark themes.
🔹 Book Reviews – Let users leave reviews & ratings for books.
🙌 Contributors

👤 Stephen Martinez – Developer

✉ Contact Me (https://stephenmartinez.dev/contact.html)

📜 Credits & Acknowledgments

    Google Books API for book search functionality.
    React.js & Express.js Documentation for development references.
    Mongoose & MongoDB Docs for database integration.

📝 License

This project is MIT Licensed.
Feel free to use or modify it as needed!

🌎 More Projects

Looking for more cool projects?

🔗 GitHub Portfolio: https://github.com/smart79

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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
