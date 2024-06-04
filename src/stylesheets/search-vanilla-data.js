import Airtable from 'airtable'
const token =
  'patuwGKu5LiNXefyn.5baf3c1e0d622caaeecca41956e6d03a5f036d0fabfff39b035f1b101dac1af5'
let Airtable = require('airtable')
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'YOUR_SECRET_API_TOKEN'
})

let base = new Airtable({ apiKey: 'YOUR_SECRET_API_TOKEN' }).base(
  'app1kliAhm9eLeUl5'
)

base('Table 1')
  .select({
    maxRecords: 60,
    view: 'Grid view'
  })
  .eachPage(
    function page(records, fetchNextPage) {
      records.forEach(function (record) {
        console.log('Retrieved', record.get('Title'))
      })

      fetchNextPage()
    },
    function done(err) {
      if (err) {
        console.error(err)
        return
      }
    }
  )
