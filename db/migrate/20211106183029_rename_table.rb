class RenameTable < ActiveRecord::Migration[5.2]
  def change
    rename_table :hike_descriptors, :trail_descriptors
    rename_column :trail_descriptors, :hike_id, :trail_id
  end
end
