class CodeEvalController < ApplicationController
  
  def index
    @message = Sourcecode.first.body
  end

  def create
    @artifact = Sourcecode.first
    if params[:reset_button]
      @artifact.update_attributes(body: "#include<iostream>\n#include<cstring>\n#include<cstdlib>\n#include<map>\n#include<vector>\n#include<set>\n#include<queue>\n#include<cmath>\n#include<algorithm>\n\nusing namespace std;\n\nclass Solution {\n   public:\n               vector<int> plusOne(vector<int> &digits) {\n                    // WRITE YOUR CODE HERE\n               }\n};\n\nint main() {\n Solution obj;\n int numDigits; \n       cin>>numDigits;\n       int tmp;\n      vector<int> digits;\n   for (int i = 0; i < numDigits; i++) {\n         scanf(\"%d\", &tmp);\n            digits.push_back(tmp);\n        }\n     vector<int> ans = obj.plusOne(digits);\n        for (int i = 0; i < ans.size(); i++) {\n                printf(\"%d \", ans[i]);\n        }\n     cout<<endl;\n   return 0;\n}\n
")
    else
      @artifact.update_attributes(body: params[:code][:body])
    end
    redirect_to code_eval_index_path(@artifact)
  end

end

  
