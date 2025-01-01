# Table to CSV/JSON Chrome Extension

A Chrome extension that allows you to quickly convert HTML tables to CSV or JSON format with right-click functionality.

## Features

- Right-click context menu integration
- Convert any HTML table to CSV format
- Convert any HTML table to JSON format with column headers as keys
- Automatic copy to clipboard
- Works on any webpage
- Supports tables with multiple rows and columns
- Handles special characters and text formatting

## Installation

1. Clone this repository or download the source code
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory

## Usage

1. Right-click on any HTML table on a webpage
2. Select either "Copy Table as CSV" or "Copy Table as JSON" from the context menu
3. The converted data will be automatically copied to your clipboard
4. Paste the data into your desired application

## CSV Format
- Columns are separated by semicolons (;)
- Text is enclosed in double quotes
- Handles escaped double quotes automatically

## JSON Format
- First row is used as column headers
- Each subsequent row becomes an object with header-value pairs
- Output is properly formatted with indentation
- Whitespace is automatically trimmed

## Permissions
- activeTab: Required to access the current webpage's content
- contextMenus: Required for right-click menu integration

## License

MIT License

## Author

ivanjurina@ivanjurina.com