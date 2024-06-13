import type { BuildPromptParameters } from "../../../index.js";

const diff = `
diff --git a/search.txt b/search.txt
index 0ed552c..83b21ef 100644
--- a/search.txt
+++ b/searchEdited.txt
@@ -4,8 +4,7 @@ export function search(nums: number[], target: number): number {
     while (r >= l) {
         let i = l + Math.floor((r - l) / 2)
         if (target === nums[i]) return i
-        if (target > (nums[i] ?? 0)) {
-            l = i + 1
+        if (target >
         } else {
             r = i - 1
         }
`

const breakingChangesAndErrorsChanges: BuildPromptParameters['changes'] = [
    {
        diff
    }
]

export { breakingChangesAndErrorsChanges } 