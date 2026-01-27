// Permission flags
const READ = 1;    // 0001
const WRITE = 2;   // 0010

// User has Read and Write permissions
let permissions = READ | WRITE;  // 3 (binary 11)

// Check if user has Write permission
if ((permissions & WRITE) === WRITE) {
  console.log("User can write.");
} else {
  console.log("User cannot write.");
}
