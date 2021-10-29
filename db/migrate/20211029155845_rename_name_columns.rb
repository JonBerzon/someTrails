class RenameNameColumns < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :first_name, :fname
    rename_column :users, :last_name, :lname

  end
end
