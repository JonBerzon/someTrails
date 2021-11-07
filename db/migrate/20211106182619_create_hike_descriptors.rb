class CreateHikeDescriptors < ActiveRecord::Migration[5.2]
  def change
    create_table :hike_descriptors do |t|
      t.integer :hike_id, null: false 
      t.integer :descriptor_id, null: false
    end
  end
end
