# Infinite medicare Hospital Management  Web Application
An hospital management web application for a modern day hospital using React for the user interface components, Tailwind CSS for styling of the components and the Redux Toolkit for state management.

Payments for appointments are processed with Paystack and successful appointment bookings are saved to the database attached with details of the appointment made which the admin has the ability to add a consultation report after each appointment

The images for the products are uploaded to Firebase's storage and the URL address saved to the database, this greatly improves the response time of the web application and relieves the database the burden of handling the image uploads. 

The user has a user panel from were they can track their appointments and prescriptions that have been issued tot them by the doctor

For the icons, the Material UI library icons were used as they have a low build size, the slides on the reviews section were made with the Swiper Js library and the validation of forms are done with the aid of the react-hook-form library.

The backend is handled using the Node.js runtime environment with Express as the server and MongoDB for the database management. The token for the logged in users is created and signed using JsonWebToken and the passwords are hashed with the Advanced Encryption Standard provided by the CryptoJs library.`
## Demo

`The link to the live website:`

https://infinitemedicare.netlify.app
## Tech Stack

**Client:** React, Redux Toolkit, Tailwind CSS, Paystack, Firebase Storage

**Server:** Node, Express, MongoDB


## Features

- Paystack payment processing
- State management with the Redux Toolkit
- Tailwind CSS
- React Frontend
- Authentication using JWT
- Admin & User Login System
- Images upload to the firebase cloud storage
- Node.js Backend




## Installation

Make sure you have Node.js installed and then proceed to execute this command in the terminal

```bash
  npm i
```
    
## Environment Variables

Create an account on mongodb.com and create a new cluster, then set the env value of:

```javascript
CONNECTION_URL = to the name of yout atlas database

```

For management of the sessions, set an env variable

```javascript
AUTH_SECRET = any_secret_key_of_your_choice

```


## Usage/Examples

`An hospital management solution using paystack for payment processing`
## Screenshots
`The Hero Section`
![infiniteHeaderIG](https://user-images.githubusercontent.com/84836053/183029268-6a4c4429-ba80-4085-adb3-e8dc3c75b230.png)

`The Login Section`
![infiniteMedicareLogin](https://user-images.githubusercontent.com/84836053/183029344-53efcbbc-a335-4890-9086-0c9a4026c243.png)


`The Services Section`
![servicesIgPost](https://user-images.githubusercontent.com/84836053/183029415-d52a0fea-8bcb-4a18-a132-1d45da169a4e.png)


`The StaffPage`!
[staff](https://user-images.githubusercontent.com/84836053/183029563-6ed063dd-f1fd-4ab6-9010-e413d531fcab.png)





## Contributing

Contributions are highly appreciated!

`Kindly send a pull request and I will review them with immediate effect`

