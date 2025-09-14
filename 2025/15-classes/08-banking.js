class BankAccount {
   #balance;
   #minimumBalance;

   constructor (owner, initialBalance = 0) {
      if (typeof owner != "string" || owner.trim().length === 0) {
         throw new Error('Owner must be a non-empty string.');
      }
      if (typeof initialBalance != "number" || initialBalance < 0) {
         throw new Error('Inital balance must be a non-negative value.');  
      }

      this.owner = owner;
      this.#balance = initialBalance;
      this.#minimumBalance = 100;
   }

   #logTransaction (action) {
      console.log(`[Audit] ${action} on ${this.owner}'s account happend now -- it was you ?`);
   }

   deposit (amount) {
      if (typeof amount != "number" || amount <= 0) {
         throw new Error(`Amount must be a positive number`);
      }

      this.#balance += amount;
      this.#logTransaction(`Amount $${amount} deposited now.`);
      
      return this.#balance;
   }
   
   #isWithdrawlValid (amount) {
      if (amount > this.#balance) {
         return false;
      }
      
      const postWithdrawlBalance = this.#balance - amount;
      if (postWithdrawlBalance > this.#minimumBalance) {
         return true;
      }

      return false;
   }

   withdrawl (amount) {
      if (typeof amount != "number" || amount <= 0) {
         throw new Error(`Amount must be a positive number`);
      }

      if (!this.#isWithdrawlValid(amount)) { 
         throw new Error(`Insufficient Funds.`);
      }

      this.#balance -= amount;
      this.#logTransaction(`Amount $${amount} withdrawled now.`);
      
      return this.#balance;
   }


   get balance () {
      return `Balance for ${this.owner}: $${this.#balance}`;      
   } 
}

class bankStaffAccount extends BankAccount {
   freezeAccount(reason = "Suspicious activity observed") {
      console.log(`[staff] Freezing ${this.owner}'s account. Reason: ${reason}`);
      return  'Account freezed successfully.';
   }
}


try {

   const user = new BankAccount("Aryan",1000);
   user.deposit(500);
   user.withdrawl(200);
   
   console.log(user.balance);

   const staff = new bankStaffAccount();
   console.log(staff.freezeAccount(user));

   
} catch (error) {
   console.error(`Bank Error, ${error.message}`)   
}





