const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from root directory
app.use(express.static(__dirname));

// Main help page route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint for version info
app.get('/api/version', (req, res) => {
  res.json({
    version: '1.0.0',
    supportedRevitVersions: ['2023', '2024', '2025', '2026', '2027'],
    lastUpdated: '2026-09-24'
  });
});

// Start server
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 BIM Health Report Help Server running on port ${PORT}`);
    console.log(`📖 Open http://localhost:${PORT} in your browser`);
  });
}

// Export for Vercel
module.exports = app;
