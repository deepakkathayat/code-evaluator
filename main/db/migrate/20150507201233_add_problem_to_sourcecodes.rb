class AddProblemToSourcecodes < ActiveRecord::Migration
  def change
    add_column :sourcecodes, :problem, :text
  end
end
