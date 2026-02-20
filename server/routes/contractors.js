import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();
const contractorsFile = join(__dirname, '..', 'data', 'contractors.json');

function readContractors() {
    try {
        return JSON.parse(fs.readFileSync(contractorsFile, 'utf8'));
    } catch { return []; }
}

function writeContractors(data) {
    fs.writeFileSync(contractorsFile, JSON.stringify(data, null, 2));
}

// GET all contractors (sorted by ranking)
router.get('/', (req, res) => {
    try {
        const contractors = readContractors();
        // Sort by points descending
        contractors.sort((a, b) => b.points - a.points);
        res.json({ success: true, contractors });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Failed to fetch contractors' });
    }
});

export default router;
