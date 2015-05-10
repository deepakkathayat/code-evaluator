class AddNsubsToSourcecodes < ActiveRecord::Migration
  def change
    add_column :sourcecodes, :nsubs, :integer
  end
end
