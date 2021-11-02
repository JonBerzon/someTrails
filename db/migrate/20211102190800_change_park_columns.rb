class ChangeParkColumns < ActiveRecord::Migration[5.2]
  def change 
    rename_column :parks, :latitutde, :latitude
    change_column :parks, :latitude, :float
    change_column :parks, :longitude, :float



  end
end
