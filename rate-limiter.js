// class RateLimiter {
//     constructor(limit, interval) {
//       this.limit = limit; // Maximum number of requests allowed
//       this.interval = interval; // Time window in milliseconds
//       this.lastRequest = 0;
//       this.requestsCounter = 0;

//       this.tokens = limit; // Available tokens
//       this.lastRefillTimestamp = Date.now(); // Timestamp of the last token refill
//     }


//     refillTokens() {
//       const currentTime = Date.now();
//       const elapsedMilliseconds = currentTime - this.lastRefillTimestamp;

//       const tokensToAdd = Math.floor(elapsedMilliseconds / this.interval);
      
//       //console.log("elapsedMilliseconds: lastRefillTimestamp: tokensToAdd: ", elapsedMilliseconds, this.lastRefillTimestamp, tokensToAdd);
  
//       if (tokensToAdd > 0) {
//         this.tokens = Math.min(this.limit, this.tokens + tokensToAdd);
//         this.lastRefillTimestamp = currentTime;
//         //console.log("reset to lastRefillTimestamp: token: ",  this.lastRefillTimestamp, this.tokens); 
//       }
//     }
  
//     // Check if a request is allowed
//     allowRequest() {
//         this.refillTokens();
    
//         if (this.tokens > 0) {
//           this.tokens -= 1;
//           return true; // Request is allowed
//         } else {
//           return false; // Request limit exceeded
//         }
//       }


//       // Check if a request is allowed
//     makeRequest() {
//         const now = Date.now();

//         if (this.lastRequest > 0 && (now - this.lastRequest) < this.interval && this.requestsCounter >= this.limit) {
//             console.log('REJECT', '' + now, '' + (now - this.lastRequest), this.lastRequest)
//         }
//         else {
//             if ((now - this.lastRequest) > this.interval) {
//                 this.requestsCounter--
//             }

//             console.log('ALLOW', '' + now, '' + (now - this.lastRequest), this.lastRequest)

//             this.requestsCounter++
//         }

        

//         this.lastRequest = now;
//       }
//   }


//   class RateLimiter {
//     constructor(limit, interval) {
//       this.limit = limit;
//       this.interval = interval;
//       this.tokens = 0;
//       this.lastRefreshed = Date.now();
//       this.timer = setInterval(this.refreshTokens.bind(this), this.interval);
//     }
  
//     refreshTokens() {
//       const now = Date.now();
//       const elapsedTime = now - this.lastRefreshed;
//       const newTokens = elapsedTime * (this.limit / this.interval);
//       this.tokens = Math.min(this.limit, this.tokens + newTokens);
//       this.lastRefreshed = now;
//     }
  
//     request() {
//       if (this.tokens > 0) {
//         this.tokens--;
//         return true; // Request allowed
//       } else {
//         return false; // Rate limit exceeded
//       }
//     }
  
//     stop() {
//       clearInterval(this.timer);
//     }
//   }
  
//   // Example usage:
//   const limiter = new RateLimiter(5, 1000); // Allow 5 requests per second
  
//   // Simulate making requests
//   function simulateRequests() {
//     for (let i = 0; i < 15; i++) {
//       setTimeout(() => {
//         if (limiter.request()) {
//           console.log("Request allowed");
//         } else {
//           console.log("Rate limit exceeded");
//         }
//       }, i * 200); // Introducing delay between requests for demonstration
//     }
//   }
  
//   simulateRequests();
  
//   // Stop the limiter after 5 seconds (for demonstration purposes)
//   setTimeout(() => {
//     limiter.stop();
//     console.log("Rate limiter stopped");
//   }, 5000);
  
  
// //   // Example usage:
// //   const rateLimiter = new RateLimiter(4, 1000); // Allow 5 requests per second
  
// //   function makeRequest(timer) {
// //     if (rateLimiter.allowRequest()) {
// //       console.log("Request successful", Date.now(), timer);
// //     } else {
// //       console.log("Request limit exceeded", Date.now(), timer);
// //     }
// //   }
  
// //   // Simulate making requests
// //   for (let i = 1; i <= 12; i++) {
// //     const timer = 200 * i;
// //     setTimeout(() => {rateLimiter.makeRequest(timer)}, timer); // Make 8 requests with a delay of 200ms
// //   }



class RateLimiter {
    constructor(maxRequests, interval) {
      this.maxRequests = maxRequests;
      this.interval = interval;
      this.requests = [];
    }
  
    allowRequest() {
      const now = Date.now();
      this.requests = this.requests.filter(requestTime => (now - requestTime) < this.interval);

      console.log(this.requests)

      if (this.requests.length < this.maxRequests) {
        this.requests.push(now);
        return true; // Request allowed
      } else {
        return false; // Rate limit exceeded
      }
    }
  }
  
  // Example usage:
  const limiter = new RateLimiter(5, 1000); // Allow 5 requests per second
  
  // Simulate making requests
  function simulateRequests() {
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        if (limiter.allowRequest()) {
          console.log("Request allowed");
        } else {
          console.log("Rate limit exceeded");
        }
      }, i * 200); // Introducing delay between requests for demonstration
    }
  }
  
  simulateRequests();
  