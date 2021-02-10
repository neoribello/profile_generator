const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (answer) => {
  console.log(`Oh, your name is ${answer}`);

  rl.question('What\'s an activity you like doing? ', (answer) => {
    console.log(`Oh, I like ${answer} too`);

    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`Oh, I like listening to ${answer}`);

      rl.question('Which meal is your favourite? ', (answer) => {
        console.log(`Oh, ${answer} that sounds yummy!`);

        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          console.log(`Oh, ${answer}. I'd like that right now`);
          
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            console.log(`I love watching ${answer}`);

            rl.question('What is your superpower? ', (answer) => {
              console.log(`Wow! ${answer} thats a cool superpower`);
      
              rl.close();
            });
          });
        });
      });
    });
  });
});