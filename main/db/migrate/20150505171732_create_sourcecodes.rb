class CreateSourcecodes < ActiveRecord::Migration
  def change
    create_table :sourcecodes do |t|
      t.text :body
      t.timestamps null: false
    end
  end
end
