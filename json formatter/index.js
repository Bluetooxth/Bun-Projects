#!/usr/bin/env bun

import chalk from "chalk";
import { readFileSync, writeFileSync, existsSync } from "fs";

function displayHelp() {
  console.log(`
        "Developed and maintained by @Bluetooxth"

        json-formatter [options] <file>

        Options:
        -f, --format    Format the JSON file
        -v, --validate  Validate the JSON file
        -h, --help      Display help
        `);
}

function validateJson(filePath) {
  if (!existsSync(filePath)) {
    console.log(chalk.red("File not found"));
    process.exit(1);
  }

  try {
    const data = readFileSync(filePath, "utf8");
    JSON.parse(data);
    console.log(chalk.green("Valid JSON file"));
  } catch (error) {
    console.log(chalk.red("Invalid JSON file"));
    process.exit(1);
  }
}

function formatJson(filePath) {
  if (!existsSync(filePath)) {
    console.log(chalk.red("File not found"));
    process.exit(1);
  }

  try {
    const data = readFileSync(filePath, "utf8");
    const formattedData = JSON.stringify(JSON.parse(data), null, 2);
    writeFileSync(filePath, formattedData);
    console.log(chalk.green("JSON file formatted"));
  } catch (error) {
    console.log(chalk.red("Error formatting JSON file"));
    process.exit(1);
  }
}

const args = process.argv.slice(2);

if (args.length === 0 || args.includes("-h") || args.includes("--help")) {
  displayHelp();
  process.exit(0);
}

const inputFilePath = args[args.length - 1];
if (args.includes("-v") || args.includes("--validate")) {
  validateJson(inputFilePath);
} else if (args.includes("-f") || args.includes("--format")) {
  formatJson(inputFilePath);
} else {
  console.log(chalk.red("Invalid option"));
  process.exit(1);
}
