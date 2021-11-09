class CreateReviewConditions < ActiveRecord::Migration[5.2]
  def change
    create_table :review_conditions do |t|
      t.integer :condition_id, null: false 
      t.integer :review_id, null: false
    end
    add_index :review_conditions, :condition_id
    add_index :review_conditions, :review_id
  end
end
