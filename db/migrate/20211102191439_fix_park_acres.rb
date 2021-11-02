class FixParkAcres < ActiveRecord::Migration[5.2]
  def change
    change_column :parks, :acreage, :string
  end
end
