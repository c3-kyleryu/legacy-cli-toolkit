# Shield remediation

Upgrade follow-redirects 1.15.4 → 1.16.0

GHSA-r4q5-vmmm-2653 (MEDIUM) affects follow-redirects 1.15.4: follow-redirects leaks Custom Authentication Headers to Cross-Domain Redirect Targets. Upgrading to 1.16.0 incorporates the upstream patch. Applying this fix removes the vulnerable code path from the dependency tree.

This branch was opened automatically by C3 Shield to remediate a detected CVE.
