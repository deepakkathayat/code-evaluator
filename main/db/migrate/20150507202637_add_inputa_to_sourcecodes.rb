class AddInputaToSourcecodes < ActiveRecord::Migration
  def change
    add_column :sourcecodes, :inputa, :text
  end
end
