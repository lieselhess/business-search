var businesses = {};
businesses.biomechanics = {
  businessName: "University of Illinois Biomechanics Lab",
  number: "(217) 333-3676",
  email: "jdpolk@illinois.edu",
  address: ["607 S Mathews Ave", "M/C 148", "Urbana, IL 61801", "USA"]
 
};
businesses.wolfram = {
  businessName: "Wolfram Research",
  number: "(217) 398-0700",
  email: "info@wolframalpha.com",
  address: ["100 Trade Center Drive", "", "Champaign, IL 61820-7237", "USA"]
  
};

businesses.nueVista = {
    businessName: "NueVista Group",
    number: "(630) 472-6838",
    email: "info@nuevista.com",
    address: ["1301 West 22nd Street", "Suite 802", "Oak Brook, Illinois 60523", "USA"]
    
};

businesses.tpc = {
    businessName: "The Pampered Chef",
    number: "(888) 687-2433",
    email: "solution_center@pamperedchef.com",
    address: ["1 Pampered Chef Ln", "", "Addison, IL 60101", "USA"]
    
};

businesses.pki = {
    
    businessName: "Punchkick Interactive",
    number: "(800) 549-4104",
    email: "hello@punchkick.com",
    address: ["55 East Monroe Street", "Suite 3600", "Chicago, IL 60603", "USA" ]
    
    };
    
businesses.paylocity = {
    
    businessName: "Paylocity",
    number: "(800) 520-2687",
    email: "service@paylocity.com",
    address: ["3850 N. Wilke Road", "", "Arlington Heights, IL 60004", "USA"]
    
    };
    

    
var list = function(businesses) {
    for (var key in businesses) {
     console.log(key);   
    }
}

var search = function(name) {
    for (var key in businesses){
     if (name === businesses[key].businessName){
         alert("Business Name: " + businesses[key].businessName + "\nNumber: " + businesses[key].number + "\nEmail: " + businesses[key].email + "\nAddress: " + businesses[key].address); 
         console.log(businesses[key]);
         return businesses[key];
     }
     else {
         
     }
    }
}
list(name);
var searchTerm = prompt("Search by business name: ");
search(searchTerm);