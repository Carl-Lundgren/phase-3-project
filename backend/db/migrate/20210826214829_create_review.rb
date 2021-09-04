class CreateReview < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :score
      t.string :text
      t.integer :restaurant_id
    end
  end
end
