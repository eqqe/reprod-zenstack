npm install
npx zenstack generate


⌛️ ZenStack CLI v2.7.0, running plugins
Prisma schema loaded from prisma\schema.prisma
Error: Prisma schema validation - (get-dmmf wasm)
Error code: P1012
error: Error validating model "Post": The index definition refers to the unknown fields: published.
  -->  prisma\schema.prisma:48
   |
47 |
48 |     @@index([published])
   |
error: Error validating model "Video": The index definition refers to the unknown fields: published.
  -->  prisma\schema.prisma:57
   |
56 |
57 |     @@index([published])
   |

Validation Error Count: 2
[Context: getDmmf]

Prisma CLI Version : 5.21.0
✖ Generating Prisma schema
Prisma: Failed to run "prisma generate"
