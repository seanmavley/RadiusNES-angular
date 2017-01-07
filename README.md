# RadiusNES

This repository is the Angular JS part of the RadiusNES Stack. 

RadiusNES is a DaloRADIUS-like implementation using Node-radius as server, Express JS as API and AngularJS 2 on the front-end and MongoDB as database backend.

## Why this stack?

 - Node-radius: A lightweight, nodejs based RADIUS technology implementation
 - ExpressJS: Converts the entire communication with the server into API, thus allowing whatever to consume. 
 - AngularJS 2: I'm simply familiar with Angular 2. That's all. It could be HapiJS, React or whatnot.
 - MongoDB: Because, well, can you suggest any all-round better for this slot?

The idea behind the stack is to ensure an entire decoupling of the moving parts, especially the frontend from the backend. Therefore, with your ExpressJS plugged into Node-radius, you have a RADIUS server serving requests via API.

You throw behind a MongoDB backend, and you can do the 'Hotspotlogin' thing and manage network users.

The AngularJS provides a seamless browser interface for communicating with the above. At anytime, you can scratch it off and use whatever comes in two weeks time to overthrow AngularJS (will that happen?)

## What is here?

This repository will house what we've come to love as the DaloRADIUS administrator pages, where creating users, seeing logged in users, creating and assigning profiles and more.

In addition, the front-facing 'Hotspotlogin' page will be here for users wanting to use the network to authenticate.

## Structure

There are 3 modules:

 1) Admin Module: This module is responsible for doing something similar to what the DaloRADIUS Administrator pages do. 
 2) Radius Module: The hotspotlogin and its related pages: Self-provisioning, Voucher or Merchant forms of authentication will be here.
 3) Pages Module: This module will be available should you want to extend and add About, Contact, Help and whatnot pages.

Each module, will have components, of which will handle specific tasks. So, for example, the Admin module has a Login Component which handles, well, Login into the Administrator dashboard.

## Front-end Framework

It is bootstrap. You don't like it, just `npm install` whatever you want, say Foundation Zurb, and update the `styles` parameter in `angular-cli.json` in the root directory, then rebuild the project.

## License

I don't know at the moment. What License do you suggest? It's definitely Open Source though.