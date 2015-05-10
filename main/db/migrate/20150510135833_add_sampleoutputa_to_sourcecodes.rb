class AddSampleoutputaToSourcecodes < ActiveRecord::Migration
  def change
    add_column :sourcecodes, :sampleoutputa, :text
  end
end
