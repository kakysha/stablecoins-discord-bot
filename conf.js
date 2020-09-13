"use strict";
const path = require('path');
require('dotenv').config({ path: path.dirname(process.mainModule.paths[0]) + '/.env' });

exports.bServeAsHub = false;
exports.bLight = true;

exports.discord_token = process.env.discord_token;
exports.discord_channels = [process.env.channel];

exports.hub = process.env.testnet ? 'obyte.org/bb-test' : 'obyte.org/bb';
exports.explorer_base_url = process.env.testnet ? 'https://testnetexplorer.obyte.org/#' : 'https://explorer.obyte.org/#';
exports.stablecoins_base_url = process.env.testnet ? 'https://stable.twoogi.ru/trade/' : 'https://explorer.obyte.org/#';

exports.factory_aa = process.env.testnet ? "RR4B5QDWFR6ISAIA7RPDH5O3QQZYOIWK" : "RR4B5QDWFR6ISAIA7RPDH5O3QQZYOIWK";
exports.curve_base_aa = process.env.testnet ? "ZQENBYPGFZM2DYFM3OJAONMXC7UOVD4W" : "ZQENBYPGFZM2DYFM3OJAONMXC7UOVD4W";
exports.governance_base_aa = process.env.testnet ? "ZSSB477GSV4EXYGFI73SOL6HWGQ4B74K" : "ZSSB477GSV4EXYGFI73SOL6HWGQ4B74K";
exports.deposit_base_aa = process.env.testnet ? "X7FWWFNENQP5VN77JTAZQ7DTCHZEYXEQ" : "X7FWWFNENQP5VN77JTAZQ7DTCHZEYXEQ";
exports.token_registry_aa_address = process.env.testnet ? "O6H6ZIFI57X3PLTYHOCVYPP5A553CYFQ" : "O6H6ZIFI57X3PLTYHOCVYPP5A553CYFQ";

console.log('finished server conf');
