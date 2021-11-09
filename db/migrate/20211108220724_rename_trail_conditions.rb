class RenameTrailConditions < ActiveRecord::Migration[5.2]
  def change
    rename_table :trail_conditions, :conditions
  end
end
