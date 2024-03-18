# Firebase Data Exporter to CSV

This project includes a simple yet effective script for exporting data from any Firebase Firestore collection to a CSV file. It utilizes the Firebase Admin SDK for server-side access to your Firestore data, and the `json2csv` library to convert JSON data to a CSV format.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- Access to a Firebase project and the Firebase Admin SDK service account key.

### Installation

1. Clone the repository to your local machine.

    ```bash
    git clone https://github.com/matheusz2/export-database-firebase.git
    cd export-database-firebase
    ```

2. Install the required npm packages.

    ```bash
    npm install
    ```

3. Replace the `environment-config.json` with your Firebase Admin SDK service account key file. A template of the `environment-config.json` file is provided for reference:

    ```json
    {
      "type": "service_account",
      "project_id": "",
      "private_key_id": "",
      "private_key": "-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n",
      "client_email": "",
      "client_id": "",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": ""
    }
    ```

### Usage

1. Open `exportDatabase.js` and set the collection name and output file path according to your needs:

    ```javascript
    exportCollectionToCSV('users', './users-extracted.csv');
    ```

2. Run the script:

    ```bash
    node exportDatabase.js
    ```

    The CSV file will be generated at the specified output path.

## How It Works

The `exportCollectionToCSV` function fetches all documents from the specified Firestore collection, converts the data into CSV format using the `json2csv` library, and saves the file locally.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)
- [json2csv](https://www.npmjs.com/package/json2csv)