#!/usr/bin/env node

const args = process.argv;
if (args[2] == '-h' || args[2] == '--help') {
    console.log('react-env-gen');
    console.log('Usage: react-env-gen');
    console.log('Description: Command will read .env file and generate env-config.js file based on .env file content');
    console.log('Sample output file (env-config.js):');
    console.log('   windows._env_ = {');
    console.log('       "SERVER": "localhost",');
    console.log('       "USERNAME": "user1",');
    console.log('       "PASSWORD": "p01"');
    console.log('   }');
    console.log('');

} else if (args.length>2) {
    console.log('Unknown arguments! Please use --help to get help.');

} else {

    const fs = require('fs');
    try
    {  
        let json = '// Generated by react-env-gen \r\n' +
                'window._env_ = {\r\n';

    if (!fs.existsSync('.env')) {
        console.log('.env file does not exist!');
    } else {
        const allLines = fs.readFileSync('.env', 'utf8');
        const lines = allLines.split(/\r?\n/);
        let i = 0;
        let count = lines.length;
        for(i=0;i<count;i++) {
            const line = lines[i];
            const [varname, varvalue] = line.split('=');
            if ((varname ?? '').trim() == '') {
                continue;
            }

            json += `   "${varname}":"${varvalue}"`;
            if (i<(count-1)) {
                json +=',\r\n';
            }
        }

        console.log('env-config.js file is succesfully created');
    }

    json += '\r\n};';

    fs.writeFileSync("env-config.js", json);

    } catch (err) {
        console.error(err);
    }
}
