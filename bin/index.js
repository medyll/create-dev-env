#!/usr/bin/env  node

console.log("Hello @medyll");
const args = (process.argv).slice(2).join(' ')
execSync(`npx @medyll/dev-env ${args}`);
