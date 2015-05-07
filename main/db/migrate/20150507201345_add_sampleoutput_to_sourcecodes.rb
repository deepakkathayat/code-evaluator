class AddSampleoutputToSourcecodes < ActiveRecord::Migration
  def change
    add_column :sourcecodes, :sampleoutput, :text
  end
end
