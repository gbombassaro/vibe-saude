const chai = require('chai')
const chaiHttp = require('chai-http')
const {expect} = chai
chai.use(chaiHttp)

const api_path = `http://localhost:3001`

describe('test server.js', () => {
  it('connect api-mock', (done) => {
    chai.request(api_path)
      .get('/api/status')
      .end((err, res) => {
        expect(res.status).to.be.eq(200)
        expect(res.body).to.be.a('object')
        expect(res.body.status).to.be.a('string')
        expect(res.body.status).to.be.eq('OK')
        done()
      })
  })
})