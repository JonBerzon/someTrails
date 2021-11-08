class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :trail_id, null: false
      t.date :date, null: false 
      t.text :description
      t.integer :rating, null: false
    end
    add_index :reviews, :user_id
    add_index :reviews, :trail_id
  end
end
