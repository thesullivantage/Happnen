# Happnen © 
### [Deployed](https://aqueous-earth-83627.herokuapp.com/mapdisplay) 

---

### With Happnen, the simple yet versatile approach is taken when it comes to planning, attending, and finding events in your area. And with  new private event features, secure location sharing has never been so easy. 

---

## Description & How to Use:


#### 1. Create an account / Login:
* To actually log in (with the current bug), go to the lower right hand button
and click on the map button after logging in or 
creating an account

#### 2. View Map (Public Events)
 * Modals with event details can be accessed via side menu or by clicking on the pins themselves
 * Private/Invite Only events not displayed on the map; Invite Only event development in progress

#### 3. Create an Event
 * Enter all required fields (Event name, location, start date, and end date)
 * Encrypted event location functionality, for now, is only for private events
 * If your event is public (and in the future, invite only), you will see it on the map

 #### 4. Navigate to your Profile
 * Edit your profile photo and bio, using the save button to store each
 * Click on an event's respective button to see its detail modal
 * If it is an event that you created, you will see a different option than if you are an invitee 

## Problems/Issues [Include] (but are not limitied to):
* Neverending Callbacks (Refactor in Progress)
* Asynchronicity issue with storing basic session storage parameter (placeholder login functionality)
* Obvious speed Issues with Heroku
* Refactoring encrypted location controller functions to backend (Express middleware) from its current location (done in front end (within React components) for demo purposes)
* In need of an image hosting service
* Cannot click on same map pin twice sequentially
* Need to link functionality ([on profile]) for viewing public event locations (React component already in place)
* Create Event autofill issues
* React-Materialize UI aesthetic issues (general)

_Some of the above reflected in the issues section of this repository_

## Future Development:
* Refactor for Happnen mobile application
* Edit modal functionality for My Events
* Cancel event functionality
* See guests modal/view
* JWT incoorporation for signup, login, and identity verification
* Encrypted web traffic 
* Employ other encryption technology (i.e. Stanford Javascript Crypto Library)

## Tests:
##### _Building of tests in progress_ 

## Notable Technologies Utilized:

#### General: 
* MERN Stack
* Javascript
* Google Maps API <br/>

#### Front End: 
* React.js
* ECMAScript 6 ([ES6])
* HTML5
* Materialize CSS Library
* CSS3

#### Back End:
* Node.js
* Express.js
* Axios
* MongoDB (Mongoose ODM)
* Cryptr



## Contributors:
[Stats](https://github.com/thesullivantage/Happnen/graphs/contributors)
* Jack Sullivan
* Aaron Endelman
* Kyle Behm
* Wyatt Simpson
* Patrick Joyce
