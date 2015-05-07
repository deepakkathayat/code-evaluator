#include&ltiostream&gt
#include&ltcstring&gt
#include&ltcstdlib&gt
#include&ltmap&gt
#include&ltvector&gt
#include&ltset&gt
#include&ltqueue&gt
#include&ltcmath&gt
#include&ltalgorithm&gt

using namespace std;

class Solution {
	public:
		vector&ltint&gt plusOne(vector&ltint&gt &digits) {
			// WRITE YOUR CODE HERE
		}
};

int main() {
	Solution obj;
	int numDigits; 
	cin&gt&gtnumDigits;
	int tmp;
	vector&ltint&gt digits;
	for (int i = 0; i &lt numDigits; i++) {
		scanf("%d", &tmp);
		digits.push_back(tmp);
	}
	vector&ltint&gt ans = obj.plusOne(digits);
	for (int i = 0; i &lt ans.size(); i++) {
		printf("%d ", ans[i]);
	}
	cout&lt&ltendl;
	return 0;
}
