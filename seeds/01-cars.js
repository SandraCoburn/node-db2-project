exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "TestVinNumber2",
          make: "Chrysler",
          model: "Concord",
          mileage: 60354,
          transmission: "auto",
          title: "clean"
        },
        {
          VIN: "TestVinNumber3",
          make: "Chrysler",
          model: "Concord",
          mileage: 60354,
          transmission: "auto",
          title: "clean"
        },
        {
          VIN: "TestVinNumber4",
          make: "Nissan",
          model: "Sentra",
          mileage: 20354,
          transmission: "auto",
          title: "salvage"
        }
      ]);
    });
};
