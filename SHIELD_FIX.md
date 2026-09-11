# Shield remediation

Upgrade tough-cookie 4.1.2 → 4.1.3

CVE-2023-26136 (CRITICAL) affects tough-cookie 4.1.2: tough-cookie before 4.1.3 is vulnerable to prototype pollution via the CookieJar when in rejectPublicSuffixes=false mode.. Upgrading to 4.1.3 incorporates the upstream patch. Applying this fix removes the vulnerable code path from the dependency tree.

This branch was opened automatically by C3 Shield to remediate a detected CVE.
