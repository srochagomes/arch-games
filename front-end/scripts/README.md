# Scripts

## rename-files.ts

This script is used to rename image files on disk to match the filenames stored in the database. It is useful when the uploaded files have generic names (like `file0.png`) but the application expects them to have the correct names and directory structure as recorded in the database.

### How it works
- Connects to the database and fetches all image records.
- For each image, finds the corresponding file in the correct directory.
- Renames the file to match the `filename` field in the database, if necessary.
- Skips files that are already correctly named.

### Usage

1. **Install dependencies** (if you haven't already):
   ```bash
   yarn install
   ```

2. **Configure environment**
   - Make sure your database and `UPLOAD_DIR` are correctly set in your environment variables or `config/env.ts`.

3. **Run the script**
   ```bash
   npx ts-node -P scripts/tsconfig.json scripts/rename-files.ts
   ```

### Notes
- The script is idempotent: you can run it multiple times without causing issues.
- It will log any errors if a file cannot be found or renamed.
- Only PNG files are handled by default, but you can adjust the script for other file types if needed.

---

For any issues or questions, please contact the project maintainer. 