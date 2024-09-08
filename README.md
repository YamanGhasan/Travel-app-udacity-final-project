```markdown
# 🌍 Travel

Travel is a web application designed to help you plan your trips by providing information about various destinations. With Travely, you can get weather forecasts, images, and more details about your next adventure.

## 🎯 Features

- **🌆 City Search**: Enter a city name to get weather information and an image of the destination.
- **📅 Date Selection**: Choose a date to see how many days are left until your trip.
- **🌦️ Weather Forecast**: Get the current weather and forecast for the selected destination.
- **🖼️ Destination Images**: View images related to the destination from Pixabay.

## 🛠️ Technologies Used

- **HTML**: For structuring the content.
- **CSS**: For styling the user interface.
- **JavaScript**: For handling user interactions and API calls.
- **Node.js**: Version 20.15.1 - for backend server operations.
- **[Geonames API](http://www.geonames.org/)**: To fetch geographical data about cities.
- **[Weatherbit API](https://www.weatherbit.io/account/create)**: To get weather forecasts and current weather data.
- **[Pixabay API](https://pixabay.com/api/docs/)**: To retrieve images related to the destination.

## 🔑 API Keys

Replace the placeholders in the following files with your own API keys:

- **`callGeonamesApi.js`**
- **`callWeatherbitApi.js`**
- **`callPixabayApi.js`**

- **Geonames API**: Sign up [here](http://www.geonames.org/) to get an API key.
- **Weatherbit API**: Get an API key [here](https://www.weatherbit.io/account/create).
- **Pixabay API**: Obtain an API key [here](https://pixabay.com/api/docs/).

## 💻 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/YamanGhasan/Travel-app-udacity-final-project.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Travel-app-udacity-final-project
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up API keys:**

   Update the API keys in the `callGeonamesApi.js`, `callWeatherbitApi.js`, and `callPixabayApi.js` files with your actual API keys.

## 🚀 Build

To build the project for production, run:

```bash
npm run build
```

This will compile the source code into a production-ready build, which will be placed in the `dist` (or equivalent) directory.

## 🚀 Usage

1. **Open `index.html` in your browser.**
2. **Enter a city name and a date in the provided fields.**
3. **Click the "Generate" button to get information about your destination, including weather details and images.**

## 🛠️ Troubleshooting

- **API Errors**: Ensure that your API keys are correct and not expired. Check the API documentation for any changes.
- **UI Issues**: Make sure your HTML and CSS files are correctly linked. Clear your browser cache if necessary.

## 🤝 Contributing

Feel free to open issues and submit pull requests if you find bugs or want to contribute new features.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- **Geonames API**: For providing geographical data.
- **Weatherbit API**: For weather forecasts and current weather data.
- **Pixabay API**: For images related to destinations.

![alt text](<Screenshot 2024-09-07 130915.png>)
![alt text](<Screenshot 2024-09-07 131017.png>)
![alt text](<Screenshot 2024-09-07 131036.png>)
```