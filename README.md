# BIM Health Report Plugin - Help Page

Modern, responsive help and documentation website for the BIM Health Report Plugin.

## 🚀 Features

- ✅ Modern, clean design with Inter font
- ✅ Responsive layout (mobile-friendly)
- ✅ Smooth animations and transitions
- ✅ Complete documentation
- ✅ Contact information
- ✅ FAQ section
- ✅ System requirements table

## 📦 Tech Stack

- **Backend:** Node.js + Express
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Hosting:** Vercel (ready to deploy)

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ installed

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Server will run on: `http://localhost:3000`

## 🌐 Deployment to Vercel

### Method 1: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Method 2: Vercel Dashboard

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import from Git or upload folder
4. Deploy!

### Environment Variables

No environment variables needed - works out of the box!

## 📁 Project Structure

```
help-page/
├── public/
│   ├── index.html      # Main HTML page
│   ├── styles.css      # Styles
│   └── script.js       # JavaScript
├── server.js           # Express server
├── package.json        # Dependencies
├── vercel.json         # Vercel config
└── README.md          # This file
```

## 🔗 Integration with Plugin

Update this URL in your Revit plugin code:

```csharp
autoButton.SetContextualHelp(new ContextualHelp(
    ContextualHelpType.Url,
    "https://your-domain.vercel.app"
));
```

## 📞 Support

- **Email:** projects@bimboss.com
- **Website:** www.bimboss.com

---

**Built by BIMBOSS CONSULTANTS**
