

my-capstone-project
Recipe Finder
A web app to find recipes based on available ingredients using TheMealDB API.

Development 🚀
To run the project locally:

1. Install dependencies:
Ensure that you have Node.js (version 14 or later) installed.

Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/my-capstone-project.git
cd my-capstone-project
Install the required dependencies using npm:

bash
Copy code
npm install
This will install all necessary packages, including React, Tailwind CSS, Axios (optional for API calls), and any other dependencies specified in the package.json.

2. Set up environment variables:
The app uses external APIs (TheMealDB API and YouTube API), so you need to add the necessary keys to an environment file.

Create a .env file at the root of your project (if it doesn’t already exist).

Add the YouTube API key (replace with your actual API key):

env
Copy code
REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key
Ensure that your .env file is not pushed to GitHub by adding it to .gitignore:

bash
Copy code
# .gitignore
.env
3. Start the Development Server:
Run the development server to start the app locally:

bash
Copy code
npm run dev
The app should now be accessible at http://localhost:3000 in your browser.

Project Structure 📂
Here’s an overview of the directory structure:

bash
Copy code
my-capstone-project/
├── public/                           # Public static files (favicon, index.html)
│   ├── index.html                    # The main HTML file
├── src/                              # Source code files
│   ├── assets/                       # Images, icons, etc.
│   ├── components/                   # Reusable components like RecipeCard, SearchBar
│   ├── hooks/                        # Custom React hooks (e.g., useFetchRecipes)
│   ├── App.js                        # Main React component
│   ├── index.js                      # Entry point for the React app
│   ├── index.css                     # Global styles (Tailwind CSS)
├── .gitignore                        # Git ignore file to exclude unnecessary files
├── package.json                      # Project metadata and dependencies
├── tailwind.config.js                # Tailwind CSS configuration
├── vite.config.js                    # Vite configuration
└── README.md                         # Project README file (this one)
Usage 📱
Once the app is running locally, follow these steps to use it:

Search for Recipes:

Enter a dish name (e.g., "Arrabiata") in the search bar and press Enter or click Search.
A list of recipes matching your query will be displayed.
View Recipe Details:

Click on any recipe to view detailed information:
Ingredients (with quantities).
Step-by-step preparation instructions.
A YouTube video tutorial (if available).
Responsive Design:

The app is fully responsive, so it adapts to different screen sizes, including mobile, tablet, and desktop.
