exports.up = async function(knex) {
    await knex.schema.createTable("property_list", (tbl) => {
        tbl.increments("id");
        tbl.string("name");
        tbl.string("type");
        tbl.text("description");
        tbl.string("finishing_type");
        tbl.string("view");
        tbl.string("bathroom");
        tbl.string("price");
        tbl.string("payment");
        tbl.string("advertiser_type");
        tbl.string("level");
        tbl.timestamp("createdAt").defaultTo(knex.fn.now());
        tbl.boolean("active").defaultTo(true);
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("property_list");
};