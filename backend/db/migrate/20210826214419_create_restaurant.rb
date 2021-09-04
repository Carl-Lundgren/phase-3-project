class CreateRestaurant < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.integer :location_id
    end
  end
end
