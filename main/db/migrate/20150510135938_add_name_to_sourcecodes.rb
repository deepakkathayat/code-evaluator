class AddNameToSourcecodes < ActiveRecord::Migration
  def change
    add_column :sourcecodes, :name, :string
  end
end
