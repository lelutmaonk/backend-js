const {Client} = require('pg')

const client = new Client({
    host : "ep-wild-meadow-a170n40q.ap-southeast-1.aws.neon.tech",
    user : "testing_owner",
    port : 5432,
    password : "CM6sLmHU5ZBR",
    database : "testing",
    ssl: {
        rejectUnauthorized: true
    }
})

module.exports = client