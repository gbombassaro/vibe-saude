const {map} = require('lodash')
const chai = require('chai')
const chaiHttp = require('chai-http')
const {expect} = chai
chai.use(chaiHttp)

const api_path = `http://localhost:3001`

describe('test load doctors', () => {
  it('list doctors', (done) => {
    chai.request(api_path)
      .post('/api/doctors/list')
      .send({})
      .end((err, res) => {
        expect(res.status).to.be.eq(200)
        expect(res.body).to.be.a('object')
        expect(res.body.status).to.be.a('string')
        expect(res.body.status).to.be.eq('OK')
        expect(res.body.items).to.be.a('array')
        done()
        map(res.body.items, (item) => console.log(`${item.name} ${item.skills.toString()}`))
      })
  })
  it('filter doctors by name: Dr. S', (done) => {
    chai.request(api_path)
      .post('/api/doctors/list')
      .send({"name": "Dr S"})
      .end((err, res) => {
        expect(res.status).to.be.eq(200)
        expect(res.body).to.be.a('object')
        expect(res.body.status).to.be.a('string')
        expect(res.body.status).to.be.eq('OK')
        expect(res.body.items).to.be.a('array')
        done()
        map(res.body.items, (item) => console.log(`${item.name} ${item.skills.toString()}`))
      })
  })
  it('filter doctors by skill: Ophthalmologist', (done) => {
    chai.request(api_path)
      .post('/api/doctors/list')
      .send({"skills": "Ophthalmologist"})
      .end((err, res) => {
        expect(res.status).to.be.eq(200)
        expect(res.body).to.be.a('object')
        expect(res.body.status).to.be.a('string')
        expect(res.body.status).to.be.eq('OK')
        expect(res.body.items).to.be.a('array')
        done()
        map(res.body.items, (item) => console.log(`${item.name} ${item.skills.toString()}`))
      })
  })
  it('filter doctors by name: Dr. S and skill Plastic surgeon', (done) => {
    chai.request(api_path)
      .post('/api/doctors/list')
      .send({"name": "Dr S", "skills": "Plastic surgeon"})
      .end((err, res) => {
        expect(res.status).to.be.eq(200)
        expect(res.body).to.be.a('object')
        expect(res.body.status).to.be.a('string')
        expect(res.body.status).to.be.eq('OK')
        expect(res.body.items).to.be.a('array')
        done()
        map(res.body.items, (item) => console.log(`${item.name} ${item.skills.toString()}`))
      })
  })
})