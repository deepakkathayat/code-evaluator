#include<iostream>
#include<cstring>
#include<cstdlib>
#include<map>
#include<vector>
#include<set>
#include<queue>
#include<cassert>
#include<sstream>
#include<string>
#include<cmath>
#include<algorithm>

using namespace std;

class Solution {
	public:
		vector<int> plusOne(vector<int> &digits) {
			reverse(digits.begin(), digits.end());
			vector<int> ans;
			int carry = 1;
			for (int i = 0; i < digits.size(); i++) {
				int sum = digits[i] + carry;
				ans.push_back(sum%10);
				carry = sum / 10;
			}
			while (carry) {
				ans.push_back(carry%10);
				carry /= 10;
			}
			while (ans[ans.size() - 1] == 0 && ans.size() > 1) {
				ans.pop_back();
			}
			reverse(ans.begin(), ans.end());
			reverse(digits.begin(), digits.end());
			return ans;
		}
};

int main() {
	Solution obj;
	int numDigits; 
	cin>>numDigits;
	int tmp;
	vector<int> digits;
	for (int i = 0; i < numDigits; i++) {
		scanf("%d", &tmp);
		digits.push_back(tmp);
	}
	vector<int> ans = obj.plusOne(digits);
	for (int i = 0; i < ans.size(); i++) {
		printf("%d ", ans[i]);
	}
	cout<<endl;
	return 0;
}
