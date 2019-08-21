'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('kosts', [{
      title: 'Permata Bintaro Residence',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      address: 'Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413',
      location: '-6.301576,106.7351054',
      type: 'PUTRA',
      large: '3,4',
      totalRoom: 5,
      emptyRoom: 3,
      price: 2000000,
      facilities: 'Kasur,Lemari,Wifi,Kamar Mandi,Dapur,Parkir',
      bathroom: 'LUAR',
      image1: 'Assets/Images/bandung.jpg',
      image2: 'Assets/Images/medan.jpg',
      image3: 'Assets/Images/jakarta.jpg',
      createdBy: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
