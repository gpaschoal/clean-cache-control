import request from 'supertest'
import app from '../config/app'

describe('CORS Middleware', () => {
  test('Should enable CORS', async () => {
    app.get('/test_cors', (req, res) => {
      res.send()
    })
    await request(app)
      .post('/test_cors')
      .expect('accesss-control-allow-origin', '*')
      .expect('accesss-control-allow-methods', '*')
      .expect('accesss-control-allow-headers', '*')
  })
})
