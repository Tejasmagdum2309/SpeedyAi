⚙️ How to Run the Project
Clone the repository

git clone [https://github.com/your-repo/streamify-dashboard.git](https://github.com/Tejasmagdum2309/SpeedyAi.git)

Install dependencies
npm install
(Start the development server)

npm run dev

Open your browser and visit http://localhost:5173/

🛠 Building for Production

To generate a production-ready build, run:
npm run build
(This will create an optimized build in the dist/ folder.)

💡 Thought Process & Challenges

✅ What I Focused On:
Keeping the UI clean, modern, and responsive
Using Redux Toolkit for better state management
Implementing sortable & paginated tables
Creating realistic-looking data with Faker.js

⚠️ Challenges Faced:

Heatmap Visualization 🔥

Initially, recharts didn't have a built-in heatmap, so I used a stacked bar chart instead.
Finding the right color scale was tricky—needed a balance between visibility & aesthetics.

Folder Structure 📂

Initially had all Redux slices in one file, but later moved to feature-based folders (features/heatmap, features/revenue, etc.).
