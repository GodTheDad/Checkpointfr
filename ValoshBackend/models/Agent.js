const mongoose = require('mongoose');

const AgentSchema = mongoose.Schema({
    AgentName: String,
    AgentImage: String,
    AgentLink: String,
    Maps: [{
        name: String,
        image: String,
        link :String,
        Books:[{
            Type:String,
            plays:String
        }],
        inPool :Boolean,
    }], 
});



module.exports = mongoose.model('Agent', AgentSchema);