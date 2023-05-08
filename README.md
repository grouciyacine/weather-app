# Weather App

This is a mobile application built with React Native and TypeScript that displays current weather information based on user's location. It uses the OpenWeather API to fetch weather data.

## Features

- Displays current temperature, weather conditions, humidity, and wind speed
- Displays weather icon based on current weather conditions
- Automatically detects user's location and displays weather information for that location
- Option to manually search for weather information for any location by entering the city name or zip code
- Option to switch between Celsius and Fahrenheit units
- Error handling for when weather information cannot be fetched
- Simple and easy-to-use user interface

## Getting Started

To get started with this app, follow these steps:

1. Clone this repository to your local machine:

```
git clone https://github.com/your-username/weather-app.git
```

2. Install the required packages using npm:

```
npm install
```

3. Create a `.env` file in the root directory of the project and add your OpenWeather API key in the following format:

```
API_KEY=your-api-key
```

4. Run the app on your emulator or physical device:

```
npx react-native run-android
```

## Dependencies

This app uses the following dependencies:

- `react`: JavaScript library for building user interfaces
- `react-native`: Framework for building native mobile applications using React
- `react-native-geolocation-service`: Library for accessing device geolocation
- `react-native-vector-icons`: Library for using vector icons in React Native
- `axios`: Library for making HTTP requests
- `dotenv`: Library for loading environment variables from a `.env` file

## Screenshots

![Screenshot 1](/screenshots/screenshot1.png)

![Screenshot 2](/screenshots/screenshot2.png)

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
