# Weatherapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

## Information about the National Weather Web Application

The National Weather web application takes in city/town and state information and uses an OpenStreetMap API that converts the location of interest, into its latitudinal and longitudinal coordinates. After the coordinates have returned successfully for the given city/town and state, a National Weather Service API is used, which requires coordinates, to return forecast data for the selected location.
<video controls src="src/app/Searching City.mp4" title="Title"></video>

Note: The current version of this application only returns valid data for towns or cities. For example, beach towns are often categorized as 'Beach' or 'Villages', hence the reason why searching up a place like 'Cannon Beach' in Oregon returns an invalid input statement.

<video controls src="src/app/Beach.mp4" title="Title"></video>

This application has three different pages, the about, contact and the main home page.

<video src="src/app/WeatherAppNav.mp4" title="Navigation" width=200>

## How to run this application:

1. Find or create a directory on your computer to copy the repository.
2. Clone the repository by running `git clone https://github.com/ChavezCode/National-Weather-App.git` in your IDE terminal.
3. Once the repo has been cloned, run `ng serve` in your terminal to run the application.
4. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
