const fs = require('fs');
const path = require('path');
const { logMessage } = require('./task01.js'); 
const { time } = require('console');
const { randomUUID } = require('crypto');



describe('Logger Function', () => {
    

    test('should append log message to file', async () => {

        const fileName = "" + Math.floor(100000 + Math.random() * 900000);
        const message = "Test log message";
        const level = "INFO";
        const timestamp = await logMessage(fileName, message, level);
        
        const content = fs.readFileSync(fileName, 'utf8');
       
        expect(content).toContain(message);
        expect(content).toContain(level);
        expect(content).toContain(timestamp);

        fs.unlinkSync(fileName);
    });

    test('should validate if the timestamp is in the correct format', async () => {

        const fileName = "" + Math.floor(100000 + Math.random() * 900000);
        const message = "Test log message";
        const level = "INFO";

        await logMessage(fileName, message, level);
      
        const content = fs.readFileSync(fileName, 'utf8');
        
        const breakpoint = " "
        const regex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d{3})?Z$/ 
        const splitted = content.split(breakpoint)

        expect(splitted[0].replace(/\[|\]/g, "")).toMatch(regex)

        fs.unlinkSync(fileName);
        
        
      });


      test("should validate the whole format of the log line", async ()=>{
        const fileName = "" + Math.floor(100000 + Math.random() * 900000);
        
        const message = "Test log message";
        const level = "INFO";
        const timestamp = await logMessage(fileName, message, level);
        const expectedFormat = `[${timestamp}] [${level}] ${message}`

        const content = fs.readFileSync(fileName, 'utf8');

        const splitString = content.split("\n")
        const index = splitString.length - 2 

        expect(splitString[index] ).toEqual(expectedFormat.trim())
        fs.unlinkSync(fileName);
       

      });

      
      })
;