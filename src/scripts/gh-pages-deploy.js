// var exec = require('child_process').exec;
import { exec } from "child_process";

let execPromise = (cmd) => {
  return new Promise(function(resolve, reject) {
    exec(cmd, function(err, stdout) {
      if (err) return reject(err);
      resolve(stdout);
    });
  });
};

let commands = ["npm install", "echo 'hello'"];

commands
  .reduce(async (p, cmd) => {
    const results = await p;
    const stdout = await execPromise(cmd);
    results.push(stdout);
    return results;
  }, Promise.resolve([]))
  .then(
    (results) => {
      console.log("Successfully deployed", results);
    },
    (err) => {
      console.log("Failed!!!", err);
    }
  );
