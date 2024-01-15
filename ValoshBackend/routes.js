const express = require("express");
const router = express.Router();
const Agent = require('./models/Agent');
const cors = require("cors")
var app = express()

app.use(cors())

router.get("/agents", async (req, res) => {
	const agents = await Agent.find()
	res.send(agents)
})

router.get("/map", async (req, res) => {
	res.send('Hello World')
	// res.send(agents)
})


router.get("/agents/:id", async (req, res) => {
	const id = req.params.id;
	const query = await Agent.find({ AgentName: id });
	// const agents = await Agent.filter();
	res.send(query); 
})
router.get("/:id/map", async (req, res) => {
	const id = req.params.id;
	const query = await Agent.find({ AgentName: id });
	res.send(query[0].Maps);
})
router.get("/:id/map/:newid/image", async (req, res) => {
	const id = req.params.id;
	const newid = req.params.newid;
	const query = await Agent.find({ AgentName: id });
	const maps = query[0].Maps;
	const mapquery = await maps.filter((Qmap) => {return Qmap.name == newid})
	// const imgquery = await mapquery[0].image
	res.send(mapquery);
})

router.post("/agents", async (req, res) => {
	const agent = {
		AgentName: req.body.AgentName,
        AgentImage: req.body.AgentImage,
		AgentLink: req.body.AgentLink,
        Maps: req.body.Maps,
	}
	await Agent.create(agent);

	res.send({
		message: "agent was added succesfully."
	})
})

router.post("/agents/mapupdate/:id", async (req, res) => {

	const newMap = {
		name: req.body.name,
        image: req.body.image,
        link :req.body.name,
        Books:[{
            Type:req.body.Type,
            plays:req.body.plays
        }],
        inPool :req.body.inPool

	}
	const id = req.params.id;
	await Agent.findOneAndUpdate(
		{ AgentName: id }, 
		{ $push: { Maps: newMap  }}
	
	)
	// const query = await Agent.find({ AgentName: id })
	// query.Maps.push(newMap) 
	// query.save(done)
	res.send({
		message: "agent was added succesfully."
	})
})

module.exports = router;