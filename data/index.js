const dataImages = {
  items: [
    `https://res.cloudinary.com/meet2move/image/upload/c_fill,h_50,w_50/v1553538364/users/avatar/a26002a2-b534-4ae7-979c-df6647760eb6`,
    `https://res.cloudinary.com/meet2move/image/upload/c_fill,h_50,w_50/v1553538364/users/avatar/4747f32e-208d-459b-8320-58dadc6aff86`,
    `https://res.cloudinary.com/meet2move/image/upload/c_fill,h_50,w_50/v1568184374/users/avatar/2a5acaaf-10d4-4dbe-8990-c5e1850229eb`,
    `https://res.cloudinary.com/meet2move/image/upload/c_fill,h_50,w_50/v1550945647/users/avatar/b905b4ea-c35a-4e8f-bb46-1ad4d0aace4b`,
    `https://res.cloudinary.com/meet2move/image/upload/c_fill,h_50,w_50/v1567542048/users/avatar/b86ad29f-e998-4ef5-84d5-1cc99d9eabf7`,
    `https://res.cloudinary.com/meet2move/image/upload/c_fill,h_50,w_50/v1567542048/users/avatar/b86ad29f-e998-4ef5-84d5-1cc99d9eabf7`
  ]
}

const returnUserImage = (idx) => {
  return `${dataImages.items[idx]}`
}

const patients = [{
  name: `Ted R.`,
  img: returnUserImage(1)
},{
  name: `Nancy W.`,
  img: returnUserImage(2)
},{
  name: `Paula C.`,
  img: returnUserImage(3)
},{
  name: `Serud A`,
  img: returnUserImage(4)
},{
  name: `Karol M`,
  img: returnUserImage(5)
}]

const doctors = [{
  name: `Dr Neil Mortimer`,
  img: returnUserImage(1),
  skills: ["Dermatologist", "Endocrinologist", "Ophtalmologist"]
},{
  name: `Dr Paul Salmon`,
  img: returnUserImage(2),
  skills: ["Ophthalmologist", "Cardiologist"]
},{
  name: `Dr Peggy Chen`,
  img: returnUserImage(3),
  skills: ["Pediatrician", "Dermatologist"]
},{
  name: `Dr Sandra Winhoven`,
  img: returnUserImage(4),
  skills: ["Gastroenterologist", "Plastic surgeon"]
},{
  name: `Dr Susan Simpkin`,
  img: returnUserImage(5),
  skills: ["Gastroenterologist"]
}]

const skills = ["Cardiologist", "Dermatologist", "Endocrinologist", "Gastroenterologist", "Ophthalmologist", "Pediatrician", "Plastic surgeon"]

module.exports = {
  doctors,
  patients,
  skills
}