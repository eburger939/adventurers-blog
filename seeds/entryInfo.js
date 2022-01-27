const { Entries } = require('../models');

const entryData = [
    {
        title: 'Favorite places to travel',
        text: 'My favorite places to travel are any where warm such as Mexico, Puerto Rico, St. Kitts, or Jamaica!  I also loved Europe and hope to visit again soon!',
        user_id: 2,
    },
    {
        title: 'Favorite breweries in Richmond, VA',
        text: 'Stone Brewing Tap Room,  Main Line, Hardywood, Richbrau, Strangeways, and The Veil',
        user_id: 1,
    },
    {
        title: 'My bucketlist',
        text: 'Travel to all the Disney World/Lands, see the North Lights, travel to Australia, stay in an igloo house in Finland, go on an Alaskan cruise',
        user_id: 3,
    },
    {
        title: 'Best NFL football teams',
        text: 'NY Giants, Green Bay Packers, New England Patriots, Kansas City Chiefs, Denver Broncos',
        user_id: 4,
    },
];

const seedEntries = () => Entries.bulkCreate(entryData);
module.exports = seedEntries