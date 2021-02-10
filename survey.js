const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {};

const string = "Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times."

rl.question('What\'s your name? ', (name) => {
  profile.name = name;


  rl.question('What\'s an activity you like doing? ', (activity) => {
    profile.activity = activity;

    rl.question('What do you listen to while doing that? ', (music) => {
      profile.music = music;

      rl.question('Which meal is your favourite? ', (meal) => {
        profile.meal = meal;

        rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
          profile.food = food;
          
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            profile.sport = sport;

            rl.question('What is your superpower? ', (power) => {
              profile.power = power;

              console.log(`${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${power}."`)
      
              rl.close();
            });
          });
        });
      });
    });
  });
});


