$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 230700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User login into application with \"jin\" and password \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 156676100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jin",
      "offset": 34
    },
    {
      "val": "1234",
      "offset": 53
    }
  ],
  "location": "stepDefination.user_login_into_application_with_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 2741500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "duration": 73700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "stepDefination.cards_displayed_are(String)"
});
formatter.result({
  "duration": 315500,
  "status": "passed"
});
formatter.after({
  "duration": 93500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User login in to application with \u003cUsername\u003e and password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "application-login;home-page-default-login;",
  "rows": [
    {
      "cells": [
        "Username",
        "password"
      ],
      "line": 40,
      "id": "application-login;home-page-default-login;;1"
    },
    {
      "cells": [
        "user1",
        "pass1"
      ],
      "line": 41,
      "id": "application-login;home-page-default-login;;2"
    },
    {
      "cells": [
        "user2",
        "pass2"
      ],
      "line": 42,
      "id": "application-login;home-page-default-login;;3"
    },
    {
      "cells": [
        "user3",
        "pass3"
      ],
      "line": 43,
      "id": "application-login;home-page-default-login;;4"
    },
    {
      "cells": [
        "user4",
        "pass4"
      ],
      "line": 44,
      "id": "application-login;home-page-default-login;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 120100,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User login in to application with user1 and password pass1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 77400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 34
    },
    {
      "val": "pass1",
      "offset": 53
    }
  ],
  "location": "stepDefination.user_login_into_application_with_and_password(String,String)"
});
formatter.result({
  "duration": 171200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "duration": 51900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "stepDefination.cards_displayed_are(String)"
});
formatter.result({
  "duration": 125900,
  "status": "passed"
});
formatter.after({
  "duration": 110700,
  "status": "passed"
});
formatter.before({
  "duration": 79600,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User login in to application with user2 and password pass2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 104500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 34
    },
    {
      "val": "pass2",
      "offset": 53
    }
  ],
  "location": "stepDefination.user_login_into_application_with_and_password(String,String)"
});
formatter.result({
  "duration": 195700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "duration": 62800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "stepDefination.cards_displayed_are(String)"
});
formatter.result({
  "duration": 107900,
  "status": "passed"
});
formatter.after({
  "duration": 49700,
  "status": "passed"
});
formatter.before({
  "duration": 94300,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User login in to application with user3 and password pass3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 44600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user3",
      "offset": 34
    },
    {
      "val": "pass3",
      "offset": 53
    }
  ],
  "location": "stepDefination.user_login_into_application_with_and_password(String,String)"
});
formatter.result({
  "duration": 242800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "duration": 80500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "stepDefination.cards_displayed_are(String)"
});
formatter.result({
  "duration": 156100,
  "status": "passed"
});
formatter.after({
  "duration": 93400,
  "status": "passed"
});
formatter.before({
  "duration": 101000,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User login in to application with user4 and password pass4",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 103400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user4",
      "offset": 34
    },
    {
      "val": "pass4",
      "offset": 53
    }
  ],
  "location": "stepDefination.user_login_into_application_with_and_password(String,String)"
});
formatter.result({
  "duration": 519900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "duration": 151000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "stepDefination.cards_displayed_are(String)"
});
formatter.result({
  "duration": 244400,
  "status": "passed"
});
formatter.after({
  "duration": 87300,
  "status": "passed"
});
});