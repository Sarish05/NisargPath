import express from "express"
import { getAllDestinationsHandler, getRecentDestinationsHandler , deleteDestinationHandler , updateDestinationsHandler,addDestinationHandler } from "../Controllers/destinationHandler.js";
import { upload } from "../Utils/cloudConfig.js";
const destinationRouter = express.Router()

destinationRouter.get("/all",getAllDestinationsHandler);


destinationRouter.get("/recent",getRecentDestinationsHandler);

destinationRouter.delete("/deletedestn/:id",deleteDestinationHandler);

destinationRouter.post("/adddestn",upload.array('images'),addDestinationHandler);

destinationRouter.post("/updatedestn/:id",upload.array('images'),updateDestinationsHandler);


export default destinationRouter;