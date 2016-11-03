# 08-TopSpotsAngular-ErrorHandling

In this project, I retro-fit a previous app (Project 06) to handle errors and report various conditions to the UI.

This is the mockup:

<img src="http://i.imgur.com/4UU4Ye4.png" />

## Toastr
1. Installed angular-toastr using Bower

## Tasks
1. Injected the $q service into the factory, added an error handler method to the response routine and implemented the $q promise logic as demonstrated in class.
3. Added a custom error handler for the use case where no data was returned by the $http call.
4. Added a success toastr to the controller to render when the call completes without error.
5. Added an info toastr to the controller to render when the call completes but with no data returned.
6. Added an error toastr to the controller to render when the call errors out.
