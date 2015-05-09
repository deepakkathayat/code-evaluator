require 'rubygems'
require 'bundler'
require 'ideone'

class CodeEvalController < ApplicationController
  respond_to :html, :js
  def index
    @base_template = "#include<iostream>\n#include<cstring>\n#include<cstdlib>\n#include<map>\n#include<vector>\n#include<set>\n#include<queue>\n#include<cmath>\n#include<algorithm>\n\nusing namespace std;\n\nclass Solution {\n   public:\n               vector<int> plusOne(vector<int> &digits) {\n                    // WRITE YOUR CODE HERE\n               }\n};\n\nint main() {\n Solution obj;\n int numDigits; \n       cin>>numDigits;\n       int tmp;\n      vector<int> digits;\n   for (int i = 0; i < numDigits; i++) {\n         scanf(\"%d\", &tmp);\n            digits.push_back(tmp);\n        }\n     vector<int> ans = obj.plusOne(digits);\n        for (int i = 0; i < ans.size(); i++) {\n                printf(\"%d \", ans[i]);\n        }\n     cout<<endl;\n   return 0;\n}\n
"
    Sourcecode.first.update_attributes(body: @base_template)
#    @base_template = Sourcecode.first.body
    @problem = Sourcecode.first.problem    
  end

  def create
    @artifact = Sourcecode.first
    if params[:reset_button]
       @artifact.update_attributes(body: "#include<iostream>\n#include<cstring>\n#include<cstdlib>\n#include<map>\n#include<vector>\n#include<set>\n#include<queue>\n#include<cmath>\n#include<algorithm>\n#include<cstdio>\n\nusing namespace std;\n\nclass Solution {\n   public:\n               vector<int> plusOne(vector<int> &digits) {\n                    // WRITE YOUR CODE HERE\n               }\n};\n\nint main() {\n Solution obj;\n int numDigits; \n       cin>>numDigits;\n       int tmp;\n      vector<int> digits;\n   for (int i = 0; i < numDigits; i++) {\n         scanf(\"%d\", &tmp);\n            digits.push_back(tmp);\n        }\n     vector<int> ans = obj.plusOne(digits);\n        for (int i = 0; i < ans.size(); i++) {\n                printf(\"%d \", ans[i]);\n        }\n     cout<<endl;\n   return 0;\n}\n
")
      @base_template = Sourcecode.first.body
      
    else
      @artifact.update_attributes(body: params[:code][:body])
      @instance = Ideone.new('codeevaluator','q1w2e3r4', true)
      @solution = params[:code][:body]
      if params[:test_button]
         input = Sourcecode.first.sampleinput
         @token = @instance.create_submission(@solution, 1, input)
      else
         input = Sourcecode.first.input
         @token = @instance.create_submission(@solution, 1, input)
      end
      timeout = 4
      i = 0
      begin
        sleep 3  if i > 0
        @result = @instance.submission_status(@token)
        i += 1
      end while @result[:status] != 0 && i < timeout
      @result_number = @result[:result]
      @status_number = @result[:status]
      @details = @instance.submission_details(@token)
    end
    case @details["result"]
      when "0"
        @result_statement = "Not running"
      when "11"
        @result_statement = "Compilation error"
      when "12"
        @result_statement = "Runtime error"
      when "13"
        @result_statement = "Execution timed out"
       when "15"
        @result_statement = "Success!"
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
    end

  end

end

  
