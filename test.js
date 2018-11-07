'use strict'

const { test } = require('tap')
const { MongoClient } = require('mongodb')

const MONGO_URI = 'mongodb://127.0.0.1:27017,127.0.0.1:27018/test?replicaSet=rs0'

test('Smoke', t => {
  t.plan(6)

  MongoClient.connect(MONGO_URI, { useNewUrlParser: true }, function (err, client) {
    t.error(err)
    t.tearDown(() => client.close())

    t.ok(client)

    const db = client.db('test')
    t.ok(db)

    const col = db.collection('testCollection')
    t.ok(col)

    col.insertOne({ a: 1 }, (err, res) => {
      t.error(err)
      t.equal(1, res.insertedCount)
    })
  })
})
