class CreateTrails < ActiveRecord::Migration[5.2]
  def change
    create_table :trails do |t|
      t.integer :park_id, null: false
      t.string :name, null: false 
      t.string :difficulty, null: false 
      t.text :description, null: false
      t.string :length, null: false 
      t.string :elevation, null: false
      t.string :route, null: false 
      t.float :latitude, null: false 
      t.float :longitude, null: false 
      t.integer :zoom, null: false 
      t.text :directions, null: false 
      t.timestamps 
    end
    add_index :trails, :park_id
  end
end
