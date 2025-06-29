const crypto = require("crypto");


// Step 1: Generate Key Pair (Public and Private)

const {publicKey, privateKey} = crypto.generateKeyPairSync('rsa',{
    modulusLength: 2048,
});



// Step 2: Create a message
const message = "This is a blockchain transaction";

// Step 3: Sign the message using the private key
const signature = crypto.sign("sha256", Buffer.from(message), {
    key : privateKey,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
});


// Step 4: Verify the message using the public key
const isVerified = crypto.verify("sha256", Buffer.from(message),{
    key : publicKey,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
}, signature);

// Output results
console.log("Original Message:", message);
console.log("Signature (base64):", signature.toString('base64'));
console.log("Is signature valid?", isVerified);
