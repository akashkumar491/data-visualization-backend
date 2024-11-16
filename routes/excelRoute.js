// routes/excelRoutes.js
const express = require('express');
const xlsx = require('xlsx');
const supabase = require('../config/suprabaseClient'); // Import the Supabase client
const { authenticateToken } = require('../middlewares/authMiddleware');

const router = express.Router();

// Route to read an Excel file from Supabase Storage
router.get('/read', authenticateToken, async (req, res) => {
  const fileName = `xyz/Sales Data.xlsx`;

  // Get the file from Supabase Storage
  const { data, error } = await supabase.storage
    .from('dva') // Your bucket name
    .download(fileName);
  

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  // Read the Excel file using the xlsx library
  const buffer = await data.arrayBuffer();
  const workbook = xlsx.read(buffer, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0]; // Assuming you want to read the first sheet
  const sheet = workbook.Sheets[sheetName];

  // Convert the sheet data to JSON
  const jsonData = xlsx.utils.sheet_to_json(sheet,  { raw: false, defval: "" });

  // Send the JSON data as a response
  res.json(jsonData);
});

module.exports = router;
