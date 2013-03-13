
var casper = require('casper').create({
    /* more traces with this 2 following options */
    //verbose: true,
    //logLevel: "info",
    httpStatusHandlers: {
        500: function(self, resource) {
            this.warn("Resource at " + resource.url + " server error (500)");
        },
        404: function(self, resource) {
            this.warn("Resource at " + resource.url + " is unreachable (404)");
        },
        301: function(self, resource) {
            this.warn("Resource at " + resource.url + " is moved permanently (301)");
        },
        302: function(self, resource) {
            this.warn("Resource at " + resource.url + " is moved temporarily (302)");
        }
    },
});

/* get args */
var email    = casper.cli.get(0);
var password = casper.cli.get(1); 
var folder   = "./pictures/";


// Page Category -- Header Menu

var BASE_URL             = "http://www.airlines-manager.com/";
var COCKPIT_URL          = "http://cockpit.airlines-manager.com";
var HOME_URL             = COCKPIT_URL+"/home";
var FINANCES_URL         = COCKPIT_URL+"/finances/";
var NETWORK_URL          = COCKPIT_URL+"/network/";
var AIRCRAFT_URL         = COCKPIT_URL+"/aircraft/";
var AIRCRAFT_GENERAL_URL = AIRCRAFT_URL+"general";
var AIRCRAFT_RENTAL_URL  = AIRCRAFT_URL+"rental";
var COMPANY_URL          = COCKPIT_URL+"/company/";
var SERVICES_URL         = COCKPIT_URL+"/services/";
var RESEARCH_URL         = COCKPIT_URL+"/research/";
var MARKETING_URL        = COCKPIT_URL+"/marketing/";
var AMPLUS_URL           = COCKPIT_URL+"/amplus/";
var ALLIANCE_URL         = COCKPIT_URL+"/alliance/"

// Page Category -- Sidebar Menu

var SHOP_URL             = COCKPIT_URL+"/shop";
var ALLIANCE_WALL_URL    = ALLIANCE_URL+"wall";
var MESSAGE_URL          = COCKPIT_URL+"/message/";
var GAZETTE_URL          = COCKPIT_URL+"/gazette/";
var HELP_URL             = "http://aide.airlines-manager.com/";

// Network -- subPages

var NETWORK_PLANNING_URL        = NETWORK_URL+"planning";
var NETWORK_GENERALPLANNING_URL = NETWORK_URL+"generalPlanning";
var NETWORK_NEWHUB_URL          = NETWORK_URL+"newHub";
var NETWORK_NEWLINE_URL         = NETWORK_URL+"newLine";

// Aircraft -- subPages

var AIRCRAFT_BUY_URL        = AIRCRAFT_URL+"buy";
var AIRCRAFT_BUYNEW_URL     = AIRCRAFT_BUY_URL+"/new";
var AIRCRAFT_BUYRENTAL_URL  = AIRCRAFT_BUY_URL+"/rental";

// Company -- subPages

var COMPANY_CUSTOMISE_URL   = COMPANY_URL+"customise";
var COMPANY_RANKING_URL     = COMPANY_URL+"ranking/";

// Research -- subPages

var RESEARCH_SERVICE_URL    = RESEARCH_URL+"service";
var RESEARCH_AIRCRAFT_URL   = RESEARCH_URL+"avions";

// Services - subPages

var SERVICE_PARTNERSHIP_URL    = SERVICES_URL+"4";
var SERVICE_INFRASTRUCTURE_URL = SERVICES_URL+"2";
var SERVICE_BOARDSERVICES_URL  = SERVICES_URL+"1";
var SERVICE_AIRPORT_URL        = SERVICES_URL+"3";

// Finances - subPages

var FINANCES_BANK_URL       = FINANCES_URL+"bank";
var FINANCES_ACCOUNTING_URL = FINANCES_URL+"accounting";

// Marketing - subPages

var MARKETING_AUDIT_URL         = MARKETING_URL+"internalAudit/lineList";
var MARKETING_PRICING_URL       = MARKETING_URL+"pricing/";

// AM+ - subPages

var AMPLUS_AMCOINSOFFERS_URL    = AMPLUS_URL+"amcoins/subscriptionOffer";
var AMPLUS_SPONSORSHIP_URL      = AMPLUS_URL+"sponsorship";
var AMPLUS_SHOP_URL             = AMPLUS_URL+"amcoins/shop";
var SHOP_AIRCRAFTSKINS_URL      = COCKPIT_URL+"/shop/aircraftSkins/";

// Alliance - subPages

var ALLIANCE_HUMANRESOURCES_URL  = ALLIANCE_URL+"humanResources";
var ALLIANCE_RECRUITEMENT_URL    = ALLIANCE_HUMANRESOURCES_URL+"/recruitments";
var ALLIANCE_CREATOROFFICE_URL   = ALLIANCE_URL+"creatorOffice";
var ALLIANCE_MARKETINGOFFICE_URL = ALLIANCE_URL+"marketingOffice";
var ALLIANCE_COMMUNICATION_URL   = ALLIANCE_URL+"communication";

var ALLIANCE_HUBSHARING_URL          = ALLIANCE_URL+"hubSharing";
var ALLIANCE_CONTRACTMANAGEMENT_URL  = ALLIANCE_HUBSHARING_URL+"/contractManagement";
var ALLIANCE_REQUESTMANAGEMENT_URL   = ALLIANCE_HUBSHARING_URL+"/requestManagement";
var ALLIANCE_CONTRACTNEW_URL         = ALLIANCE_HUBSHARING_URL+"/contractNew";
var ALLIANCE_PURCHASELIST_URL        = ALLIANCE_URL+"purchaseList";
var ALLIANCE_RESEARCH_URL            = ALLIANCE_URL+"research";
var ALLIANCE_RESEARCHBUYs_URL        = ALLIANCE_RESEARCH_URL+"/achatgroupe";
var ALLIANCE_RANKING_URL             = ALLIANCE_URL+"ranking";

// Gazette - subPages

var GAZETTE_ARCHIVES_URL         = GAZETTE_URL+"archive";


var allPages = {
                /* mainPages */  
                    "finances"                 : FINANCES_URL,
                    "network"                  : NETWORK_URL,
                    "aircraftGeneral"          : AIRCRAFT_GENERAL_URL,
                    "aircraftRental"           : AIRCRAFT_RENTAL_URL,
                    "company"                  : COMPANY_URL,
                    "services"                 : SERVICES_URL,
                    "marketing"                : MARKETING_URL,
                    "amplus"                   : AMPLUS_URL,
                    "shop"                     : SHOP_URL,
                    "allianceWall"             : ALLIANCE_WALL_URL,
            //      "messager"                 : MESSAGE_URL,
                    "gazette"                  : GAZETTE_URL,
                                
                /* networkPages */
                    "network_planning"         : NETWORK_PLANNING_URL,
                    "network_generalPlanning"  : NETWORK_GENERALPLANNING_URL,
                    "network_newHub"           : NETWORK_NEWHUB_URL,
                    "network_newLine"          : NETWORK_NEWLINE_URL,

                /* aircraftPages */
                    "aircraft_buy"             : AIRCRAFT_BUY_URL,
                    "aircraft_buyNew"          : AIRCRAFT_BUYNEW_URL,
                    "aircraft_buyRental"       : AIRCRAFT_BUYRENTAL_URL,
 
                /* companyPages */
                    "company_customise"        : COMPANY_CUSTOMISE_URL,
                    "company_ranking"          : COMPANY_RANKING_URL,
                
                /* researchPages */
                    "research_service"         : RESEARCH_SERVICE_URL,
                    "research_aircraft"        : RESEARCH_AIRCRAFT_URL,

                /* sevicePages */
                    "service_partnerShip"      : SERVICE_PARTNERSHIP_URL,
                    "service_infrastructure"   : SERVICE_INFRASTRUCTURE_URL,
                    "service_boardServices"    : SERVICE_BOARDSERVICES_URL,
                    "service_airport"          : SERVICE_AIRPORT_URL,

                /* financePages */
                    "finances_bank"            : FINANCES_BANK_URL,
                    "finances_accounting"      : FINANCES_ACCOUNTING_URL,

                /* marketingPages */
                    "marketing_auditLineList"  : MARKETING_AUDIT_URL,
                    "marketing_pricing"        : MARKETING_PRICING_URL,

                /* AM+ & Shop Pages */
                    "amplus_amcoinsOffer"      : AMPLUS_AMCOINSOFFERS_URL,
                    "amplus_sponsorship"       : AMPLUS_SPONSORSHIP_URL,
                    "amplus_shop"              : AMPLUS_SHOP_URL,
                    "shop_aircraftSkins"       : SHOP_AIRCRAFTSKINS_URL,

                /* Alliance Pages */
                    "alliance_humanResources"  : ALLIANCE_HUMANRESOURCES_URL,
                    "alliance_hubSharing"      : ALLIANCE_HUBSHARING_URL,
                    "alliance_purchaseList"    : ALLIANCE_PURCHASELIST_URL,
                    "alliance_research"        : ALLIANCE_RESEARCH_URL,
                    "alliance_ranking"         : ALLIANCE_RANKING_URL,
                    /* Alliance Offices */
                    "alliance_creatorOffice"   : ALLIANCE_CREATOROFFICE_URL,
                    "alliance_marketingOffice" : ALLIANCE_MARKETINGOFFICE_URL,
                    "alliance_communication"   : ALLIANCE_COMMUNICATION_URL,
                    /* Alliance hubSHaring */
                    "alliance_contracts"       : ALLIANCE_CONTRACTMANAGEMENT_URL,
                    "alliance_requests"        : ALLIANCE_REQUESTMANAGEMENT_URL,
                    "alliance_newContract"     : ALLIANCE_CONTRACTNEW_URL,
                /* Gazette Pages */
                    "gazette_archives"         : GAZETTE_ARCHIVES_URL
                };
 
// Go to the AM Evolution Login Page
casper.test.comment('Go to Login Page');
casper.start(BASE_URL, function() {
    this.test.pass('Login Page is loaded');
});
 
// Fill login form and submit
casper.thenOpen(HOME_URL,function() {
    this.test.info('Current location is ' + this.getCurrentUrl());
    this.fill('#loginBox', {
        '_username': email,
        '_password': password
    }, true);
});
 
// Check if User is logged in
casper.then(function() {
    this.test.pass('Game LoadingPage is loaded');
    this.test.info('Current location is ' + this.getCurrentUrl());
        this.capture(folder+'loadingPage.png');
});

//Check if User is in Home Page
    casper.thenOpen(HOME_URL,function() {
    this.test.pass('Game HomePage is loaded');
    this.test.info('Current location is ' + this.getCurrentUrl());
        this.capture(folder+'homePage.png');
});

casper.each(Object.keys(allPages), function(casper, page) {
  casper.thenOpen(allPages[page],function() {
    if(this.test.assertHttpStatus(200, allPages[page]))
    {
        this.capture(folder+page+'Page.png');
    }
  });

});

// Tests 

casper.run(function() {
    this.test.done();
    this.test.renderResults(true);
    this.exit();
});


