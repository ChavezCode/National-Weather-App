# Weatherapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

## Information about the National Weather Web Application

The National Weather web application takes in city/town and state information and uses an OpenStreetMap API that converts the location of interest, into its latitudinal and longitudinal coordinates. After the coordinates have returned successfully for the given city/town and state, a National Weather Service API is used, which requires coordinates, to return forecast data for the selected location.

Note: The current version of this application only returns valid data for towns or cities. For example, beach towns are often categorized as 'Beach' or 'Villages', hence the reason why searching up a place like 'Cannon Beach' in Oregon returns an invalid input statement.




## How to run this application:

## Running the application

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.