//Java Solution

class Solution {
    public int characterReplacement(String s, int k) {
        int left = 0;
        int right = 0;
        Map<Character, Integer> map = new HashMap<>();
        int ans = 0;
        int maxFreq = 0;
        
        while (right < s.length()) {
            char c = s.charAt(right);
            
            map.put(c, map.getOrDefault(c, 0) + 1);
            maxFreq = Math.max(maxFreq, map.get(c));
            
            if (right - left + 1 - maxFreq > k) {
                char removeChar = s.charAt(left++);
                map.replace(removeChar, map.get(removeChar), map.get(removeChar) - 1);
            }
            
            ans = Math.max(ans, right - left + 1);
            
            right++;
        }
        
        return ans;
    }
}