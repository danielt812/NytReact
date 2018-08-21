// Require express router and controllers
const router = require("express").Router();
const controller = require("../../controllers/controller");

// ORMs that don't require id
router.route("/")
    .get(controller.findAll)
    .post(controller.create);

// ORMs that require id
router.route("/:id")
    .get(controller.findOne)
    .put(controller.update)
    .delete(controller.remove);

module.exports = router;