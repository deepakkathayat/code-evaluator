class AddSampleinputaToSourcecodes < ActiveRecord::Migration
  def change
    add_column :sourcecodes, :sampleinputa, :text
  end
end
