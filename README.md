# Muhammad Zain's Portfolio 🚀

A modern, responsive portfolio website showcasing my journey as a Data Scientist and ML Engineer. Built with React, Vite, and Tailwind CSS.

## 🌐 Live Demo

Deployed at: [portfolio-chi-indol-djydsn6pu8.vercel.app](https://portfolio-chi-indol-djydsn6pu8.vercel.app/)

## ✨ Features

- **Responsive Design**: Works seamlessly on all devices
- **GitHub Integration**: Auto-fetches latest repositories from GitHub API
- **Modern UI**: Beautiful gradient design with purple/pink AI theme
- **Smooth Navigation**: Easy-to-use navigation with sections
- **Project Showcase**: Featured projects with tech stack and highlights
- **Experience Section**: Professional experience and certifications
- **Skills Display**: Categorized technical skills
- **Contact Section**: Multiple ways to get in touch

## 📁 Project Structure

```
portfolio-project/
├── src/
│   ├── App.jsx          # Main portfolio component
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind CSS styles
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## 🛠️ Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **GitHub API**: For fetching repositories

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- VS Code (recommended)

### Step 1: Install Node.js

Download and install from [nodejs.org](https://nodejs.org/)

Verify installation:
```bash
node --version
npm --version
```

### Step 2: Open Project in VS Code

1. Open VS Code
2. File → Open Folder → Select `portfolio-project` folder
3. Open integrated terminal (Ctrl + ` or View → Terminal)

### Step 3: Install Dependencies

```bash
npm install
```

This will install all required packages:
- react
- react-dom
- lucide-react
- vite
- tailwindcss
- And all dev dependencies

### Step 4: Run Development Server

```bash
npm run dev
```

The app will start at `http://localhost:5173`

### Step 5: Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Step 6: Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Update Personal Information

Edit `src/App.jsx`:

1. **GitHub Username** (Line 15):
```javascript
const githubUsername = 'Zainch032'; // Your GitHub username
```

2. **Personal Details** (Hero Section):
- Name
- Email
- Phone
- LinkedIn URL
- Kaggle URL

3. **Projects Array** (Lines 34-53):
```javascript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    tech: ['Tech1', 'Tech2'],
    github: 'your-github-link',
    highlights: ['Feature 1', 'Feature 2']
  }
];
```

4. **Skills** (Lines 23-28):
Update with your skills

5. **Experience & Certifications**:
Add your work experience and certifications

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Option 2: Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import repository
4. Build command: `npm run build`
5. Publish directory: `dist`

### Option 3: GitHub Pages

```bash
npm install gh-pages --save-dev
```

Add to `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

Then:
```bash
npm run build
npm run deploy
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🔧 VS Code Recommended Extensions

1. **ES7+ React/Redux/React-Native snippets** - dsznajder.es7-react-js-snippets
2. **Tailwind CSS IntelliSense** - bradlc.vscode-tailwindcss
3. **Prettier** - esbenp.prettier-vscode
4. **ESLint** - dbaeumer.vscode-eslint

Install via VS Code Extensions (Ctrl+Shift+X)

## 🎯 Features Breakdown

### Auto GitHub Repos
The portfolio automatically fetches your 9 most recent repositories from GitHub API.

### Responsive Navigation
- Desktop: Horizontal menu
- Mobile: Hamburger menu

### Smooth Scrolling
Click navigation items to smoothly scroll to sections.

### Interactive Cards
Project and repo cards have hover effects and animations.

## 🐛 Troubleshooting

### Issue: `npm install` fails
**Solution**: Delete `node_modules` and `package-lock.json`, then run `npm install` again

### Issue: Port 5173 already in use
**Solution**: Kill the process or change port in `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
})
```

### Issue: GitHub repos not loading
**Solution**: Check GitHub username in `App.jsx` line 15

### Issue: Tailwind styles not applying
**Solution**: Make sure `index.css` imports are correct in `main.jsx`

## 📧 Contact

**Muhammad Zain**
- Email: zc19398@gmail.com
- GitHub: [Zainch032](https://github.com/Zainch032)
- LinkedIn: [muhammad-zain](https://linkedin.com/in/muhammad-zain)
- Location: Lahore, Pakistan

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Made with ❤️ and passion for AI**
