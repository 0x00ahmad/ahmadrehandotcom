# DNBazar

This is the official repository for the website/application project

---

## Todo list (because why not)

- convert the add domain form into a bulk supporting one
- add verification for when the user adds the transfer code to activate their domain for listing
- verify the transfer code when the buyer clicks confirm

---

### The purchase flow

Buyer intializes a purchase

- A pending transfer for a domain made for buyer, sellers domain moved to PENDING
- Seller uploads transfer code through domain info page
- Buyer gets emailed of the auth code.
- Buyer uses the code to transfer the domain.
- Buyer enters our confirmation code as mx record
- Buyer clicks "confirm & check" in order to add a job to our db to confirm these changes
- We check the dns records for change using our headless backend on railway or somewhere else
- We confirm and update the domain's statuses for both buyer/seller
- We release the payment

Done
