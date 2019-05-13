console.log('hello');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
    	var instruction = input.toString().trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
                process.stdout.write('\r\nNode Version: ' + nodeVersion + '\r\nYour language: ' + userLanguage);
        };
    }
});