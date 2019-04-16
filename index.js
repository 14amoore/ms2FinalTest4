console.log(`Let's see what we get!`);

const Twit = require("twit");
const config = require("./config.js");
const say = require("say");
const Sentiment = require("sentiment");
const player = require("play-sound")((opts = {}));

const T = new Twit(config);
