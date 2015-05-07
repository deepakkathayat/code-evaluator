class AddOutputaToSourcecodes < ActiveRecord::Migration
  def change
    add_column :sourcecodes, :outputa, :text
  end
end
