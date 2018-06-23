'use strict'

const { test } =  require('tap')
const { MongoClient } = require('mongodb')

const MONGO_URI = 'mongodb://127.0.0.1:27017,127.0.0.1:27018/test?replicaSet=testReplicaSet'

test('Smoke', t => {
  t.plan(4)

  MongoClient(MONGO_URI, { useNewUrlParser: true }, function (err, client) {
    t.error(err)
    t.ok(client)

    const db = client.db('test')
    const col = db.collection('testCollection')

    col.insertOne({ a: 1 }, (err, res) => {
      t.error(err)
      t.equal(1, res.insertedCount)
    })
  })
})
