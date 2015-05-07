class AddInputToSourcecodes < ActiveRecord::Migration
  def change
    add_column :sourcecodes, :input, :text
  end
end
