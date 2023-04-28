# Chrome Extension: File Loading Bypass

This Chrome extension allows users to bypass the loading of specific files on a webpage. It is a lightweight and easy-to-use tool that can help improve browsing speed and reduce data usage.

## Installation

To install the extension, follow these steps:

1. Download the extension from [GitHub](https://github.com/danial-zo/bypass-files-chrome-extension/archive/refs/heads/main.zip).
2. Unzip the downloaded file.
3. Open Google Chrome and go to the Extensions page by typing `chrome://extensions/` in the address bar.
4. Enable developer mode by toggling the switch in the top right corner.
5. Click the "Load unpacked" button in the top left corner and select the unzipped extension folder.

## Usage

To use the extension, simply navigate to a webpage where you would like to bypass the loading of specific files. Click the extension icon in the top right corner of the browser window to open the popup.

In the popup, you can specify the file types that you want to bypass by entering the file extensions separated by commas. For example, to bypass loading images and videos, enter `'js', 'css', 'jpg', 'jpeg', 'png', 'gif', 'svg', 'webp', 'mp4', 'webm'` in the input field.

You can also exclude specific websites from the file loading bypass by adding them to the `exclude-list.txt` file. To do this, follow these steps:

1. Open the `exclude-list.txt` file in a text editor.
2. Add the URLs of the websites you want to exclude, one per line.
3. Save the file.

When you visit a website that is listed in the `exclude-list.txt` file, the extension will not bypass the loading of files.

Click the "Save" button in the extension popup to apply your changes. The extension will immediately start bypassing the loading of the specified files on the current webpage.

To disable the extension, simply click the extension icon again and click the "Disable" button in the popup.

## Contributions

Contributions to the project are welcome. To contribute, simply fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.