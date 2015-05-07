class AddSampleinputToSourcecodes < ActiveRecord::Migration
  def change
    add_column :sourcecodes, :sampleinput, :text
  end
end
