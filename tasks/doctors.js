const {map} = require('lodash')
const chai = require('chai')
const chaiHttp = require('chai-http')
const {expect} = chai
chai.use(chaiHttp)

const api_path = `http://localhost:3000`

describe('test load doctors', () => {
  it('list doctors', (done) => {
    chai.request(api_path)
      .get('/api/doctors/list')
      .end((err, res) => {
        expect(res.status).to.be.eq(200)
        expect(res.body).to.be.a('object')
        expect(res.body.status).to.be.a('string')
        expect(res.body.status).to.be.eq('OK')
        expect(res.body.items).to.be.a('array')
        map(res.body.items, (item) => console.log(`doctors.list ${item.name}`))
        done()
      })
  })
})