class AddColumnsPark < ActiveRecord::Migration[5.2]
  def change
    add_column :parks, :contact, :string
    add_column :parks, :zoom, :integer
  end
end
