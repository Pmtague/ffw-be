exports.up = function(knex) {
    return knex.schema.createTable('locations', locations => {
      locations.increments();
  
      locations
        .float('latitude')
        
      locations
        .float('longitude')
    
      locations
        .string('address', 128)
        .notNullable();  

      locations
          .integer('user_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onDelete('CASCADE') // what happens if the user is deleted
          .onUpdate('CASCADE'); // what happens if the id of the user changes
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('locations');
  };