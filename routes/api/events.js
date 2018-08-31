const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/api/events"
router
    .route("/")
    .get(eventsController.findAllEvents)
    .post(eventsController.createEvent);

// Matches with "/api/events/:id"
router
    .route("/:id")
    .get(eventsController.findEventById)
    .put(eventsController.updateEvent)
    .delete(eventsController.removeEvent);

router
    .route("/create")
    .post(eventsController.createEvent);

// Do this in controller
// router 
//     .route("/invite")
//     .post(eventsController.Invitation)

module.exports = router;
