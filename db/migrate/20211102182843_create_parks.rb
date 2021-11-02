class CreateParks < ActiveRecord::Migration[5.2]
  def change
    create_table :parks do |t|
      t.string :name, null: false
      t.integer :latitutde, null: false
      t.integer :longitude, null: false
      t.text :description, null: false 
      t.integer :acreage, null: false
      t.string :country, null: false 
      t.string :state, null: false 
      t.timestamps 
    end
    add_index :parks, :name
  end
end
