var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.airtable_api_key}).base('appZkOuyJHvk7kfLu');

let prompt_obj = {};
base('Generations').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Waiting for generation"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
    let record = records[0];
    prompt_obj = {
      id: record.id,
      prompt: record.get("Prompt")
    }

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
