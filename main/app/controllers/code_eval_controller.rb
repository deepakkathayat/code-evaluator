require 'rubygems'
require 'bundler'
require 'ideone'

class CodeEvalController < ApplicationController
  respond_to :html, :js
  def index
    @base_template = "#include<iostream>\n#include<cstring>\n#include<cstdlib>\n#include<map>\n#include<vector>\n#include<set>\n#include<queue>\n#include<cmath>\n#include<algorithm>\n\nusing namespace std;\n\nclass Solution {\n   public:\n               vector<int> plusOne(vector<int> &digits) {\n                    // WRITE YOUR CODE HERE\n               }\n};\n\nint main() {\n Solution obj;\n int numDigits; \n       cin>>numDigits;\n       int tmp;\n      vector<int> digits;\n   for (int i = 0; i < numDigits; i++) {\n         scanf(\"%d\", &tmp);\n            digits.push_back(tmp);\n        }\n     vector<int> ans = obj.plusOne(digits);\n        for (int i = 0; i < ans.size(); i++) {\n                printf(\"%d \", ans[i]);\n        }\n     cout<<endl;\n   return 0;\n}\n
"
    Sourcecode.first.update_attributes(body: @base_template)
    @problem = Sourcecode.first.problem
    @asked = Sourcecode.first.asked
    @nsubs = Sourcecode.first.nsubs
    @problem_name = Sourcecode.first.name
  end

  def create
    @artifact = Sourcecode.first
    @artifact.update_attributes(body: params[:code][:body])
    @instance = Ideone.new('codeevaluator','q1w2e3r4', true)
    @solution = params[:code][:body]
    
    if params[:test_button]
      @input_01 = Sourcecode.first.sampleinput
      @expected_output_01 = Sourcecode.first.sampleoutput
      @input_02 = Sourcecode.first.sampleinputa
      @expected_output_02 = Sourcecode.first.sampleoutputa
    else
      @input_01 = Sourcecode.first.input
      @expected_output_01 = Sourcecode.first.output
      @input_02 = Sourcecode.first.inputa
      @expected_output_02 = Sourcecode.first.outputa
    end
    
    @token_01 = @instance.create_submission(@solution, 41, @input_01)
    timeout = 4
    i = 0
    begin
      sleep 3  if i > 0
      @result = @instance.submission_status(@token_01)
      i += 1
    end while @result[:status] != 0 && i < timeout
    @result_number = @result[:result]
    @status_number = @result[:status]
    @details = @instance.submission_details(@token_01)
    
    @stderr = @details["stderr"]
    @cmpinfo = @details["cmpinfo"]
    @prog_output_01 = @details["output"]

    @flag_01 = false
    @flag_02 = false

    case @details["result"]
    when "0"
      @result_statement = "The program did not run"
    when "11"
      @result_statement = "The program did not compile correctly"
    when "12"
      @result_statement = "Runtime error"
    when "13"
      @result_statement = "Execution timed out"
    when "15"
      @result_statement = "Success!"
      @flag_01 = true
    when "17"
      @result_statement = "Memory limit exceeded"
    when "19"
      @result_statement = "Illegal system call"
    when "20"
      @result_statement = "Internal error occurred at ideone.com"
    else
      @result_statement = "Unknown result" 
    end

    if i == timeout
      @result_statement = "Timed out while waiting for code result."
      @flag_01 = false
    end

    if @flag_01 == true
      @token_02 = @instance.create_submission(@solution, 41, @input_02)
      timeout = 4
      i = 0
      begin
        sleep 3  if i > 0
        @result = @instance.submission_status(@token_02)
        i += 1
      end while @result[:status] != 0 && i < timeout
      @result_number = @result[:result]
      @status_number = @result[:status]
      @details = @instance.submission_details(@token_02)
      @stderr = @details["stderr"]
      @cmpinfo = @details["cmpinfo"]
      @prog_output_02 = @details["output"]

   
      case @details["result"]
      when "0"
        @result_statement = "The program did not run"
      when "11"
        @result_statement = "The program did not compile correctly"
      when "12"
        @result_statement = "Runtime error"
      when "13"
        @result_statement = "Execution timed out"
      when "15"
        @result_statement = "Success!"
        @flag_02 = true
      when "17"
        @result_statement = "Memory limit exceeded"
      when "19"
        @result_statement = "Illegal system call"
      when "20"
        @result_statement = "Internal error occurred at ideone.com"
      else
        @result_statement = "Unknown result" 
      end

      if i == timeout
        @result_statement = "Timed out while waiting for code result."
        @flag_01 = false
      end
    end
  end
end


