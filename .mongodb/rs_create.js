'use strict'

rs.initiate({
  _id: 'rs0',
  members: [
    {_id: 0, host: '127.0.0.1:27017'},
    {_id: 1, host: '127.0.0.1:27018'},
  ]
})

rs.status()
