#!/usr/bin/env  node

import { execSync } from "child_process";

console.log("Hello @medyll");
const args = (process.argv).slice(2).join(' ')
execSync(`npx @medyll/dev-env ${args}`, { stdio: 'inherit' });
console.log("Bye @medyll");
