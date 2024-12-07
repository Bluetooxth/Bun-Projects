# 📝 **json-formatter**

A simple CLI tool to format and validate JSON files with colorful outputs using `chalk`.

---

## 📦 **Installation**

First, add the `chalk` package to your project to enable colorful terminal outputs:

```
bun add chalk
```

---

## ⚙️ **Set Up the CLI**

To make the `json-formatter` command globally available on your system, add the following to your `package.json`:

```
{
  "bin": {
    "json-formatter": "index.js"
  }
}
```

Replace `index.js` with the path to your CLI script if it's named differently (e.g., `json-cli.js`).

---

## 🔗 **Link the CLI Globally**

Run this command to link your CLI tool globally:

```
bun link
```

Now, `json-formatter` is available as a global command on your system.

---

## 🚀 **Usage**

Open your terminal and use the following command structure:

```
json-formatter [options] <file>
```

### **Options:**

- **`-f`, `--format`**: Format the JSON file.
- **`-v`, `--validate`**: Validate the JSON file.
- **`-h`, `--help`**: Display help information.

---

## 🔧 **Examples**

1. **Format a JSON file:**

   ```
   json-formatter --format data.json
   ```

2. **Validate a JSON file:**

   ```
   json-formatter --validate data.json
   ```

3. **Display help:**

   ```
   json-formatter --help
   ```

---

## 💡 **Tips**

- Ensure your JSON file path is correct.
- To update your globally linked CLI after making changes, run:

  ```
  bun unlink && bun link
  ```

---

Developed and maintained by **@Bluetooxth**.
