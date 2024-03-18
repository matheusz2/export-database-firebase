const admin = require('firebase-admin');
const { Parser } = require('json2csv');
const fs = require('fs');

// Initialize Firebase Admin SDK
const serviceAccount = require('./environment-config.json'); // Replace with the path to your private key file

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function exportCollectionToCSV(collectionPath, outputPath) {
    const snapshot = await db.collection(collectionPath).get();
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    try {
        const parser = new Parser();
        const csv = parser.parse(data);
        fs.writeFileSync(outputPath, csv);
        console.log(`Data exported to ${outputPath} successfully.`);
    } catch (err) {
        console.error('Error exporting data:', err);
    }
}

// 1°: Collection Firebase Name: Users
// 2°: Filename
exportCollectionToCSV('users', './users-extracted.csv');