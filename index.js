const { Command } = require('commander');
const axios = require('axios');

const program = new Command();

program
  .name('weather')
  .description('Get weather for a city')
  .version('1.0.0')
  .argument('<city>', 'City name')
  .action(async (city) => {
    try {
      const response = await axios.get(`https://wttr.in/${city}?format=j1`);
      const data = response.data;
      const current = data.current_condition[0];
      console.log(`Weather in ${city}: ${current.weatherDesc[0].value}, Temperature: ${current.temp_C}°C`);
    } catch (error) {
      console.error('Error fetching weather:', error.message);
    }
  });

program.parse();