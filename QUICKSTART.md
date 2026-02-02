# 🚀 QUICK START GUIDE

## For Complete Beginners - Step by Step

### 1️⃣ Install Node.js
- Go to https://nodejs.org/
- Download the LTS version
- Run the installer
- Click "Next" until installation completes

### 2️⃣ Install VS Code
- Go to https://code.visualstudio.com/
- Download and install
- Open VS Code after installation

### 3️⃣ Open Your Project
- In VS Code: File → Open Folder
- Navigate to `portfolio-project` folder
- Click "Select Folder"

### 4️⃣ Open Terminal in VS Code
- Press `Ctrl + ~` (backtick key below Esc)
- OR: View → Terminal
- You'll see a command prompt at the bottom

### 5️⃣ Install Everything
Type this in the terminal and press Enter:
```bash
npm install
```
⏳ Wait 1-2 minutes for installation to complete

### 6️⃣ Run Your Portfolio
Type this and press Enter:
```bash
npm run dev
```

### 7️⃣ View Your Portfolio
- Look for: `Local: http://localhost:5173`
- Hold Ctrl and click the link
- Your portfolio opens in browser! 🎉

## 🎨 To Customize Your Portfolio

### Change Your Information:
1. Open `src/App.jsx` in VS Code
2. Find Line 15: Change `'Zainch032'` to your GitHub username
3. Update email, phone, LinkedIn in the Hero section
4. Add your own projects in the `projects` array
5. Save file (Ctrl + S)
6. Browser auto-refreshes with your changes!

## 🛑 To Stop the Server
- In terminal, press `Ctrl + C`
- Type `y` and press Enter

## 🌐 To Deploy Online (Free!)

### Using Vercel (Easiest):
1. Create account at https://vercel.com (use GitHub login)
2. Click "New Project"
3. Import your GitHub repo
4. Click "Deploy"
5. Get your live URL! 🎉

### Using Netlify:
1. Create account at https://netlify.com
2. Drag and drop your `dist` folder (after running `npm run build`)
3. Get your live URL!

## 📱 Common Commands

| What You Want | Command |
|---------------|---------|
| Start development | `npm run dev` |
| Stop server | `Ctrl + C` |
| Build for deployment | `npm run build` |
| Install dependencies | `npm install` |

## ❓ Got Stuck?

### Error: "npm not found"
- You need to install Node.js first (Step 1)

### Error: Port already in use
- Close other terminals or applications using port 5173
- OR change the port in vite.config.js

### Changes not showing
- Save your file (Ctrl + S)
- Browser should auto-refresh
- If not, manually refresh (F5)

### Terminal shows errors
- Make sure you're in the correct folder
- Try: `npm install` again
- Restart VS Code

## 💡 Pro Tips

1. **Auto Save**: File → Auto Save (turns on automatically)
2. **Prettier Format**: Install Prettier extension, saves formatted
3. **Split View**: Drag a file to the side to view two files
4. **Command Palette**: Ctrl + Shift + P for all commands

## 🎯 Next Steps

1. ✅ Get it running locally
2. ✅ Update with your info
3. ✅ Add your projects
4. ✅ Deploy online
5. ✅ Share on LinkedIn!

---

**You got this! 💪 Happy coding!**
