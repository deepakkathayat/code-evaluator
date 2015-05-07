class AddOutputToSourcecodes < ActiveRecord::Migration
  def change
    add_column :sourcecodes, :output, :text
  end
end
