# Shield remediation

Upgrade follow-redirects 1.15.4 → 1.15.6

CVE-2024-28849 (MEDIUM) affects follow-redirects 1.15.4: follow-redirects before 1.15.6 leaks the Proxy-Authorization header across hosts on cross-domain redirects.. Upgrading to 1.15.6 incorporates the upstream patch. Applying this fix removes the vulnerable code path from the dependency tree.

This branch was opened automatically by C3 Shield to remediate a detected CVE.
