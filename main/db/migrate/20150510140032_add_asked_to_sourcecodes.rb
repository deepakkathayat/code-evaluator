class AddAskedToSourcecodes < ActiveRecord::Migration
  def change
    add_column :sourcecodes, :asked, :string
  end
end
