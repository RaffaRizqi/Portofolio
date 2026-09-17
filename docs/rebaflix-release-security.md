# RebaFlix release security

This document records the verified properties and remaining security limitations of the APK currently distributed through the official RebaFlix page.

## Published artifact

- Package: `com.rebaflix.app`
- Version: `1.3.0` (`versionCode` 5)
- File size: `11,106,477` bytes (11.1 MB)
- SHA-256: `D6CFC5CF1889AE2B3D45232D60D5175C6935F3523885FE3FE4F7F389699AB338`
- Minimum Android version: Android 8.0 (API 26)
- Target Android version: Android 15 (API 35)
- Signature: Android debug certificate, APK Signature Scheme v2
- Manifest flags: `debuggable=false`
- Optimization: R8/ProGuard and resource shrinking enabled
- High-risk permission requiring justification: `android.permission.REQUEST_INSTALL_PACKAGES`

## Remaining requirements for a production-signed release

1. Sign the APK with a protected production signing key instead of the Android Debug certificate.
2. Remove `REQUEST_INSTALL_PACKAGES` unless installing other APK files is an essential, reviewed feature.
3. Confirm that every network endpoint and embedded player dependency is controlled or explicitly trusted.
4. Run static analysis and a malware scan on the final signed artifact.
5. Re-verify the package name, version, compatibility, permissions, certificate, and checksum after signing.
