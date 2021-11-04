class ChangeAddColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :parks, :directions, :text
    add_column :trails, :duration, :string
  end
end
