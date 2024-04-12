const { randomUUID, randomInt } = require('crypto');
const fs = require('fs');
const path = require('path');


/**
 * Logs a message to a specified file with a timestamp and log level.
 *
 * @param {string} filename - The name of the file to log to.
 * @param {string} message - The log message.
 * @param {string} level - The log level (e.g., INFO, WARNING).
 */

 async function logMessage(filename, message, level) {

    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;

    fs.appendFileSync(filename, logEntry, (err) => {
        if (err) {
            console.error("Failed to write log message:", err);
        }
        
    });
    return timestamp.toString();
}

// Example usage
//logMessage(""+Math.floor(100000 + Math.random() * 900000), "User logged in", "INFO");
//logMessage("application.log", "Failed login attempt", "WARNING");

exports.logMessage = logMessage;